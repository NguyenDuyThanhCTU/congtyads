import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Badge, Image, Input, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { useEffect, useState } from "react";
import { useGlobalState } from "../../../Context/GlobalProvider";
import AlertMessage from "./AlertMessage";

type Props = {
  defaultValue: any;
};
const { Dragger } = Upload;
const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};
export const UpLoadListImage = ({ defaultValue }: Props) => {
  const { Search } = Input;
  const { listImgSrc, setListImgSrc } = useGlobalState();
  const [imgSrc, setImgSrc] = useState("");
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
    setListImgSrc(defaultValue);
  }, [defaultValue, setListImgSrc]);

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
        setListImgSrc(listImgSrc === undefined ? [url] : [...listImgSrc, url]);
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
        <div className="text-[12px] p-1 font-bold text-blue-500 italic">
          Hình ảnh phụ.
        </div>
        <div>
          <Dragger
            customRequest={dummyRequest}
            name="Upload Image"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {uploadButton}
          </Dragger>
          <Search
            placeholder="Hoặc nhập vào liên kết hình ảnh..."
            enterButton="THÊM"
            onSearch={(value) => {
              setImgSrc(value);
              setListImgSrc(
                listImgSrc === undefined ? [value] : [...listImgSrc, value]
              );
            }}
          />
        </div>
        {listImgSrc?.lenght !== 0 && (
          <div className="grid grid-cols-4">
            {listImgSrc?.map((data: any) => (
              <Badge.Ribbon
                key={data}
                text={
                  <p
                    onClick={() =>
                      setListImgSrc(
                        listImgSrc.filter((obj: any) => obj !== data)
                      )
                    }
                  >
                    Xóa
                  </p>
                }
                color="red"
              >
                <div className="m-2 border w-full h-full">
                  <Image
                    className="w-full aspect-[1/1] object-cover"
                    src={data}
                    alt="Image Upload"
                  />
                </div>
              </Badge.Ribbon>
            ))}
          </div>
        )}
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
