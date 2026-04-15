import { Card } from "antd";
import { useData } from "../../../../Context/DataProvider";
import InPutDataChange from "../../components/InPutDataChange";

type Props = {
  webinfo: any;
};
export default function WebInfo2({ webinfo }: Props) {
  return (
    <div className="h-full">
      <Card
        loading={webinfo.length === 0 ? true : false}
        className="shadow-md h-full"
        hoverable
        type="inner"
        title="Thông tin liên hệ"
        extra={
          <p className="italic hover:text-blue-500 hover:underline">
            Hướng dẫn
          </p>
        }
      >
        <InPutDataChange
          title="Số điện thoại"
          defaultValue={webinfo[0]?.phonenumber}
          collection="webinfo"
          id={webinfo[0]?.id}
          field="phonenumber"
        />
        <InPutDataChange
          title="Thư điện tử"
          defaultValue={webinfo[0]?.gmail}
          collection="webinfo"
          id={webinfo[0]?.id}
          field="gmail"
        />
        <InPutDataChange
          title="Địa chỉ"
          defaultValue={webinfo[0]?.address}
          collection="webinfo"
          id={webinfo[0]?.id}
          field="address"
        />
        <InPutDataChange
          title="Google map"
          defaultValue={webinfo[0]?.googlemap}
          collection="webinfo"
          id={webinfo[0]?.id}
          field="googlemap"
        />
        <iframe
          className="w-full h-full object-cover p-1 border-2"
          title="Bản đồ"
          src={webinfo[0]?.googlemap}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Card>
    </div>
  );
}
