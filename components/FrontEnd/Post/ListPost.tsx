import React from "react";
import styled from "styled-components";
import { useData } from "../../../Context/DataProvider";
import Grid from "../Components/Grid";
import Post from "./Post";

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
    padding: 10px 0px;
    font-weight: bold;
    font-size: 20px;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    padding-bottom: 20px;
  }
  @media (min-width: 768px) {
    padding: 50px 100px;
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 18px;
      padding-bottom: 40px;
    }
  }
`;
export default function ListPost() {
  const { posts } = useData();
  return (
    <div className="p-5 md:px-20">
      <Container>
        <h6>TIN TỨC & HOẠT ĐỘNG</h6>
        <h1>Các hoạt động nổi bật</h1>
        <p>
          Tin tức về hoạt động và khuyến mãi hot được cập nhật thường xuyên mỗi
          tuần
        </p>
      </Container>
      <Grid container spacing={5}>
        {[...posts].reverse()?.map((data: any) => (
          <Grid key={data.id} item xs={12} sm={4}>
            <Post data={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
