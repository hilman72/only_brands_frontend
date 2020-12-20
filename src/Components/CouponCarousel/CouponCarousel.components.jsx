import React from "react";
import "./CouponCarousel.style.scss";

import Coupon from "../../Components/Coupon/Coupon.components";

// import Grid from '@material-ui/core/Grid';

//Swiper
import { Swiper, SwiperSlide } from "swiper/react";

//Swiper styling
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function CouponCarousel() {
  return (
    <div className="CouponContainer">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        slidesPerColumnFill={2}
        slidesPerColumn={2}
        loop={true}
        navigation
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        <SwiperSlide> {/* <Coupon />{" "} */}</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CouponCarousel;
