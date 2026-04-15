import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  font-weight: 300;
  text-align: center;
  padding: 20px;
`;
export default function CopyRight() {
  return (
    <Container>
      ©2022 All Rights reserved ADS Company | Designed by Luan Dev ADS Company
    </Container>
  );
}
