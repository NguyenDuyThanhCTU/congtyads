import { DatePicker } from "antd";
import moment from "moment";
import { useAuth } from "../../../Context/AuthProvider";

export interface Props {
  data: any;
}

export default function Title({ data }: Props) {
  const { RangePicker } = DatePicker;
  const { user } = useAuth();
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="font-bold">
          <p>Chào mừng chủ shop , {user?.displayName} !!!</p>
          <p className="text-gray-400 italic text-sm">
            Đây là tổng hợp dữ liệu của cửa hàng của bạn hôm nay !!
          </p>
        </div>
        <RangePicker
          size="large"
          bordered={true}
          defaultValue={[
            moment(`${moment().format("DD/MM/YYYY")}`, "DD/MM/YYYY"),
            moment(
              `${moment().subtract(7, "days").format("DD/MM/YYYY")}`,
              "DD/MM/YYYY"
            ),
          ]}
          format={"DD/MM/YYYY"}
        />
      </div>
    </>
  );
}
