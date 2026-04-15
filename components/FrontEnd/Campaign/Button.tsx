import React from "react";
import styled from "styled-components";

const Container = styled.button<{ select: any }>`
  padding: 10px 20px;
  margin: 10px;
  color: black;
  background-color: white;
  border-radius: 4px;
  box-shadow: ${(props) =>
    !props.select
      ? "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      : "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,rgba(255, 255, 255, 0.08) 0px 1px 0px inset"};
  transform: skewX(-15deg);
`;
export default function Button({
  select,
  title,
}: {
  select: boolean;
  title: string;
}) {
  return <Container select={select}>{title}</Container>;
}
