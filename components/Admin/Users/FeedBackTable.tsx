import { Avatar, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Card, Popconfirm } from "antd";
import moment from "moment";
import { useGlobalState } from "../../../Context/GlobalProvider";
import { deleteDocument } from "../../../lib/firebase/service";

type Props = {
  data: any;
};

export default function FeedBackTable({ data }: Props) {
  const { id, setId, setEditor } = useGlobalState();
  const columns = [
    { field: "id", headerName: "ID", width: 100 },

    {
      field: "photoURL",
      headerName: "Ảnh đại diện",
      renderCell: (params: any) => (
        <Avatar aria-label="recipe" src={params.value.photoURL}>
          {!params.value.photoURL && params.value.displayName.charAt(0)}
        </Avatar>
      ),
      width: 70,
    },
    { field: "displayName", headerName: "Họ và tên", width: 200 },
    { field: "email", headerName: "Địa chỉ Email", width: 240 },
    { field: "phoneNumber", headerName: "Số điện thoại", width: 200 },
    {
      field: "feedback",
      headerName: "Phản hồi",
      renderCell: (params: any) => (
        <div>
          {params.value === true ? (
            <p className="font-bold text-red-500">Quản trị viên</p>
          ) : (
            <p>Người dùng</p>
          )}
        </div>
      ),
      width: 250,
    },

    { field: "createdAt", headerName: "Ngày gửi", width: 150 },
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
            title="Xác nhận xoá phản hồi này ?"
            onConfirm={() => deleteDocument("feedback", id)}
          >
            <Button variant="contained" color="error">
              XÓA
            </Button>
          </Popconfirm>
        </div>
      ),
      width: 100,
    },
  ];
  const rows = data?.map((data: any) => ({
    id: data.id,
    photoURL: data,
    displayName: data.displayName,
    email: data.email,
    phoneNumber: data.phoneNumber,
    feedback: data.feedback,
    createdAt: moment(data.createdAt?.toDate()).format("DD/MM/YYYY"),
    action: data,
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
          title="Feedback của người dùng"
          extra={
            <p className="italic hover:text-blue-500 hover:underline">
              Hướng dẫn
            </p>
          }
        >
          <div>{dataTable}</div>
        </Card>
      </div>
    </>
  );
}
