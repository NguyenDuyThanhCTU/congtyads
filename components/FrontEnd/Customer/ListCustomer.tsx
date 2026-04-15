import styled from "styled-components";
import Customer from "./Customer";

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
  @media (min-width: 768px) {
    padding: 50px 100px;
    h1 {
      font-size: 32px;
    }
  }
`;
export default function ListCustomer() {
  return (
    <>
      <Container>
        <h6>KHÁCH HÀNG</h6>
        <h1>Các khách hàng đã tin dùng dịch vụ của ADS</h1>
        <div className="line"></div>
        <Customer />
      </Container>
    </>
  );
}
