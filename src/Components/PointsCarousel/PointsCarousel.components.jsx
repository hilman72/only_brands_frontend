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
  const list = [
    {
      business_name: "Hilman's Hamburgers",
      point: "0",
    },
    {
      business_name: "Bibek's Bagels",
      point: "30",
    },
    {
      business_name: "Darian's Doughnuts",
      point: "100",
    },
    {
      business_name: "Brokeback Steakhouse ",
      point: "80",
    },
    {
      business_name: "Mika's Muffins  ",
      point: "30",
    },
    {
      business_name: "Arrans' Appetizers   ",
      point: "50",
    },
    {
      business_name: "Sam's Supersalads   ",
      point: "70",
    },
    {
      business_name: "Lesley's Lobsters and Grill   ",
      point: "80",
    },
    {
      business_name: "Doug's Deli Sandwiches  ",
      point: "90",
    },
    {
      business_name: "Rachel's Ramen ",
      point: "20",
    },
  ];

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
        {list.map((data, i) => {
          return (
            <SwiperSlide>
              <PointsCards key={i} data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default PointsCarousel;
