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
      photo:
        "https://www.sylviacenter.org/wp-content/uploads/2019/04/bagel.jpeg",
      business_name: "Bibek's Bagels",
      category: "French",
    },
    {
      photo:
        "https://img.sndimg.com/food/image/upload/w_560,h_315,c_thumb,fl_progressive,q_80/v1/img/recipes/73/31/5/IPvKrcSrR36q0IXlP5wn_DSC02679.jpg",
      business_name: "Darian's Doughnuts",
      category: "Korean",
    },
    {
      photo: "https://source.unsplash.com/random",
      business_name: "Brokeback Steakhouse ",
      category: "italian",
    },
    {
      photo:
        "https://www.simplyrecipes.com/wp-content/uploads/2019/06/Blueberry-Muffins-LEAD-2-1.jpg",
      business_name: "Mika's Muffins  ",
      category: "Taiwanese",
    },
    {
      photo:
        "https://jenniferbanz.com/wp-content/uploads/2019/09/keto-appetizers-feature-image.jpg",
      business_name: "Arrans' Appetizers   ",
      category: "Other",
    },
    {
      photo:
        "https://media-cdn.tripadvisor.com/media/photo-o/0c/52/ab/a4/super-salads.jpg",
      business_name: "Sam's Supersalads   ",
      category: "Europe",
    },
    {
      photo:
        "https://www.theedge.hk/sites/default/files/Grilled%20Whole%20Boston%20Lobster%20with%20French%20Fries%20%26%20Salad%20%24328_4.jpg ",
      business_name: "Lesley's Lobsters and Grill   ",
      category: "Europe",
    },
    {
      photo:
        "https://tryveg.com/wp-content/uploads/2017/04/vegan-deli-meat-sandwich.jpg ",
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
        autoplay={{disableOnInteraction: false, delay: 2300}}
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
