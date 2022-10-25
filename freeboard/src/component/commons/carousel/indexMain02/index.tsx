// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Background = styled.div`
  width: 100%;
  background: black;
`;
const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  min-width: 560px;
  // height: 500px;
`;

export default function IndexMainCarouselSwipe() {
  return (
    <Background>
      <Wrapper>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="./img/1.jpg" width="100%" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/2.jpg" width="100%" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/3.jpg" width="100%" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/4.jpg" width="100%" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/5.jpg" width="100%" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./img/6.jpg" width="100%" />
          </SwiperSlide>
        </Swiper>
      </Wrapper>
    </Background>
  );
}
