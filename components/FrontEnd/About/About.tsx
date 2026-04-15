import React from "react";
import styled from "styled-components";
import AboutList from "./AboutList";

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
export default function About() {
  return (
    <>
      <Container>
        <h6>VỀ CHÚNG TÔI</h6>
        <h1>Dịch vụ của ADS Digital Maketing có gì nổi bật ?</h1>
        <div className="line"></div>
      </Container>
      <AboutList />
    </>
  );
}
