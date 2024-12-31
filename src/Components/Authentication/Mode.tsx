import React from 'react'
import { Box, Button, Checkbox, Dialog, DialogContent, DialogTitle, Divider, FormControl, Grid, TextField, Typography } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Styles } from './Styles';
import { withStyles } from '@mui/styles';
import { withRouter } from '../../Utils/withRouter';


type IProps = {
    navigate: Function,
    classes: {
        [type: string]: string
    },

    handleClose: () => void,
    open: boolean,
    user: boolean,
    handleChange: () => void
}

function Mode({ navigate, classes, handleClose, open, user, handleChange }: IProps) {
    return (
        <Dialog
            open={open}
        >
            <DialogTitle className={classes.dialogTitle}>{"Become a Customer or Seller?"}</DialogTitle>
            <DialogContent className={classes.dialogContainentBox}>
                <Box className={classes.dialogBoxMain}>
                    <Box>
                        <Checkbox
                            checked={user}
                            onChange={handleChange}
                            icon={<RadioButtonUncheckedIcon />}
                            checkedIcon={<RadioButtonCheckedIcon className={classes.checkBox} />}
                        />
                    </Box>
                    <Box>
                        <Box>
                            <Typography className={classes.customerTxt}>Customer</Typography>
                            <Typography className={classes.discription}>Click ‘Customer’ to begin your search with ease. Discover a diverse
                                range of listings tailored to your preferences.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.dialogBoxMain}>
                    <Box>
                        <Checkbox
                            checked={!user}
                            onChange={handleChange}
                            icon={<RadioButtonUncheckedIcon />}
                            checkedIcon={<RadioButtonCheckedIcon className={classes.checkBox} />}
                        />
                    </Box>
                    <Box>
                        <Box>
                            <Typography className={classes.customerTxt}>Seller</Typography>
                            <Typography className={classes.discription}>Click 'Seller' to explore our selling process and reach a wider audience. Start selling your property efficiently with us.</Typography>
                        </Box>
                    </Box>
                </Box>
                <Grid>
                    <Box className={classes.dialogButton}>
                        <Button className={classes.continueBtn}>Continue</Button>
                    </Box>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}
export default withRouter(withStyles(Styles)(Mode))