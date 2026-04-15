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
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useData } from "../../../Context/DataProvider";
import { useGlobalState } from "../../../Context/GlobalProvider";
import { addDocument, updateDocument } from "../../../lib/firebase/service";
import Editor from "../../ReactQuill/Edittor";
import AlertMessage from "../components/AlertMessage";
import { UpLoadImage } from "../components/UpLoadImage";
import { UpLoadListImage } from "../components/UpLoadListImage";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: any;
};

export default function ProductForm({ open, setOpen, data }: Props) {
  const {
    id,
    setId,
    imgSrc,
    setImgSrc,
    listImgSrc,
    setListImgSrc,
    editor,
    setEditor,
  } = useGlobalState();
  const { typeproducts } = useData();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [openEditor, setOpenEditor] = useState(false);
  const [class2, setClass2] = useState<any[]>([]);
  const [form] = Form.useForm();
  const dataSelect = data.filter((obj: any) => {
    return obj.id === id;
  });
  useEffect(() => {
    if (id !== "") {
      form.setFieldsValue({
        name: dataSelect[0]?.name || undefined,
        group: dataSelect[0]?.group || undefined,
        class1: dataSelect[0]?.class1 || undefined,
        class2: dataSelect[0]?.class2 || undefined,
        price: dataSelect[0]?.price || undefined,
        discount: dataSelect[0]?.discount || undefined,
        description: dataSelect[0]?.description || undefined,
      });
    } else {
      form.setFieldsValue({
        name: undefined,
        group: undefined,
        class1: undefined,
        class2: undefined,
        price: undefined,
        discount: undefined,
        description: undefined,
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
      addDocument("products", {
        ...form.getFieldsValue(),
        photoURL: imgSrc,
        listphotoURL: listImgSrc ? listImgSrc : undefined,
        editor: editor || undefined,
      });
      setOpen(false);
      setId("");
      setImgSrc("");
      setListImgSrc([]);
      form.resetFields();
      setEditor(undefined);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
    if (imgSrc !== undefined && id !== "") {
      updateDocument("products", id, {
        ...form.getFieldsValue(),
        photoURL: imgSrc,
        listphotoURL: listImgSrc ? listImgSrc : undefined,
        editor: editor || undefined,
      });
      setOpen(false);
      setId("");
      setImgSrc("");
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
    setImgSrc("");
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
              THÔNG TIN SẢN PHẨM
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSuccess}>
              LƯU LẠI
            </Button>
          </Toolbar>
        </AppBar>
        <DialogTitle>
          {id !== ""
            ? "Chỉnh sửa thông tin sản phẩm"
            : "Thêm sản phẩm mới vào Website"}
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
                    label="Tên sản phẩm :"
                    name="name"
                    rules={[{ required: true, message: "Nhập tên sản phẩm !" }]}
                  >
                    <Input placeholder="Tên sản phẩm..." />
                  </Form.Item>
                  <Form.Item label="Nhóm sản phẩm :" name="group">
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
                          value: "Sản phẩm sales",
                          label: "Sản phẩm sales",
                        },
                        {
                          value: "Sản phẩm nổi bật",
                          label: "Sản phẩm nổi bật",
                        },
                        {
                          value: "Sản phẩm mới",
                          label: "Sản phẩm mới",
                        },
                        {
                          value: "Sản phẩm thanh lý",
                          label: "Sản phẩm thanh lý",
                        },
                        {
                          value: "Quà tặng đặc biệt",
                          label: "Quà tặng đặc biệt",
                        },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item label="Phân loại cấp 1 :" name="class1">
                    <Select
                      showSearch
                      placeholder="Nhập tìm kiếm"
                      optionFilterProp="children"
                      filterOption={(input, option: any) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      style={{ zIndex: 2000 }}
                      options={typeproducts?.map((data: any) => ({
                        value: data.class1,
                        label: data.class1,
                      }))}
                      onChange={(value: string) => {
                        setClass2(
                          typeproducts.filter((obj: any) => {
                            return obj.class1 === value;
                          })
                        );
                        console.log(class2);
                      }}
                    />
                  </Form.Item>
                  <Form.Item label="Phân loại cấp 2 :" name="class2">
                    <Select
                      showSearch
                      placeholder="Nhập tìm kiếm"
                      optionFilterProp="children"
                      filterOption={(input, option: any) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      style={{ zIndex: 2000 }}
                      options={class2[0]?.class2.map((data: any) => ({
                        value: data,
                        label: data,
                      }))}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Giá tiền :"
                    name="price"
                    rules={[{ required: true, message: "Nhập giá sản phẩm !" }]}
                  >
                    <Input type="number" placeholder="Giá sản phẩm..." />
                  </Form.Item>
                  <Form.Item label="Giá khuyến mãi :" name="discount">
                    <Input type="number" placeholder="Giá khuyến mãi..." />
                  </Form.Item>
                  <Form.Item label="Mô tả sản phẩm :" name="description">
                    <Input.TextArea placeholder="Mô tả sản phẩm..." />
                  </Form.Item>
                </Form>
              </Card>
            </Grid>
            <Grid hidden={openEditor} item sm={3}>
              <Card
                className="shadow-md h-full"
                hoverable
                type="inner"
                title="Upload hình ảnh sản phẩm"
                extra={
                  <p className="italic hover:text-blue-500 hover:underline">
                    Hướng dẫn
                  </p>
                }
              >
                <UpLoadImage defaultValue={dataSelect[0]?.photoURL} />
                <UpLoadListImage defaultValue={dataSelect[0]?.listphotoURL} />
              </Card>
            </Grid>
            <Grid item sm={openEditor ? 12 : 5}>
              <Card
                className="shadow-md h-full"
                hoverable
                type="inner"
                title="Bài viết sản phẩm"
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
