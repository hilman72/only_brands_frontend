import React from 'react';
import './RecommendationCarousel.style.scss'
import RecommendationCard from '../../Components/RecommendationCards/RecommendationCards.components'

function RecommendationCarousel(){
    
    return(
        <div className="RecommendationCarousel">
            <RecommendationCard />
            <RecommendationCard />
            <RecommendationCard />
        </div>
    )
}

export default RecommendationCarousel;