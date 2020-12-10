import React from 'react';
import './FrontendSearch.styles.scss'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FrontendSearch() {
    return (
        <div className="search">
                 <FormControl component="fieldset">
            <FormLabel component="legend">FrontEndSearch Results Rearrangement</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                    value="top"
                    control={<Radio color="primary" />}
                    label="Top"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="start"
                    control={<Radio color="primary" />}
                    label="Start"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="bottom"
                    control={<Radio color="primary" />}
                    label="Bottom"
                    labelPlacement="start"
                />

            </RadioGroup>
        </FormControl>
        </div>
    );
}
