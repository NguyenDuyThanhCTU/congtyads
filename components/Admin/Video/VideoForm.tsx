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

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: any;
};

export default function VideoForm({ open, setOpen, data }: Props) {
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
        title: dataSelect[0]?.title || undefined,
        subtitle: dataSelect[0]?.subtitle || undefined,
        link: dataSelect[0]?.link || undefined,
      });
    } else {
      form.setFieldsValue({
        title: undefined,
        subtitle: undefined,
        link: undefined,
      });
    }
  }, [id, open]);

  const handleSuccess = () => {
    if (imgSrc !== undefined && id === "") {
      addDocument("videos", {
        ...form.getFieldsValue(),
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
      updateDocument("videos", id, {
        ...form.getFieldsValue(),
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
              THÔNG TIN VIDEO
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSuccess}>
              LƯU LẠI
            </Button>
          </Toolbar>
        </AppBar>
        <DialogTitle>
          {id !== ""
            ? "Chỉnh sửa thông tin video"
            : "Thêm video mới vào Website"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid hidden={openEditor} item sm={4}>
              <Card
                className="shadow-md h-full"
                hoverable
                type="inner"
                title="Điền thông tin video"
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
                    label="Tiêu đề :"
                    name="title"
                    rules={[
                      { required: true, message: "Nhập tiêu đề bài viết !" },
                    ]}
                  >
                    <Input.TextArea placeholder="Tiêu đề video..." />
                  </Form.Item>
                  <Form.Item label="Phụ đề :" name="subtitle">
                    <Input.TextArea placeholder="Nhập phụ đề video..." />
                  </Form.Item>
                  <Form.Item label="Liên kết :" name="link">
                    <Input.TextArea
                      onChange={(e) => setImgSrc(e.target.value)}
                      placeholder="Nhập liên kết..."
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
                title="Video hiển thị"
                extra={
                  <p className="italic hover:text-blue-500 hover:underline">
                    Hướng dẫn
                  </p>
                }
              >
                <iframe
                  className="w-full aspect-[2/3]"
                  src={dataSelect[0]?.link || imgSrc}
                  title={dataSelect[0]?.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
