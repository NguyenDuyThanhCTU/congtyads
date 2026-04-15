import { Button, Grid } from "@mui/material";
import { Avatar, Card } from "antd";
import moment from "moment";
import React from "react";
import {
  AiOutlineChrome,
  AiOutlineComment,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { useSpring, config, animated } from "react-spring";

function NumberCount(numbercount: number) {
  const { number } = useSpring({
    reset: false,
    from: { number: 0 },
    number: numbercount,
    config: config.molasses,
  });
  return <animated.div>{number.to((n) => n.toFixed())}</animated.div>;
}
export default function Tracking() {
  const currentDay = moment().format("HH:mm DD/MM/YYYY");
  return (
    <div className="h-full flex flex-col justify-between">
      <Card
        className="shadow-md"
        hoverable
        type="inner"
        title="Quảng cáo cho Website."
        extra={<a href="#">Liên hệ</a>}
      >
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={8}>
            <p className="text-sm">
              Bạn muốn Website tiếp cận được nhiều <strong>người dùng</strong>,
              xếp hạng cao trên Goolge ?
            </p>
            <Button color="error">CHIẾN DỊCH GOOGLE</Button>
          </Grid>
          <Grid item xs={4}>
            <img
              loading="lazy"
              className="w-full h-full object-cover"
              alt=""
              src="https://techacademy.edu.vn/wp-content/uploads/2022/09/khoa-hoc-quang-cao-google.png"
            />
          </Grid>
        </Grid>
      </Card>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Card
            className="shadow-md"
            hoverable
            type="inner"
            title="Lượt truy cập ( Visit )"
            extra={
              <Avatar className="flex justify-center items-center bg-green-500">
                <AiOutlineChrome size={24} />
              </Avatar>
            }
          >
            <div className="flex justify-between items-center">
              <p className="font-bold text-gray-600 text-3xl">
                {NumberCount(10696)}
              </p>
              <div className="text-center">
                <p className="font-bold text-gray-500">Lượt truy cập</p>
                <p className="italic text-gray-400">{currentDay}</p>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            className="shadow-md"
            hoverable
            type="inner"
            title="Tổng người dùng ( User )"
            extra={
              <Avatar className="flex justify-center items-center bg-blue-500">
                <AiOutlineUser size={24} />
              </Avatar>
            }
          >
            <div className="flex justify-between items-center">
              <p className="font-bold text-gray-600 text-3xl">
                {NumberCount(231)}
              </p>
              <div className="text-center">
                <p className="font-bold text-gray-500">Lượt đăng nhập</p>
                <p className="italic text-gray-400">{currentDay}</p>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            className="shadow-md"
            hoverable
            type="inner"
            title="Lượt tìm kiếm ( Search )"
            extra={
              <Avatar className="flex justify-center items-center bg-orange-500">
                <AiOutlineSearch size={24} />
              </Avatar>
            }
          >
            <div className="flex justify-between items-center">
              <p className="font-bold text-gray-600 text-3xl">
                {NumberCount(3542)}
              </p>
              <div className="text-center">
                <p className="font-bold text-gray-500">Lượt tìm kiếm</p>
                <p className="italic text-gray-400">{currentDay}</p>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            className="shadow-md"
            hoverable
            type="inner"
            title="Lượt tương tác ( Interactive )"
            extra={
              <Avatar className="flex justify-center items-center bg-violet-500">
                <AiOutlineComment size={24} />
              </Avatar>
            }
          >
            <div className="flex justify-between items-center">
              <p className="font-bold text-gray-600 text-3xl">
                {NumberCount(608)}
              </p>
              <div className="text-center">
                <p className="font-bold text-gray-500">Lượt tương tác</p>
                <p className="italic text-gray-400">{currentDay}</p>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
