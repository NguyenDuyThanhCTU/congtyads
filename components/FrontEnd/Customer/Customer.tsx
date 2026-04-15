import { Grid } from "@mui/material";
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import styled from "styled-components";

const Container = styled.div`
  cursor: pointer;
  border: 1px solid #e9e8e8;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  :hover {
    transform: translateY(-3%);
    box-shadow: rgba(0, 0, 0, 0.3) 1.95px 1.95px 2.6px;
  }
  @media (min-width: 768px) {
    padding: 20px;
  }
`;
export default function Customer() {
  const list = [
    "https://i.ibb.co/Trq8Nd4/1.png",
    "https://i.ibb.co/Tg2B20g/2.png",
    "https://i.ibb.co/mHvrDPz/3.png",
    "https://i.ibb.co/x84y99v/4.png",
    "https://i.ibb.co/gzwDs4p/5.png",
    "https://i.ibb.co/k1XSWBf/6.png",
    "https://i.ibb.co/Wk2d9Cr/7.png",
    "https://i.ibb.co/KqWrntz/8.png",
    "https://i.ibb.co/SQgfwCL/9.png",
    "https://i.ibb.co/1RcFycZ/10.png",
    "https://i.ibb.co/t3bQd8m/11.png",
    "https://i.ibb.co/YkdrdKj/12.png",
    "https://i.ibb.co/frMJFSK/13.png",
    "https://i.ibb.co/5BRJV7n/14.png",
    "https://i.ibb.co/svg5j7F/15.png",
    "https://i.ibb.co/P5nJsr7/16.png",
    "https://i.ibb.co/f0NVHx2/17.png",
    "https://i.ibb.co/hC97wy1/18.png",
  ];
  return (
    <div className="md:p-20 p-5">
      <Grid container spacing={2}>
        {list?.map((data: string) => (
          <Grid key={data} item xs={4} sm={2}>
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <Container>
                <img loading="lazy" alt="Loading" src={data} />
              </Container>
            </AnimationOnScroll>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
