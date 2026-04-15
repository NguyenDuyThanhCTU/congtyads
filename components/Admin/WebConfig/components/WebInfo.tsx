import { useState } from "react";
import { Button } from "@mui/material";
import { Card, Popconfirm } from "antd";
import { useGlobalState } from "../../../../Context/GlobalProvider";
import { updateDocument } from "../../../../lib/firebase/service";
import InPutDataChange from "../../components/InPutDataChange";
import { UpLoadImage } from "../../components/UpLoadImage";
import AlertMessage from "../../components/AlertMessage";

type Props = {
  webinfo: any;
};
export default function WebInfo({ webinfo }: Props) {
  const { imgSrc, setImgSrc } = useGlobalState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  return (
    <>
      <div className="h-full">
        <Card
          loading={webinfo.length === 0 ? true : false}
          className="shadow-md h-full"
          hoverable
          type="inner"
          title="Thương hiệu Website"
          extra={
            <p className="italic hover:text-blue-500 hover:underline">
              Hướng dẫn
            </p>
          }
        >
          <InPutDataChange
            title="Tên Website"
            defaultValue={webinfo[0]?.title}
            collection="webinfo"
            id={webinfo[0]?.id}
            field="title"
          />
          <div>
            <div className="flex justify-between items-center">
              <p className="font-bold italic text-gray-500">Logo Website</p>
              <Popconfirm
                title="Cập nhật thông tin này ?"
                onConfirm={() => {
                  if (imgSrc === "") {
                    setError(true);
                    setTimeout(() => {
                      setError(false);
                    }, 3000);
                  } else {
                    updateDocument("webinfo", webinfo[0]?.id, {
                      logo: imgSrc,
                    });
                    setImgSrc("");
                    setSuccess(true);
                    setTimeout(() => {
                      setSuccess(false);
                    }, 3000);
                  }
                }}
                onCancel={() => {
                  setImgSrc("");
                  setError(true);
                  setTimeout(() => {
                    setError(false);
                  }, 3000);
                }}
                okText="Yes"
                cancelText="No"
              >
                <Button>Cập nhật</Button>
              </Popconfirm>
            </div>
            <UpLoadImage defaultValue={webinfo[0]?.logo} />
          </div>
        </Card>
      </div>
      {success && (
        <AlertMessage type="success" message="Đã cập nhật nội dung !" />
      )}
      {error && <AlertMessage type="error" message="Chưa tải lên hình ảnh !" />}
    </>
  );
}
