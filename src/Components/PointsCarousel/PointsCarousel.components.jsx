import React from 'react';
import './PointsCarousel.style.scss';
import PointsCards from '../PointsCards/PointsCards.components'
import Grid from '@material-ui/core/Grid'

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

function PointsCarousel(){

    return(
        <div className="CardContainer">
          <Swiper
                spaceBetween={30}
                slidesPerView={5}
                navigation
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide> <PointsCards /></SwiperSlide>
            <SwiperSlide> <PointsCards /></SwiperSlide>
            <SwiperSlide> <PointsCards /></SwiperSlide>
            <SwiperSlide> <PointsCards /></SwiperSlide>
            <SwiperSlide> <PointsCards /></SwiperSlide>
            <SwiperSlide> <PointsCards /></SwiperSlide>
            <SwiperSlide> <PointsCards /></SwiperSlide>
            <SwiperSlide> <PointsCards /></SwiperSlide>
            <SwiperSlide> <PointsCards /></SwiperSlide>
            <SwiperSlide> <PointsCards /></SwiperSlide>
                 </Swiper>
    </div>
    )
}

export default PointsCarousel;