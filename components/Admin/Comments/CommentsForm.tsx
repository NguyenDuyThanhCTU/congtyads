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
import { Card, Form, Input, Rate } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalState } from "../../../Context/GlobalProvider";
import { addDocument, updateDocument } from "../../../lib/firebase/service";
import Editor from "../../ReactQuill/Edittor";
import AlertMessage from "../components/AlertMessage";
import { UpLoadImage } from "../components/UpLoadImage";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: any;
};

export default function CommentsForm({ open, setOpen, data }: Props) {
  const { id, setId, imgSrc, setImgSrc, editor, setEditor } = useGlobalState();
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
        comment: dataSelect[0]?.comment || undefined,
      });
    } else {
      form.setFieldsValue({
        name: undefined,
        comment: undefined,
      });
    }
  }, [id, open]);

  const handleSuccess = () => {
    if (imgSrc === undefined) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    if (imgSrc !== undefined && id === "") {
      addDocument("comments", {
        ...form.getFieldsValue(),
        photoURL: imgSrc,
        editor: editor || undefined,
      });
      setOpen(false);
      setId("");
      setImgSrc("");
      form.resetFields();
      setEditor(undefined);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
    if (imgSrc !== undefined && id !== "") {
      updateDocument("comments", id, {
        ...form.getFieldsValue(),
        photoURL: imgSrc,
        editor: editor || undefined,
      });
      setOpen(false);
      setId("");
      setImgSrc("");
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
    setImgSrc("");
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
              THÔNG TIN COMMENT
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSuccess}>
              LƯU LẠI
            </Button>
          </Toolbar>
        </AppBar>
        <DialogTitle>
          {id !== ""
            ? "Chỉnh sửa thông tin comment"
            : "Thêm comment mới vào Website"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid hidden={openEditor} item sm={4}>
              <Card
                className="shadow-md h-full"
                hoverable
                type="inner"
                title="Điền thông tin dánh giá"
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
                    label="Họ và tên :"
                    name="name"
                    rules={[
                      { required: true, message: "Nhập vào họ và tên !" },
                    ]}
                  >
                    <Input placeholder="Nhập vào họ và tên..." />
                  </Form.Item>
                  <Form.Item label="Chấm sao :" name="rate">
                    <Rate allowHalf />
                  </Form.Item>
                  <Form.Item label="Nội dung đánh giá :" name="comment">
                    <Input.TextArea
                      rows={4}
                      placeholder="Nhập nội dung đánh giá..."
                    />
                  </Form.Item>
                </Form>
              </Card>
            </Grid>
            <Grid hidden={openEditor} item sm={3}>
              <Card
                className="shadow-md h-full"
                hoverable
                type="inner"
                title="Upload hình ảnh"
                extra={
                  <p className="italic hover:text-blue-500 hover:underline">
                    Hướng dẫn
                  </p>
                }
              >
                <UpLoadImage defaultValue={dataSelect[0]?.photoURL} />
              </Card>
            </Grid>
            <Grid item sm={openEditor ? 12 : 5}>
              <Card
                className="shadow-md h-full"
                hoverable
                type="inner"
                title="Viết bài viết"
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
