import {
  AppBar,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Card, Form, Input } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalState } from "../../../Context/GlobalProvider";
import { addDocument, updateDocument } from "../../../lib/firebase/service";
import Editor from "../../ReactQuill/Edittor";
import AlertMessage from "../components/AlertMessage";
import { UpLoadListImage } from "../components/UpLoadListImage";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: any;
};

export default function AlbumForm({ open, setOpen, data }: Props) {
  const { id, setId, listImgSrc, setListImgSrc, editor, setEditor } =
    useGlobalState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [openEditor, setOpenEditor] = useState(false);
  const [form] = Form.useForm();
  const dataSelect = data.filter((obj: any) => {
    return obj.id === id;
  });
  useEffect(() => {
    if (id !== "") {
      form.setFieldsValue({
        name: dataSelect[0]?.name || undefined,
        description: dataSelect[0]?.description || undefined,
      });
    } else {
      form.setFieldsValue({
        name: undefined,
        description: undefined,
      });
    }
  }, [id, open]);

  const handleSuccess = () => {
    if (listImgSrc === undefined) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    if (listImgSrc !== undefined && id === "") {
      addDocument("albums", {
        ...form.getFieldsValue(),
        listphotoURL: listImgSrc ? listImgSrc : undefined,
        editor: editor || undefined,
      });
      setOpen(false);
      setId("");
      setListImgSrc([]);
      form.resetFields();
      setEditor(undefined);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
    if (listImgSrc !== undefined && id !== "") {
      updateDocument("albums", id, {
        ...form.getFieldsValue(),
        listphotoURL: listImgSrc ? listImgSrc : undefined,
        editor: editor || undefined,
      });
      setOpen(false);
      setId("");
      setListImgSrc([]);
      form.resetFields();
      setEditor(undefined);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };
  const handleCancel = () => {
    setOpen(false);
    setListImgSrc([]);
    setId("");
    form.resetFields();
    setEditor(undefined);
  };
  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleCancel}
        style={{ zIndex: 200 }}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCancel}
              aria-label="close"
            >
              <AiOutlineClose />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              THÔNG TIN ALBUM ẢNH
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSuccess}>
              LƯU LẠI
            </Button>
          </Toolbar>
        </AppBar>
        <DialogTitle>
          {id !== ""
            ? "Chỉnh sửa thông tin album"
            : "Thêm album mới vào Website"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid hidden={openEditor} item sm={4}>
              <Card
                className="shadow-md h-full"
                hoverable
                type="inner"
                title="Điền thông tin"
                extra={
                  <p className="italic hover:text-blue-500 hover:underline">
                    Hướng dẫn
                  </p>
                }
              >
                <Form
                  size="large"
                  form={form}
                  layout="horizontal"
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                >
                  <Form.Item
                    label="Tên album:"
                    name="name"
                    rules={[{ required: true, message: "Nhập tên album !" }]}
                  >
                    <Input placeholder="Tên album..." />
                  </Form.Item>
                  <Form.Item label="Mô tả album :" name="description">
                    <Input.TextArea rows={4} placeholder="Mô tả album..." />
                  </Form.Item>
                </Form>
              </Card>
            </Grid>
            <Grid hidden={openEditor} item sm={3}>
              <Card
                className="shadow-md h-full"
                hoverable
                type="inner"
                title="Upload hình ảnh album"
                extra={
                  <p className="italic hover:text-blue-500 hover:underline">
                    Hướng dẫn
                  </p>
                }
              >
                <UpLoadListImage defaultValue={dataSelect[0]?.listphotoURL} />
              </Card>
            </Grid>
            <Grid item sm={openEditor ? 12 : 5}>
              <Card
                className="shadow-md h-full"
                hoverable
                type="inner"
                title="Bài viết album"
                extra={
                  <Button onClick={() => setOpenEditor(!openEditor)}>
                    {openEditor ? "Thu nhỏ" : "Mở rộng"}
                  </Button>
                }
              >
                <Editor />
              </Card>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      {success && (
        <AlertMessage type="success" message="Đã cập nhật nội dung !" />
      )}
      {error && <AlertMessage type="error" message="Chưa tải lên hình ảnh !" />}
    </>
  );
}
