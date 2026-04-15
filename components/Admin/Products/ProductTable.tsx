import { Button, ButtonGroup } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Card, Image, Popconfirm, Popover } from "antd";
import { serverTimestamp } from "firebase/firestore";
import moment from "moment";
import { useState } from "react";
import { CSVLink } from "react-csv";
import { AiFillDelete } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { useGlobalState } from "../../../Context/GlobalProvider";
import { deleteDocument, updateDocument } from "../../../lib/firebase/service";
import ProductForm from "./ProductForm";

type Props = {
  data: any;
};

export default function ProductTable({ data }: Props) {
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
              updateDocument("products", id, {
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
            onConfirm={() => deleteDocument("products", id)}
          >
            <div className="p-2 hover:bg-blue-300 rounded-full">
              <AiFillDelete className="text-xl text-red-500" />
            </div>
          </Popconfirm>
        </div>
      ),
      width: 150,
    },
    { field: "name", headerName: "Tên sản phẩm", width: 200 },
    {
      field: "photoURL",
      headerName: "Hình ảnh",
      renderCell: (params: any) => <Image alt="Hình ảnh" src={params.value} />,
      width: 250,
    },
    { field: "group", headerName: "Nhóm sản phẩm", width: 150 },
    { field: "class1", headerName: "Phân loại 1", width: 150 },
    { field: "class2", headerName: "Phân loại 2", width: 150 },
    {
      field: "price",
      headerName: "Giá tiền",
      renderCell: (params: any) =>
        Number(params.value).toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        }),
      width: 150,
    },
    { field: "discount", headerName: "Giá khuyến mãi", width: 150 },
    { field: "description", headerName: "Mô tả", width: 200 },
    { field: "createdAt", headerName: "Ngày Upload", width: 150 },
  ];
  const rows = data?.map((data: any) => ({
    id: data.id,
    action: data,
    name: data.name,
    photoURL: data.photoURL,
    group: data.group,
    class1: data.class1,
    class2: data.class2,
    price: data.price,
    discount: data.discount,
    description: data.description,
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
      pageSize={10}
      rowsPerPageOptions={[10]}
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
          title="Danh sách sản phẩm"
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
      <ProductForm open={open} setOpen={setOpen} data={data} />
    </>
  );
}
