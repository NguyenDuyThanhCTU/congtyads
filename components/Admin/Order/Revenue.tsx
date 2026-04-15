import { Grid } from "@mui/material";
import { Card, DatePicker } from "antd";
import { AiFillShopping, AiOutlineAreaChart } from "react-icons/ai";
import { FaUserTag } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { useAuth } from "../../../Context/AuthProvider";
import { useSpring, config, animated } from "react-spring";

export interface Props {
  data: any;
}
function MoneyCount(numbercount: number) {
  const { number } = useSpring({
    reset: false,
    from: { number: 0 },
    number: numbercount,
    config: config.molasses,
  });
  return (
    <animated.div>
      {number.to((n) =>
        n.toLocaleString("vi-VN", {
          style: "currency",
          currency: "VND",
        })
      )}
    </animated.div>
  );
}
function NumberCount(numbercount: number) {
  const { number } = useSpring({
    reset: false,
    from: { number: 0 },
    number: numbercount,
    config: config.molasses,
  });
  return <animated.div>{number.to((n) => n.toFixed())}</animated.div>;
}
export default function Revenue({ data }: Props) {
  const { RangePicker } = DatePicker;
  const { user } = useAuth();
  const revenueList = [
    {
      id: 1,
      title: "TỔNG DOANH THU",
      extra: "+ 16.5%",
      total: MoneyCount(989623),
      icon: <GiMoneyStack />,
      color: "bg-green-500",
    },
    {
      id: 2,
      title: "TỔNG ĐƠN HÀNG",
      extra: "+ 36.5%",
      total: NumberCount(17),
      icon: <AiFillShopping />,
      color: "bg-blue-500",
    },
    {
      id: 3,
      title: "TỔNG KHÁCH HÀNG",
      extra: "+ 19.5%",
      total: NumberCount(14),
      icon: <FaUserTag />,
      color: "bg-yellow-500",
    },
    {
      id: 4,
      title: "TỔNG LỢI NHUẬN",
      extra: "+ 24.5%",
      total: MoneyCount(451411),
      icon: <AiOutlineAreaChart />,
      color: "bg-red-500",
    },
  ];
  return (
    <>
      <Grid container spacing={2}>
        {revenueList.map((data: any) => (
          <Grid key={data.id} item xs={12} sm={3}>
            <div className="h-full">
              <Card
                className="shadow-md h-full"
                hoverable
                type="inner"
                title={<p className="font-bold text-gray-400">{data.title}</p>}
                extra={<p className="font-bold text-green-500">{data.extra}</p>}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-3xl text-gray-500 flex">
                      {data.total}
                    </p>
                    <p className="text-blue-500 underline">
                      Xem báo cáo chi tiết
                    </p>
                  </div>
                  <div
                    className={`p-2 ${data.color} text-white text-[32px] rounded-md shadow-md`}
                  >
                    {data.icon}
                  </div>
                </div>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
