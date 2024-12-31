import { Box, Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Styles } from '../MUIStyles';
import { withStyles } from '@mui/styles';
import { withRouter } from '../../../../Utils/withRouter';
import Range from "../../../Common/assets/images/Range.png"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { AppDispatch } from '../../../Redux/store/Store';

type IProps = {
    classes: {
        [type: string]: string;
    };
    navigate: Function;
    dispatch: AppDispatch;
    selector: string | unknown | null;
};

function HouseData({ classes, navigate, dispatch, selector }: IProps) {
    const [bathroom, setBathroom] = useState(0)
    const [bedroom, setBedroom] = useState(0)

    const handleBathtInc = () => {
        const add = bathroom + 1
        setBathroom(add)
    }

    const handleBathDec = () => {
        const sub = bathroom - 1
        setBathroom(sub)
    }

    const handleBedtInc = () => {
        const add = bedroom + 1
        setBedroom(add)
    }

    const handleBedhDec = () => {
        const sub = bedroom - 1
        setBedroom(sub)
    }

    return (
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box className={classes.priceRangeBox}>
                    <Box className={classes.priceRange}>
                        <Typography className={classes.priceRangeTxt}>Price Range</Typography>
                    </Box>
                    <Box className={classes.rangeImgBox}>
                        <img className={classes.rangeImg} src={Range} alt='Range' />
                    </Box>
                </Box>
                <Box className={classes.featureMainBox}>
                    <Box>
                        <Typography className={classes.featureTxt}>Features</Typography>
                    </Box>
                    <Box className={classes.bedroomMainBox}>
                        <Typography>Bedroom</Typography>
                        <Box className={classes.btnBox}>
                            <RemoveIcon className={classes.minusIcon} onClick={handleBedhDec} />
                            <Typography className={classes.value}>{bedroom}</Typography>
                            <AddCircleOutlineIcon className={classes.minusIcon} onClick={handleBedtInc} />
                        </Box>
                    </Box>
                    <Box className={classes.bedroomMainBox}>
                        <Typography>Bathroom</Typography>
                        <Box className={classes.btnBox}>
                            <RemoveIcon className={classes.minusIcon} onClick={handleBathDec} />
                            <Typography className={classes.value}>{bathroom}</Typography>
                            <AddCircleOutlineIcon className={classes.minusIcon} onClick={handleBathtInc} />
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.priceRange} >
                    <Typography>Date</Typography>
                    <Box>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="DD/MM/YYYY" className={classes.calander} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>
                </Box>
                <Box className={classes.priceRange}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio className={classes.checkBox} />} label="Any" />
                        <FormControlLabel value="male" control={<Radio className={classes.checkBox} />} label="1 - 12 months" />
                        <FormControlLabel value="other" control={<Radio className={classes.checkBox} />} label="13 - 24 months" />
                        <FormControlLabel value="month" control={<Radio className={classes.checkBox} />} label="24+ months" />
                    </RadioGroup>
                </Box>
                <Box className={classes.applyBtnBox}>
                    <Button variant='outlined' className={classes.resetBtn}>Reset</Button>
                    <Button variant='contained' className={classes.applyBtn}>Apply</Button>
                </Box>
            </Grid>
        </Grid>
    )
}
export default withRouter(withStyles(Styles)(HouseData));
