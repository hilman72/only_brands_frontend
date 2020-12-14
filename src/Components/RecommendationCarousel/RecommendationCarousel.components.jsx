import React from 'react';
import './RecommendationCarousel.style.scss'
import RecommendationCard from '../../Components/RecommendationCards/RecommendationCards.components'

//Swiper 
import { Swiper, SwiperSlide} from 'swiper/react';

//Swiper styling
import 'swiper/components/navigation/navigation.scss';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y} from 'swiper';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


function RecommendationCarousel(){
    
    return(
        <div className="RecommendationCarousel">
            <Swiper
                spaceBetween={30}
                slidesPerColumnFill={1}
                slidesPerColumn={2}
                navigation
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide> <RecommendationCard /></SwiperSlide>
            <SwiperSlide> <RecommendationCard /></SwiperSlide>
            <SwiperSlide> <RecommendationCard /></SwiperSlide>
            <SwiperSlide> <RecommendationCard /></SwiperSlide>
            <SwiperSlide> <RecommendationCard /></SwiperSlide>
            <SwiperSlide> <RecommendationCard /></SwiperSlide>
            <SwiperSlide> <RecommendationCard /></SwiperSlide>
            <SwiperSlide> <RecommendationCard /></SwiperSlide>
            <SwiperSlide> <RecommendationCard /></SwiperSlide>
            <SwiperSlide> <RecommendationCard /></SwiperSlide>
            <SwiperSlide> <RecommendationCard /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default RecommendationCarousel;