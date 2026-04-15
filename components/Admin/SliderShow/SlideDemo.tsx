import { Card } from "antd";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function SlideDemo({ data }: { data: any }) {
  return (
    <Card className="shadow-md" hoverable type="inner" title="Demo SliderShow">
      <Swiper
        loop={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.map((slide: any) => (
          <SwiperSlide key={slide.id}>
            <div>
              <img
                className="w-full aspect-[2/1] object-cover"
                loading="lazy"
                alt="Loading"
                src={slide.photoURL}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
}
