import React from "react";
import styled from "styled-components";
import Price from "./Price";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h6 {
    font-size: 20px;
    color: blue;
  }
  h1 {
    padding: 20px 0px;
    font-weight: bold;
    font-size: 20px;
  }
  div.line {
    width: 80px;
    height: 3px;
    background-color: gray;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    padding: 10px 0px;
  }
  @media (min-width: 768px) {
    padding: 50px 100px;
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 18px;
    }
  }
`;
export default function PriceList() {
  return (
    <>
      <Container>
        <h6>BẢNG BÁO GIÁ</h6>
        <h1>Báo giá dịch vụ của ADS Digital Maketing</h1>
        <div className="line"></div>
        <p>
          Chúng tôi thiết kế các gói dịch vụ dành riêng cho nhu cầu và ngân sách
          của bạn ( giá có thể thay đổi theo chính sách )
        </p>
      </Container>
      <Price />
    </>
  );
}
