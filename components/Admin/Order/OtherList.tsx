import { Button, Grid } from "@mui/material";
import { Card } from "antd";
import React from "react";

export interface Props {
  data: any;
}

export default function OtherList({ data }: Props) {
  const donhang = [
    {
      id: 1,
      photoURL:
        "https://themesbrand.com/velzon/html/material/assets/images/products/img-1.png",
      name: "Branded T-Shirts",
      date: "24 Apr 2021",
      amount: 2,
      price: 60000,
      total: 120000,
      customer: "Trần Văn Tâm",
      address: "135 Nguyễn Đệ, An Hòa, Ninh Kiều, Cần Thơ",
    },
    {
      id: 2,
      photoURL:
        "https://themesbrand.com/velzon/html/material/assets/images/products/img-2.png",
      name: "Borosil Paper Cup",
      date: "01 Mar 2021",
      amount: 3,
      price: 50000,
      total: 150000,
      customer: "Lý Nhã Kỳ",
      address: "45B Phúc Kiến, Trung Quốc",
    },
    {
      id: 3,
      photoURL:
        "https://themesbrand.com/velzon/html/material/assets/images/products/img-4.png",
      name: "Borosil Paper Cup",
      date: "01 Mar 2021",
      amount: 5,
      price: 120000,
      total: 600000,
      customer: "Kim Jong Un",
      address: "324XG Ling Jong, Korean.",
    },
  ];
  return (
    <>
      <div className="h-full">
        <Card
          className="shadow-md h-full"
          hoverable
          type="inner"
          title={<p className="font-bold text-gray-400">ĐƠN HÀNG HIỆN TẠI</p>}
          extra={<Button color="success">Export Data</Button>}
        >
          {donhang.map((data: any) => (
            <Grid key={data.id} container alignItems="center" spacing={2}>
              <Grid item sm={1}>
                <img loading="lazy" alt="product" src={data.photoURL} />
              </Grid>
              <Grid item sm={2} xs={6}>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap font-bold text-lg">
                  {data.name}
                </p>
                <p className="font-bold text-gray-400">{data.date}</p>
              </Grid>
              <Grid item sm={1} xs={6}>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap font-bold text-lg">
                  {data.amount} SP
                </p>
                <p className="font-bold text-gray-400">Số lượng</p>
              </Grid>
              <Grid item sm={1.5} xs={6}>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap font-bold text-lg">
                  {data.price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <p className="font-bold text-gray-400">Đơn giá</p>
              </Grid>
              <Grid item sm={1.5} xs={6}>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap font-bold text-lg text-red-500">
                  {data.total.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <p className="font-bold text-gray-400">Tổng tiền</p>
              </Grid>
              <Grid item sm={1.5} xs={12}>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap font-bold text-lg">
                  {data.customer}
                </p>
                <p className="font-bold text-gray-400">Khách hàng</p>
              </Grid>
              <Grid item sm={2} xs={12}>
                <p className="overflow-hidden overflow-ellipsis whitespace-nowrap font-bold text-lg">
                  {data.address}
                </p>
                <p className="font-bold text-gray-400">Địa chỉ</p>
              </Grid>
              <Grid item sm={1.5} xs={12}>
                <Button variant="contained">IN ĐƠN</Button>
              </Grid>
            </Grid>
          ))}
        </Card>
      </div>
    </>
  );
}
