import React from 'react';
import { styled } from '@material-ui/core/styles';
import { compose, spacing, palette } from '@material-ui/system';
import './ReferalCard.style.scss'



const Box = styled('div')(compose(spacing, palette));

export default function ReferalCard() {
    return (
        <Box className="referalBorder" >
            <h1>This is the referal Stamping Card</h1>
            <h2>Shop name</h2>
            <h3>Points collected</h3>
            <button>this is the button to claim the reward</button>
        </Box>
    );
}