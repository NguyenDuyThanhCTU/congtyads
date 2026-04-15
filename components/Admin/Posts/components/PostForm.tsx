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
import { Card, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useGlobalState } from "../../../../Context/GlobalProvider";
import { addDocument, updateDocument } from "../../../../lib/firebase/service";
import Editor from "../../../ReactQuill/Edittor";
import AlertMessage from "../../components/AlertMessage";
import { UpLoadImage } from "../../components/UpLoadImage";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: any;
};

export default function PostForm({ open, setOpen, data }: Props) {
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
        group: dataSelect[0]?.group || undefined,
        auth: dataSelect[0]?.auth || undefined,
      });
    } else {
      form.setFieldsValue({
        title: undefined,
        subtitle: undefined,
        group: undefined,
        auth: undefined,
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
      addDocument("posts", {
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
      updateDocument("posts", id, {
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
              THÔNG TIN BÀI VIẾT
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSuccess}>
              LƯU LẠI
            </Button>
          </Toolbar>
        </AppBar>
        <DialogTitle>
          {id !== ""
            ? "Chỉnh sửa thông tin bài viết"
            : "Thêm bài viết mới vào Website"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            <Grid hidden={openEditor} item sm={4}>
              <Card
                className="shadow-md h-full"
                hoverable
                type="inner"
                title="Điền thông tin sản phẩm"
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
                    <Input.TextArea placeholder="Tiêu đề bài viết..." />
                  </Form.Item>
                  <Form.Item label="Phụ đề :" name="subtitle">
                    <Input.TextArea placeholder="Nhập phụ đề bài viết..." />
                  </Form.Item>
                  <Form.Item label="Phân loại :" name="group">
                    <Select
                      showSearch
                      placeholder="Nhập tìm kiếm"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      style={{ zIndex: 2000 }}
                      options={[
                        {
                          value: "KHUYẾN MÃI HOT",
                          label: "KHUYẾN MÃI HOT",
                        },
                        {
                          value: "HOẠT ĐỘNG CÔNG TY",
                          label: "HOẠT ĐỘNG CÔNG TY",
                        },
                        {
                          value: "SỰ KIỆN CÔNG TY",
                          label: "SỰ KIỆN CÔNG TY",
                        },
                        {
                          value: "TIN TUYỂN DỤNG",
                          label: "TIN TUYỂN DỤNG",
                        },
                        {
                          value: "KIẾN THỨC CHUNG",
                          label: "KIẾN THỨC CHUNG",
                        },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item label="Tác giả :" name="auth">
                    <Input placeholder="Nhập tên tác giả..." />
                  </Form.Item>
                </Form>
              </Card>
            </Grid>
            <Grid hidden={openEditor} item sm={3}>
              <Card
                className="shadow-md h-full"
                hoverable
                type="inner"
                title="Upload hình ảnh bài viết"
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
