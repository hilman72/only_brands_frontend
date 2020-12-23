import React from 'react';
import './ConfettiPage.styles.scss'
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'


function ConfettiPage() {
    const { width, height } = useWindowSize()

    return (
        <div>
            <Confetti
                opacity={1}
                width={width}
                height={height}
                numberOfPieces={1000}
            />
            <div className='cofetti'>
                <h1>Reward Claimed.</h1>
                <h4>Thanks for watching.</h4>
            </div>
        </div>
    )
}

export default ConfettiPage;