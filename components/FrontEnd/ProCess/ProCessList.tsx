import styled from "styled-components";
import ProCess from "./ProCess";

const Container = styled.div`
  width: 100%;
  padding: 5px;
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
  div.title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1 {
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
  @media (min-width: 768px) {
    padding: 50px 100px;
    div.title {
      h1 {
        font-size: 32px;
      }
      div {
        margin: 20px 0px;
        width: 120px;
      }
      p {
        font-size: 20px;
      }
    }
  }
`;
export default function ProCessList() {
  return (
    <>
      <Container>
        <div className="title">
          <h1>Quy trình triển khai dự án</h1>
          <div></div>
          <p>Triển khai một dự án chiến dịch mới cần một quy trình hoàn hảo</p>
        </div>
        <ProCess />
      </Container>
    </>
  );
}
