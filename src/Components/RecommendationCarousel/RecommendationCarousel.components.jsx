import React from "react";
import "./RecommendationCarousel.style.scss";
import RecommendationCard from "../../Components/RecommendationCards/RecommendationCards.components";

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

function RecommendationCarousel() {
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
    <div className="RecommendationCarousel">
      <Swiper
        spaceBetween={30}
        slidesPerColumnFill={1}
        slidesPerColumn={2}
        loop={true}
        navigation
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        <SwiperSlide>
          {" "}
          <RecommendationCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <RecommendationCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <RecommendationCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <RecommendationCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <RecommendationCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <RecommendationCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <RecommendationCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <RecommendationCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <RecommendationCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <RecommendationCard />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <RecommendationCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default RecommendationCarousel;
