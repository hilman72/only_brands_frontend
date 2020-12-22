import React, { useState, useEffect } from "react";
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

function CouponCarousel(props) {
  const [update, setUpdate] = useState(false);

  const needUpdate = () => {
    setUpdate(true);
  };

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
        {props.data && props.data.length > 0 ? (
          props.data.map((data, i) => {
            return (
              <SwiperSlide>
                {" "}
                <Coupon
                  key={i}
                  data={data}
                  passUpdate={needUpdate}
                  page={"no"}
                />
              </SwiperSlide>
            );
          })
        ) : (
          <div></div>
        )}
        <SwiperSlide> {/* <Coupon />{" "} */}</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CouponCarousel;
