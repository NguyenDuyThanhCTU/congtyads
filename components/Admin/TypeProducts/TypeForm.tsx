import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useGlobalState } from "../../../Context/GlobalProvider";
import { addDocument, updateDocument } from "../../../lib/firebase/service";
import AlertMessage from "../components/AlertMessage";
import { UpLoadImage } from "../components/UpLoadImage";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: any;
};

export default function TypeForm({ open, setOpen, data }: Props) {
  const { id, setId, imgSrc, setImgSrc } = useGlobalState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [form] = Form.useForm();
  const dataSelect = data.filter((obj: any) => {
    return obj.id === id;
  });
  useEffect(() => {
    if (id !== "") {
      form.setFieldsValue({
        class1: dataSelect[0]?.class1 || undefined,
      });
    } else {
      form.setFieldsValue({
        class1: undefined,
      });
    }
  }, [id, open]);
  const handleSuccess = () => {
    if (id === "") {
      addDocument("typeproducts", {
        ...form.getFieldsValue(),
        photoURL: imgSrc,
      });
      setId("");
      setImgSrc("");
      setOpen(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
    if (id !== "") {
      updateDocument("typeproducts", id, {
        ...form.getFieldsValue(),
        photoURL: imgSrc,
      });
      setId("");
      setImgSrc("");
      setOpen(false);
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
  };
  return (
    <>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>
          {id !== "" ? "Chỉnh sửa thông tin" : "Thêm phân loại mới"}
        </DialogTitle>
        <DialogContent>
          <Form form={form} layout="vertical">
            <Form.Item
              label="Phân loại lớp 1 :"
              name="class1"
              rules={[{ required: true, message: "Nhập phân loại lớp 1" }]}
            >
              <Input
                className="rounded-lg"
                placeholder="Nhập phân loại lớp 1..."
              />
            </Form.Item>
          </Form>
          <UpLoadImage defaultValue={dataSelect[0]?.photoURL} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="error">
            HỦY BỎ
          </Button>
          <Button onClick={handleSuccess}>XÁC NHẬN</Button>
        </DialogActions>
      </Dialog>
      {success && (
        <AlertMessage type="success" message="Đã cập nhật nội dung !" />
      )}
      {error && <AlertMessage type="error" message="Chưa tải lên hình ảnh !" />}
    </>
  );
}
