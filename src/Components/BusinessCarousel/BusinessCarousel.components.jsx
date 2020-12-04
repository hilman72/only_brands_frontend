import React from 'react';
import './BusinessCarousel.style.scss'
import BrandCards from '../BrandCards/BrandCards.components'
import { Swiper, SwiperSlide} from 'swiper/react';

//Swiper styling
import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

function BusinessCarousel() {

    return (
        <div className="BusinessCarousel">
            <Swiper
                effect="coverflow"
                spaceBetween={30}
                slidesPerView={3}
                navigation
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide><BrandCards /></SwiperSlide>
            <SwiperSlide><BrandCards /></SwiperSlide>
            <SwiperSlide><BrandCards /></SwiperSlide>
            <SwiperSlide><BrandCards /></SwiperSlide>
            <SwiperSlide><BrandCards /></SwiperSlide>
            <SwiperSlide><BrandCards /></SwiperSlide>
            <SwiperSlide><BrandCards /></SwiperSlide>
                 </Swiper>
           
        </div >
    )
}

export default BusinessCarousel;