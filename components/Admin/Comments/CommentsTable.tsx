import { Button, ButtonGroup } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Card, Image, Popconfirm, Popover, Rate } from "antd";
import { serverTimestamp } from "firebase/firestore";
import moment from "moment";
import { useState } from "react";
import { CSVLink } from "react-csv";
import { AiFillDelete } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { useGlobalState } from "../../../Context/GlobalProvider";
import { deleteDocument, updateDocument } from "../../../lib/firebase/service";
import CommentsForm from "./CommentsForm";

type Props = {
  data: any;
};

export default function CommentsTable({ data }: Props) {
  const { id, setId, setEditor } = useGlobalState();
  const [open, setOpen] = useState(false);
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "action",
      headerName: "Hành động",
      renderCell: (params: any) => (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            setId(params.value.id);
            setEditor(params.value.editor);
          }}
        >
          <Popconfirm
            title="Xác nhận đưa nội dung này lên đầu ?"
            onConfirm={() => {
              updateDocument("comments", id, {
                createdAt: serverTimestamp(),
              });
            }}
          >
            <div className="p-2 hover:bg-blue-300 rounded-full">
              <BsFillArrowUpCircleFill className="text-xl text-blue-500" />
            </div>
          </Popconfirm>
          <div
            className="p-2 hover:bg-blue-300 rounded-full"
            onClick={() => setOpen(true)}
          >
            <FaEdit className="text-xl text-orange-500" />
          </div>
          <Popconfirm
            title="Xác nhận xoá nội dung này ?"
            onConfirm={() => deleteDocument("comments", id)}
          >
            <div className="p-2 hover:bg-blue-300 rounded-full">
              <AiFillDelete className="text-xl text-red-500" />
            </div>
          </Popconfirm>
        </div>
      ),
      width: 150,
    },
    { field: "name", headerName: "Họ và tên", width: 200 },
    { field: "comment", headerName: "Nội dung bình luận", width: 250 },
    {
      field: "rate",
      headerName: "Chấm sao",
      renderCell: (params: any) => (
        <Rate disabled allowHalf defaultValue={params.value} />
      ),
      width: 200,
    },
    {
      field: "photoURL",
      headerName: "Hình ảnh đi kèm",
      renderCell: (params: any) => (
        <Image
          alt="Hình ảnh"
          src={
            params.value ||
            "https://www.thereloadersnetwork.com/wp-content/uploads/2020/01/like-comment-share-subscribe.png"
          }
        />
      ),
      width: 250,
    },
    { field: "createdAt", headerName: "Ngày Upload", width: 150 },
  ];
  const rows = data?.map((data: any) => ({
    id: data.id,
    action: data,
    name: data.name,
    comment: data.comment,
    rate: data.rate,
    photoURL: data.photoURL,
    createdAt: moment(data.createdAt?.toDate()).format("DD/MM/YYYY"),
  }));
  const dataCSV = data?.map((data: any) => ({
    "Họ & Tên HS": data.name,
    "Trường Học": data.group,
  }));
  const dataTable = (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      autoHeight
    />
  );
  return (
    <>
      <div className="h-full">
        <Card
          className="shadow-md h-full"
          hoverable
          type="inner"
          title="Danh sách đánh giá"
          extra={
            <p className="italic hover:text-blue-500 hover:underline">
              Hướng dẫn
            </p>
          }
        >
          <div className="flex justify-end p-2">
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button color="primary" onClick={() => setOpen(true)}>
                THÊM MỚI
              </Button>
              <Button color="success">
                <CSVLink filename={"data.csv"} data={dataCSV} target="_blank">
                  XUẤT EXCEL
                </CSVLink>
              </Button>
              <Popover
                title="Tính năng bị khóa vì bảo mật !"
                content="Liên hệ bộ phận kỹ thuật để sử dụng tính năng này !"
                trigger="click"
              >
                <Button color="error">XÓA HẾT</Button>
              </Popover>
            </ButtonGroup>
          </div>
          <div>{dataTable}</div>
        </Card>
      </div>
      <CommentsForm open={open} setOpen={setOpen} data={data} />
    </>
  );
}
