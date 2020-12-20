import React from "react";
import "./PointsCarousel.style.scss";
import PointsCards from "../PointsCards/PointsCards.components";

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

//Swiper styling
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// import Swiper core and required components
import SwiperCore, { Navigation, Autoplay } from "swiper";

SwiperCore.use([Navigation, Autoplay]);

function PointsCarousel() {
  return (
    <div className="CardContainer">
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        slidesPerColumnFill={2}
        slidesPerColumn={2}
        navigation
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        <SwiperSlide>
          {" "}
          <PointsCards />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <PointsCards />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <PointsCards />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <PointsCards />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <PointsCards />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <PointsCards />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <PointsCards />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <PointsCards />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <PointsCards />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <PointsCards />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default PointsCarousel;
