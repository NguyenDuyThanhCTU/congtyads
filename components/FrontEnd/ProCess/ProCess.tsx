import { Grid } from "@mui/material";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 5px;
  aspect-ratio: 1 / 1;
  @media (min-width: 768px) {
    padding: 15px;
  }
  div.top {
    position: absolute;
    background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: #f7f7f7;
    padding: 5px 10px;
    border-radius: 0px 0px 12px 12px;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 10px;
    font-weight: 500;
    strong {
      color: white;
      font-size: 12px;
    }
    ::before {
      content: "";
      width: 5px;
      height: 5px;
      position: absolute;
      top: 0px;
      left: -5px;
      clip-path: polygon(100% 0%, 100% 100%, 0% 100%);
      background-color: #00007d;
    }
    ::after {
      content: "";
      width: 5px;
      height: 5px;
      position: absolute;
      top: 0px;
      right: -5px;
      clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
      background-color: #00007d;
    }
    @media (min-width: 768px) {
      padding: 10px 30px;
      font-size: 16px;
      strong {
        font-size: 24px;
      }
      ::before {
        width: 15px;
        height: 15px;
        left: -15px;
      }
      ::after {
        width: 15px;
        height: 15px;
        right: -15px;
      }
    }
  }
  div.content {
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    img {
      padding-top: 10px;
      width: 40%;
    }
    h1 {
      font-weight: bold;
      font-size: 14px;
    }
    p {
      font-weight: 300;
      font-size: 14px;
    }
    @media (min-width: 768px) {
      padding: 40px 20px;
      h1 {
        font-size: 24px;
      }
      p {
        font-size: 20px;
      }
    }
  }
  div.bottom {
    content: "";
    width: 50px;
    height: 5px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -5px);
    border-radius: 12px 12px 0px 0px;
    background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
    @media (min-width: 768px) {
      width: 120px;
      height: 10px;
      transform: translate(-50%, -15px);
    }
  }
`;
export default function ProCess() {
  const list = [
    {
      id: "01",
      photoURL: "https://i.ibb.co/fYN6Zvm/1.png",
      title: "Client Brief",
      content: "Nhận yêu cầu từ khách hàng",
    },
    {
      id: "02",
      photoURL: "https://i.ibb.co/vxxWtyz/2.png",
      title: "Proposal",
      content: "Đề xuất giải pháp và chiến lược",
    },
    {
      id: "03",
      photoURL: "https://i.ibb.co/Cn5xY0J/3.png",
      title: "Contract",
      content: "Ký kết hợp đồng và thanh toán",
    },
    {
      id: "04",
      photoURL: "https://i.ibb.co/WnMVQJp/4.png",
      title: "Planning",
      content: "Lên ý tưởng và kịch bản",
    },
    {
      id: "05",
      photoURL: "https://i.ibb.co/jkG8Th4/5.png",
      title: "Production",
      content: "Triển khai, hiện thực hóa ý tưởng",
    },
    {
      id: "06",
      photoURL: "https://i.ibb.co/vm6K99N/6.png",
      title: "Editing",
      content: "Nhận feedback và hiệu chỉnh",
    },
    {
      id: "07",
      photoURL: "https://i.ibb.co/7KSMYgK/7.png",
      title: "Report",
      content: "Báo cáo kết quả quá trình",
    },
    {
      id: "08",
      photoURL: "https://i.ibb.co/8r177th/8.png",
      title: "Handover",
      content: "Bàn giao sản phẩm và tổng kết",
    },
  ];
  return (
    <div className="py-5 md:py-20">
      <Grid container spacing={3}>
        {list?.map((data: any) => (
          <Grid key={data.id} item xs={6} sm={3}>
            <AnimationOnScroll animateIn="animate__fadeInDown">
              <Container>
                <div className="top">
                  BƯỚC <strong>{data.id}</strong>
                </div>
                <div className="content">
                  <img loading="lazy" alt="Loading" src={data.photoURL} />
                  <h1>{data.title}</h1>
                  <p>{data.content}</p>
                </div>
                <div className="bottom"></div>
              </Container>
            </AnimationOnScroll>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
