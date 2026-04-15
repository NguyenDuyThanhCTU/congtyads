import React from "react";
import styled from "styled-components";
import { ImPriceTag } from "react-icons/im";
import {
  BsBarChartLineFill,
  BsFillTagsFill,
  BsShieldFillCheck,
} from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { Grid } from "@mui/material";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  div {
    font-size: 32px;
    border-radius: 12px 0px 12px 12px;
    padding: 10px;
    color: white;
    background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
  }
  h1 {
    padding-top: 10px;
    padding-bottom: 4px;
    font-weight: bold;
  }
  p {
    font-size: 12px;
    font-weight: 300;
    color: #454545;
  }
  @media (min-width: 768px) {
    padding: 50px 100px;
    div {
      font-size: 42px;
      padding: 20px;
    }
    h1 {
      font-size: 24px;
      padding-top: 15px;
      padding-bottom: 8px;
    }
    p {
      font-size: 18px;
    }
  }
`;
export default function AboutList() {
  const list = [
    {
      icon: <ImPriceTag />,
      title: "Giá cả cạnh tranh thị trường",
      content:
        "Mức giá được tính toán kỹ càng, đảm bảo phù hợp với định mức của thị trường",
    },
    {
      icon: <BsBarChartLineFill />,
      title: "Cam kết chất lượng dịch vụ",
      content:
        "Đảm bảo chất lượng dịch vụ, cam kết hiệu quả như trên hợp đồng cung cấp dịch vụ",
    },
    {
      icon: <BsShieldFillCheck />,
      title: "Chính sách bảo hành 1 đổi 1",
      content:
        "Bảo hành trọn gói 1 đổi 1 với bất kỳ sự cố nào xảy ra làm ảnh hưởng đến dịch vụ",
    },
    {
      icon: <GiEarthAfricaEurope />,
      title: "Đa dịch vụ - đa nền tảng",
      content:
        "Nhiều gói dịch vụ đa năng từ MXH Facebook, Tiktok, Instagram đến Shopee, Lazada",
    },
    {
      icon: <MdSupportAgent />,
      title: "Hỗ trợ CSKH thường xuyên",
      content:
        "Nhân viên CSKH luôn luôn có mặt giải đáp mọi thắc mắc của khách hàng về dịch vụ",
    },
    {
      icon: <BsFillTagsFill />,
      title: "Khuyến mãi & Quà tặng",
      content:
        "Khuyến mãi khủng hằng tháng, quà tặng lễ, Tết cho khách hàng thường niên",
    },
  ];
  return (
    <div className="p-2 md:px-20">
      <Grid container spacing={2}>
        {list?.map((data: any) => (
          <Grid key={data.title} item xs={6} sm={4}>
            <AnimationOnScroll animateIn="animate__fadeInDown">
              <Container>
                <div>{data.icon}</div>
                <h1>{data.title}</h1>
                <p>{data.content}</p>
              </Container>
            </AnimationOnScroll>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
