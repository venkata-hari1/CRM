import { Typography } from '@mui/material'
import React from 'react'
import { Styles } from '../MUIStyles';
import { withStyles } from '@mui/styles';
import { withRouter } from '../../../../Utils/withRouter';

function RoomData() {
    return (
        <div>
            <Typography>Room Data</Typography>
        </div>
    )
}
export default withRouter(withStyles(Styles)(RoomData));

