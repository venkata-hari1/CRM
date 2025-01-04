import React, { Fragment, useState } from 'react'
import { withStyles } from '@mui/styles';
import { withRouter } from '../../../../Utils/withRouter';
import { Box, Button, Grid } from '@mui/material';
import { ReactComponent as Exports } from '../../../Common/assets/images/export.svg';
import Filter from '../../Filters/Filters';
import { AppDispatch } from '../../../Redux/store/Store';
import { Styles } from './MUIStyles';
import { Add } from '@mui/icons-material';
import { Dailog_Box } from '../../../Redux/Reducers/LandingReducer'
type IProps = {
    lsdesktop:any,
    handleOpen1: () => void,
    classes: {
        [type: string]: string;
    };
    data: {
        status: string;
        price: number;
        updatedAt: number;
        address: string;
        apartmentName: string;
        images: string | undefined[];
        id: number,
        userName: string,
    }[]
    navigate: Function;
    hadleOpenFilter: () => void
    dispatch: AppDispatch;
    selector: string | unknown | null;
};



function Filters({ classes, dispatch, handleOpen1,lsdesktop}: IProps) {

    const hadleClient = () => {
        dispatch(Dailog_Box(true))
    }
    return (

        <Box className={classes.filter} sx={{marginBottom:lsdesktop?"10px":""}}>
            <Filter open1={false} />
            <Button startIcon={<Add />} className={classes.exports1} onClick={hadleClient}>Add</Button>
            <Button className={classes.exports} onClick={handleOpen1} startIcon={<Exports />}>Exports</Button>

        </Box>
    )
}
export default withRouter(withStyles(Styles)(Filters));
