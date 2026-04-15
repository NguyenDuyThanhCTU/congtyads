import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Input, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { useEffect, useState } from "react";
import { useGlobalState } from "../../../Context/GlobalProvider";
import AlertMessage from "./AlertMessage";

type Props = {
  defaultValue: string;
};
const { Dragger } = Upload;
const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};
export const UpLoadImage = ({ defaultValue }: Props) => {
  const { imgSrc, setImgSrc } = useGlobalState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    const isLt1M = file.size / 1024 / 1024 < 1;
    if (!isLt1M) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
    return isJpgOrPng && isLt1M;
  };
  useEffect(() => {
    setImgSrc(defaultValue);
  }, [defaultValue, setImgSrc]);

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImgSrc(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Tải lên hình ảnh</div>
    </div>
  );
  const dummyRequest = ({ file, onSuccess }: any) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  return (
    <>
      <div>
        <div className="text-[12px] p-1 font-bold text-red-400 italic">
          Click vào ảnh để tải lên.
        </div>
        <Dragger
          customRequest={dummyRequest}
          name="Upload Image"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imgSrc ? (
            <div className="w-full aspect-[1/1]">
              <img
                loading="lazy"
                className="w-full h-full object-cover"
                src={imgSrc}
                alt="Image Upload"
              />
            </div>
          ) : (
            uploadButton
          )}
        </Dragger>
        <Input
          onChange={(e) => setImgSrc(e.target.value)}
          placeholder="Hoặc nhập vào liên kết hình ảnh..."
        />
      </div>
      {error && (
        <AlertMessage
          type="error"
          message="Vui lòng upload ảnh PNG/JPEG dưới 2MB !"
        />
      )}
    </>
  );
};
