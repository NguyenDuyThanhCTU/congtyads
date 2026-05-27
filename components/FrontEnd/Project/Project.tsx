import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px 10px;
  padding: 1px;
  border: 1px solid #dbdada;
  border-radius: 4px;
  transform: translateY(0);
  transition: transform 0.5s ease;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;
  :hover {
    transform: translateY(-1%);
  }
  div {
    padding: 10px 20px;
    font-weight: 700;
    color: white;
    background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
    p {
      text-shadow: 1px 1px 1px black;
    }
    h1 {
      padding-top: 5px;
      :hover {
        cursor: pointer;
        color: blue;
        text-decoration: underline;
      }
    }
  }
  @media (min-width: 768px) {
    margin: 50px 10px;
    div {
      p {
        font-size: 20px;
      }
    }
  }
`;
export default function Project({ data }: { data: any }) {
  return (
    <Container>
      <img loading="lazy" alt="Loading" src={data.photoURL} />
      <div>
        <p>{data.title}</p>
        {/* <h1>{data.link}</h1> */}
      </div>
    </Container>
  );
}
