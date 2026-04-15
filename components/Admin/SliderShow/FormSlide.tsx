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

export default function FormSlide({ open, setOpen, data }: Props) {
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
        title: dataSelect[0]?.title || undefined,
        link: dataSelect[0]?.link || undefined,
      });
    } else {
      form.setFieldsValue({
        title: undefined,
        link: undefined,
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
      addDocument("slidershow", {
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
    if (imgSrc !== undefined && id !== "") {
      updateDocument("slidershow", id, {
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
          {id !== ""
            ? "Chỉnh sửa thông tin slide"
            : "Thêm slide mới vào Website"}
        </DialogTitle>
        <DialogContent>
          <Form form={form} layout="vertical">
            <Form.Item
              label="Tiêu đề :"
              name="title"
              rules={[{ required: true, message: "Nhập tiêu đề cho slide !" }]}
            >
              <Input className="rounded-lg" placeholder="Tiêu đề..." />
            </Form.Item>
            <Form.Item label="Liên kết :" name="link">
              <Input className="rounded-lg" placeholder="Liên kết..." />
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
