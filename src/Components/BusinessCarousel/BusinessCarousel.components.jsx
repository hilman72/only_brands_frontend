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
  const list = [
    {
      photo:
        "https://twisper.com/wp-content/uploads/2020/03/close-up-photo-of-burger-3915906-scaled.jpg",
      business_name: "Hilman's Hamburgers",
      category: "American",
    },
    {
      photo: "https://source.unsplash.com/random",
      business_name: "Bibek's Bagels",
      category: "French",
    },
    {
      photo: "https://source.unsplash.com/random",
      business_name: "Darian's Doughnuts",
      category: "Korean",
    },
    {
      photo: "https://source.unsplash.com/random",
      business_name: "Brokeback Steakhouse ",
      category: "italian",
    },
    {
      photo: "https://source.unsplash.com/random",
      business_name: "Mika's Muffins  ",
      category: "Taiwanese",
    },
    {
      photo: "https://source.unsplash.com/random",
      business_name: "Arrans' Appetizers   ",
      category: "Other",
    },
    {
      photo: "https://source.unsplash.com/random",
      business_name: "Sam's Supersalads   ",
      category: "Europe",
    },
    {
      photo: "https://source.unsplash.com/random",
      business_name: "Lesley's Lobsters and Grill   ",
      category: "Europe",
    },
    {
      photo: "https://source.unsplash.com/random",
      business_name: "Doug's Deli Sandwiches  ",
      category: "French",
    },
    {
      photo: "https://source.unsplash.com/random",
      business_name: "Rachel's Ramen ",
      category: "Japanese",
    },
  ];

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
        {list.map((data, i) => {
          return (
            <SwiperSlide>
              <BrandCards key={i} data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default BusinessCarousel;
