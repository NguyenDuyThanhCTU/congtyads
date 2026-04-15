import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Chart1 } from "./Chart1";
import { Chart2 } from "./Chart2";

const Container = styled.div`
  width: 100%;
  padding: 20px 5px;
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
  div.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1 {
      padding: 5px 0px;
      font-weight: bold;
      font-size: 24px;
      color: white;
    }
    div {
      margin: 10px 0px;
      width: 80px;
      height: 3px;
      background-color: white;
    }
    p {
      font-weight: 300;
      color: white;
    }
  }
  div.buttonlist {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  div.chart {
    padding: 10px;
  }
  @media (min-width: 768px) {
    padding: 50px 100px;
    div.title {
      h1 {
        font-size: 32px;
      }
      div {
        width: 120px;
      }
      p {
        font-size: 20px;
      }
    }
    div.chart {
      padding: 50px;
    }
  }
`;
export default function ListCampaign() {
  const [select, setSelect] = useState(true);
  return (
    <>
      <Container>
        <div className="title">
          <p>TỐI ƯU HÓA CÁC CHIẾN DỊCH QUẢNG CÁO</p>
          <h1>VỚI ADS DIGITAL MAKETING</h1>
          <div></div>
        </div>
        <div className="buttonlist" onClick={() => setSelect(!select)}>
          <Button select={select} title="Nâng cao hiệu suất quảng cáo" />
          <Button select={!select} title="Chốt sale nhanh chóng dễ dàng" />
        </div>
        <div className="chart">{!select ? <Chart1 /> : <Chart2 />}</div>
      </Container>
    </>
  );
}
