import { Button } from "@mui/material";
import { Input, Popconfirm } from "antd";
import { useState } from "react";
import { updateDocument } from "../../../lib/firebase/service";
import AlertMessage from "./AlertMessage";

type Props = {
  title: string;
  defaultValue: string;
  collection: string;
  id: string;
  field: any;
  area?: boolean;
};

export default function InPutDataChange({
  title,
  defaultValue,
  collection,
  id,
  field,
  area,
}: Props) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const handleConfirm = () => {
    if (value === "" || value === undefined) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      updateDocument(collection, id, {
        [field]: value,
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    }
  };
  const handleCancel = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };
  return (
    <>
      <div className="mb-1">
        <div className="flex justify-between items-center">
          <p className="font-bold italic text-gray-500">{title}</p>
          <Popconfirm
            title="Cập nhật thông tin này ?"
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            okText="Yes"
            cancelText="No"
          >
            <Button>Cập nhật</Button>
          </Popconfirm>
        </div>
        {area ? (
          <Input.TextArea
            status={value === "" || value === undefined ? "error" : ""}
            placeholder={
              value === "" || value === undefined ? "Dữ liệu đang trống..." : ""
            }
            defaultValue={defaultValue}
            onChange={(e) => setValue(e.target.value)}
            className="rounded-md"
          />
        ) : (
          <Input
            status={value === "" || value === undefined ? "error" : ""}
            placeholder={
              value === "" || value === undefined ? "Dữ liệu đang trống..." : ""
            }
            defaultValue={defaultValue}
            onChange={(e) => setValue(e.target.value)}
            className="rounded-md"
          />
        )}
      </div>
      {success && (
        <AlertMessage type="success" message="Đã cập nhật nội dung !" />
      )}
      {error && <AlertMessage type="error" message="Thao tác thất bại !" />}
    </>
  );
}
