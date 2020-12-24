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
      reviewdetail:
        "Superb food made fresh on location and cooked with fresh produce. Perfectly cooked and truly delicious. Fantastic staff who are personal and attentive but not overbearing. We also love the selection of Italian wines which is affordable and delicious.",
      photo:
        "https://twisper.com/wp-content/uploads/2020/03/close-up-photo-of-burger-3915906-scaled.jpg",
    },
    {
      business_name: "Bibek's Bagels",
      reviewdetail:
        "We live closer to the one in wan chai, and they had given us a voucher to use for my husbands birthday so we decided to pay a visit on passing. They had an excellent brunch deal, great value for money & delicious fresh food. It is the staff however that really make this place great & a place you want to keep visiting, they are so friendly & attentive.",
      photo:
        "https://www.sylviacenter.org/wp-content/uploads/2019/04/bagel.jpeg",
    },
    {
      business_name: "Darian's Doughnuts",
      reviewdetail:
        "The food here is excellent for such a reasonable price especially if you do the taster. They have great options for vegetarians and the burrata was out of this world! Only reason for 4 star is because we waited over 2 hours for a table even though the host told us an hour and half on a Friday night.",
      photo:
        "https://img.sndimg.com/food/image/upload/w_560,h_315,c_thumb,fl_progressive,q_80/v1/img/recipes/73/31/5/IPvKrcSrR36q0IXlP5wn_DSC02679.jpg",
    },
    {
      business_name: "Brokeback Steakhouse ",
      reviewdetail:
        "Delightful dinner experience. The black truffle was soso. But the cold cut was great. The mussels were nice. Have to come again for their tasting menu. Good value for money especially in central area",
      photo: "https://source.unsplash.com/random",
    },
    {
      business_name: "Mika's Muffins  ",
      reviewdetail:
        "Food were stunningly good! They had all kinds of food and each tasted great. Love the one with prawns especially. The only problem was that the portion was HUGE that we need two hours to finish the meal.",
      photo:
        "https://www.simplyrecipes.com/wp-content/uploads/2019/06/Blueberry-Muffins-LEAD-2-1.jpg",
    },
    {
      business_name: "Arrans' Appetizers   ",
      reviewdetail:
        "Amazing food and excellent value, we’ve had the tasting menu with 2 starters, 3 pastas and 2 desserts!! Good value and more importantly food are superb! Will definitely go back again.",
      photo:
        "https://jenniferbanz.com/wp-content/uploads/2019/09/keto-appetizers-feature-image.jpg",
    },
  ];
  return (
    <div className="RecommendationCarousel">
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        slidesPerColumnFill={2}
        slidesPerColumn={2}
        loop={true}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {list.map((data, i) => {
          return (
            <SwiperSlide>
              <RecommendationCard key={i} data={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default RecommendationCarousel;
