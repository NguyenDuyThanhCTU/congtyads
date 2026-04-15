import styled from "styled-components";
import ProblemsList from "./ProblemsList";

const Container = styled.div`
  width: 100%;
  padding: 20px;
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
    padding: 50px 150px;
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

export default function Problems() {
  return (
    <Container>
      <div className="title">
        <h1>Giải quyết ngay các vấn đề bạn đang gặp phải</h1>
        <div></div>
        <p>
          Hãy để chúng tôi giúp đỡ bạn lên kế hoạch và thực hiện các chiến dịch
          marketing của bạn !
        </p>
      </div>
      <ProblemsList />
    </Container>
  );
}
