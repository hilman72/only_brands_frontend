import React from 'react';
import './BusinessCarousel.style.scss'
import BrandCards from '../BrandCards/BrandCards.components'

function BusinessCarousel(){

    return(
        <div className="BusinessCarousel">
            <BrandCards />
            <BrandCards />
            <BrandCards />
        </div>
    )
}

export default BusinessCarousel;