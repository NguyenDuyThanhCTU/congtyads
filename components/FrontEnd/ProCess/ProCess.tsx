import React from "react";
import styled from "styled-components";
import Grid from "../Components/Grid";

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
      photoURL: "https://placehold.co/240x240/2563eb/ffffff.png?text=01",
      title: "Client Brief",
      content: "Nhận yêu cầu từ khách hàng",
    },
    {
      id: "02",
      photoURL: "https://placehold.co/240x240/0f766e/ffffff.png?text=02",
      title: "Proposal",
      content: "Đề xuất giải pháp và chiến lược",
    },
    {
      id: "03",
      photoURL: "https://placehold.co/240x240/7c3aed/ffffff.png?text=03",
      title: "Contract",
      content: "Ký kết hợp đồng và thanh toán",
    },
    {
      id: "04",
      photoURL: "https://placehold.co/240x240/dc2626/ffffff.png?text=04",
      title: "Planning",
      content: "Lên ý tưởng và kịch bản",
    },
    {
      id: "05",
      photoURL: "https://placehold.co/240x240/ea580c/ffffff.png?text=05",
      title: "Production",
      content: "Triển khai, hiện thực hóa ý tưởng",
    },
    {
      id: "06",
      photoURL: "https://placehold.co/240x240/0891b2/ffffff.png?text=06",
      title: "Editing",
      content: "Nhận feedback và hiệu chỉnh",
    },
    {
      id: "07",
      photoURL: "https://placehold.co/240x240/4f46e5/ffffff.png?text=07",
      title: "Report",
      content: "Báo cáo kết quả quá trình",
    },
    {
      id: "08",
      photoURL: "https://placehold.co/240x240/16a34a/ffffff.png?text=08",
      title: "Handover",
      content: "Bàn giao sản phẩm và tổng kết",
    },
  ];
  return (
    <div className="py-5 md:py-20">
      <Grid container spacing={3}>
        {list?.map((data: any) => (
          <Grid key={data.id} item xs={6} sm={3}>
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
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
