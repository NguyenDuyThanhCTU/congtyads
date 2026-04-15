import { Button, Grid } from "@mui/material";
import { Card } from "antd";
import { AiFillSignal, AiFillSound, AiFillTag } from "react-icons/ai";
import { animated, config, useSpring } from "react-spring";
import _ from "lodash";

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
export default function TotalData({ data }: Props) {
  const news = data.filter((obj: any) => {
    return obj.group === "Sản phẩm sales";
  });
  const sales = data.filter((obj: any) => {
    return obj.group === "Sản phẩm nổi bật";
  });
  const revenueList = [
    {
      id: 1,
      title: "TỔNG SẢN PHẨM",
      amount: NumberCount(Object.keys(data).length),
      total: MoneyCount(_.sumBy(data.map((item: any) => Number(item.price)))),
      icon: <AiFillSignal />,
      color: "bg-green-500",
    },
    {
      id: 2,
      title: "SẢN PHẨM NỔI BẬT",
      amount: NumberCount(Object.keys(news).length),
      total: MoneyCount(_.sumBy(news.map((item: any) => Number(item.price)))),
      icon: <AiFillSound />,
      color: "bg-blue-500",
    },
    {
      id: 3,
      title: "SẢN PHẨM SALES",
      amount: NumberCount(Object.keys(sales).length),
      total: MoneyCount(_.sumBy(sales.map((item: any) => Number(item.price)))),
      icon: <AiFillTag />,
      color: "bg-red-500",
    },
  ];
  return (
    <>
      <Grid container spacing={2}>
        {revenueList.map((data: any) => (
          <Grid key={data.id} item xs={12} sm={4}>
            <div className="h-full">
              <Card
                className="shadow-md h-full"
                hoverable
                type="inner"
                title={<p className="font-bold text-gray-400">{data.title}</p>}
                extra={<Button color="success">EXPORT DATA</Button>}
              >
                <div className="flex justify-between items-center">
                  <div
                    className={`p-2 ${data.color} text-white text-[32px] rounded-md shadow-md`}
                  >
                    {data.icon}
                  </div>
                  <div>
                    <p className="font-bold text-3xl text-gray-500 flex">
                      {data.amount}
                    </p>
                    <p className="text-blue-500 font-bold">Số lượng</p>
                  </div>
                  <div>
                    <p className="font-bold text-3xl text-gray-500 flex">
                      {data.total}
                    </p>
                    <p className="text-red-500 font-bold">Tổng giá trị</p>
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
