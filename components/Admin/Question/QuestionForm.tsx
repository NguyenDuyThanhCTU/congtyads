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
import { UpLoadImage } from "../components/UpLoadImage";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: any;
};

export default function QuestionForm({ open, setOpen, data }: Props) {
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
        question: dataSelect[0]?.question || undefined,
        answer: dataSelect[0]?.answer || undefined,
      });
    } else {
      form.setFieldsValue({
        question: undefined,
        answer: undefined,
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
      addDocument("question", {
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
      updateDocument("question", id, {
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
              THÔNG TIN CÂU HỎI
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSuccess}>
              LƯU LẠI
            </Button>
          </Toolbar>
        </AppBar>
        <DialogTitle>
          {id !== ""
            ? "Chỉnh sửa thông tin câu hỏi"
            : "Thêm câu hỏi mới vào Website"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid hidden={openEditor} item sm={4}>
              <Card
                className="shadow-md h-full"
                hoverable
                type="inner"
                title="Điền thông tin câu hỏi"
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
                    label="Câu hỏi :"
                    name="question"
                    rules={[{ required: true, message: "Nhập câu hỏi !" }]}
                  >
                    <Input.TextArea placeholder="Nhập câu hỏi..." />
                  </Form.Item>
                  <Form.Item
                    label="Câu trả lời :"
                    name="answer"
                    rules={[{ required: true, message: "Nhập câu trả lời !" }]}
                  >
                    <Input.TextArea placeholder="Nhập câu trả lời..." />
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
                title="Viết bài"
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
