import React from "react";
import styled from "styled-components";
import { useData } from "../../../Context/DataProvider";
import Project from "./Project";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { useTheme } from "../../../Context/ThemeProvider";

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
export default function ListProject() {
  const { slidershow } = useData();
  const { desktop } = useTheme();
  return (
    <>
      <Container>
        <h6>DỰ ÁN TRIỂN KHAI</h6>
        <h1>Các dự án Website đã triển khai</h1>
        <div className="line"></div>
      </Container>
      <Swiper
        loop={true}
        spaceBetween={30}
        slidesPerView={desktop ? 3 : 1}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {[...slidershow].reverse()?.map((data: any) => (
          <SwiperSlide key={data.id}>
            <Project data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
