import { Typography } from '@mui/material'
import React from 'react'
import { Styles } from '../MUIStyles';
import { withStyles } from '@mui/styles';
import { withRouter } from '../../../../Utils/withRouter';

function ApartmentData() {
    return (
        <div>
            <Typography>Apartment Data</Typography>
        </div>
    )
}
export default withRouter(withStyles(Styles)(ApartmentData));
