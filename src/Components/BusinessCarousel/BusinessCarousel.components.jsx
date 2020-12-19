import React from "react";
import "./BusinessCarousel.style.scss";
import BrandCards from "../BrandCards/BrandCards.components";
import { Swiper, SwiperSlide } from "swiper/react";

//Swiper styling
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

function BusinessCarousel() {
  return (
    <div className="BusinessCarousel">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        navigation
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        <SwiperSlide>
          <BrandCards />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCards />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCards />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCards />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCards />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCards />
        </SwiperSlide>
        <SwiperSlide>
          <BrandCards />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BusinessCarousel;
