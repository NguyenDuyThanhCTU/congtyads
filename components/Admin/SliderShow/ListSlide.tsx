import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Card, Image, Popconfirm } from "antd";
import { serverTimestamp } from "firebase/firestore";
import moment from "moment";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { useGlobalState } from "../../../Context/GlobalProvider";
import { deleteDocument, updateDocument } from "../../../lib/firebase/service";
import FormSlide from "./FormSlide";
import SlideDemo from "./SlideDemo";

export interface Props {
  slidershow: any;
}

export default function ListSlide({ slidershow }: Props) {
  const { id, setId } = useGlobalState();
  const [open, setOpen] = useState(false);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.3 },
    { field: "title", headerName: "Tiêu đề", flex: 1 },
    { field: "link", headerName: "Liên kết", flex: 1 },
    { field: "createdAt", headerName: "Ngày Upload", flex: 1 },
    {
      field: "photoURL",
      headerName: "Hình ảnh",
      renderCell: (params: any) => <Image alt="Hình ảnh" src={params.value} />,
      flex: 1,
    },
    {
      field: "action",
      headerName: "Hành động",
      renderCell: (params: any) => (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setId(params.value.id)}
        >
          <Popconfirm
            title="Xác nhận đưa nội dung này lên đầu ?"
            onConfirm={() => {
              updateDocument("slidershow", id, {
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
            onConfirm={() => deleteDocument("slidershow", id)}
          >
            <div className="p-2 hover:bg-blue-300 rounded-full">
              <AiFillDelete className="text-xl text-red-500" />
            </div>
          </Popconfirm>
        </div>
      ),
      flex: 1,
    },
  ];
  const rows = slidershow?.map((data: any) => ({
    id: data.id,
    title: data.title,
    link: data.link,
    createdAt: moment(data.createdAt?.toDate()).format("DD/MM/YYYY"),
    photoURL: data.photoURL,
    action: data,
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
      <div className="mb-5">
        <Card
          className="shadow-md"
          hoverable
          type="inner"
          title="Danh sách slide Website"
          extra={
            <Button variant="contained" onClick={() => setOpen(true)}>
              Thêm mới
            </Button>
          }
        >
          <div>{dataTable}</div>
        </Card>
      </div>
      <SlideDemo data={slidershow} />
      <FormSlide open={open} setOpen={setOpen} data={slidershow} />
    </>
  );
}
