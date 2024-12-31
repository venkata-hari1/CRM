import React, { Fragment, useState } from 'react'
import { withStyles } from '@mui/styles';
import { withRouter } from '../../../../Utils/withRouter';
import { Box, Button, Grid } from '@mui/material';
import { ReactComponent as Exports } from '../../../Common/assets/images/export.svg';
import { CSVLink } from 'react-csv';
import Filter from '../../Filters/Filters';
import { AppDispatch } from '../../../Redux/store/Store';
import { ReactComponent as FilterIcon } from '../../../Common/assets/images/Filter1.svg';
import { Styles } from './MUIStyles';


type IProps = {
    handleOpen1:()=>void,
    classes: {
        [type: string]: string;
    };
    data:{
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
    hadleOpenFilter:()=>void
    dispatch: AppDispatch;
    selector: string | unknown | null;
};



function Filters({ classes,data,handleOpen1,hadleOpenFilter }: IProps) {


    return (

        <Box className={classes.filter}>     
              <Filter open1={false}/>
                <Button startIcon={<FilterIcon />} className={classes.exports1} onClick={hadleOpenFilter}>Filter</Button>
                
                    <Button className={classes.exports}   onClick={handleOpen1} startIcon={<Exports />}>
                        Exports
                    </Button>
              
        </Box>
    )
}
export default withRouter(withStyles(Styles)(Filters));
