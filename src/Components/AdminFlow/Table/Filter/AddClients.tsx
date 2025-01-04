import React, { useState } from 'react'
import { withStyles } from '@mui/styles'
import { withRouter } from '../../../../Utils/withRouter'
import { Styles } from './AddClientStyles'
import { Box, Button, Dialog, DialogContent, Divider, FormControl, Menu, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import { EmailRegex, NameRegex } from '../../../../Utils/Validate'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppDispatch } from '../../../Redux/store/Store'
import { Dailog_Box } from '../../../Redux/Reducers/LandingReducer'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
type IProps = {
    classes: {
        [type: string]: string
    },
    handleValue: () => void,
    open: boolean,
    editsale: null
    dispatch: AppDispatch
    selector: {
        SellerReducer: {
            Sale: {
                data: {
                    userEmail: string,
                    soldDate: string,
                    status: string,
                    price: number,
                    paymentType: string
                }
            }
        },
        LandingReducer: {
            data: {
                userName: string,
                userEmail: string,
                soldDate: string,
                price: number,
                paymentType: string,
                status: string
            },
            dailogbox: boolean
        }
        PropertyReducer: {
            SellerProperties: {
                data: {
                    data: {
                        id: number,
                        apartmentName: string
                    }[]
                }
            }
        }
    }
}
type IState = {
    name: string,
    email: string,
    date: string,
    amount: number | null
}
function DialogBox({ classes, dispatch, selector, editsale }: IProps) {
    const GetSale = selector?.SellerReducer?.Sale
    const [propertyId, setPropertyId] = useState<string>('')
    const [tenetstatus, setTenetStatus] = useState<string>('')
    const [sales, setSales] = useState<IState>({
        email: '',
        name: '',
        date: '',
        amount: GetSale?.data?.price ? GetSale?.data?.price : null
    })
    const [error, setError] = useState<IState>({
        email: '',
        name: '',
        date: '',
        amount: null
    })
    const [selectedPayment, setSelectedPayment] = useState('');

    const selectProperty = (e: SelectChangeEvent<string>) => {
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        if (name === 'email') {
            const regex = EmailRegex
            if (!regex.test(value)) {
                setError((prev) => ({ ...prev, email: 'Invalid Email' }))
            } else {
                setError((prev) => ({ ...prev, email: '' }))
            }
        }
        if (name === "name") {
            const regex = NameRegex
            if (!regex.test(value)) {
                setError((prev) => ({ ...prev, name: 'Invalid Name' }))
            } else {
                setError((prev) => ({ ...prev, name: '' }))
            }
        }
        setSales((prev) => ({ ...prev, [name]: value }))
    }
    const handlePaymentChange = (e: SelectChangeEvent<string>) => {
        setSelectedPayment(e.target.value);
    };
    const handleselectStatus = (e: SelectChangeEvent<string>) => {
        setTenetStatus(e.target.value)
    }
    const isFormComplete = () => {
        const { email, amount, date } = sales
        if (email && amount && date && error.email === "" && tenetstatus && selectedPayment && propertyId) {
            return true
        }
        else {
            return false
        }
    }
    const handleSubmit = async () => {
    }
    const handleclose = () => {
        dispatch(Dailog_Box(false))
    }
    const PaymentType: any = []
    const open = selector.LandingReducer.dailogbox
    return (
        <Dialog open={open} classes={{ paper: classes.dialogPaper }} onClose={handleclose}>
            <DialogContent >
                <Box className={classes.boxheader}>
                    <Typography className={classes.title}>Add Clients Details</Typography>
                    <Divider />
                </Box>
                <Box>

                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState: any) => (
                            <React.Fragment>
                                <Button variant="contained" className={classes.popup_btn} {...bindTrigger(popupState)}>
                                    Client Details
                                </Button>
                                <Menu {...bindMenu(popupState)}>
                                    <FormControl className={classes.select_formcontainer}>
                                        <TextField placeholder='Client Name' size='small' className={classes.textfiled} fullWidth InputProps={{
                                            classes: { input: classes.input, notchedOutline: classes.notchedOutline }
                                        }} />
                                        <TextField placeholder='Client Email' size='small' className={classes.textfiled} fullWidth InputProps={{
                                            classes: { input: classes.input, notchedOutline: classes.notchedOutline }
                                        }} />
                                        {error.email && <Typography className={classes.validate}>{error.email}</Typography>}
                                        <TextField placeholder='Client Mobile' size='small' className={classes.textfiled} fullWidth InputProps={{
                                            classes: { input: classes.input, notchedOutline: classes.notchedOutline }
                                        }} />
                                        <TextField placeholder='Client Address' size='small' className={classes.textfiled} fullWidth InputProps={{
                                            classes: { input: classes.input, notchedOutline: classes.notchedOutline }
                                        }} />
                                        <Button onClick={popupState.close} variant='contained' color='primary' size='small' className={classes.closeBtn}>Close</Button>
                                    </FormControl>
                                    {/* <MenuItem onClick={popupState.close}>Logout</MenuItem> */}
                                </Menu>
                            </React.Fragment>
                        )}
                    </PopupState>

                </Box>
                <Typography className={classes.header_title}>Project Name*</Typography>
                <TextField placeholder='Enter Project Name' fullWidth InputProps={{
                    classes: { input: classes.input, notchedOutline: classes.notchedOutline }
                }} />
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState: any) => (
                        <React.Fragment>
                            <Button variant="contained" className={classes.popup_btn} {...bindTrigger(popupState)}>
                                SDLC
                            </Button>
                            <Menu {...bindMenu(popupState)}>
                                <FormControl className={classes.select_formcontainer}>

                                    <TextField
                                        placeholder="No. of Front-End Devs"
                                        type="number"
                                        size="small"
                                        className={classes.textfiled}
                                        fullWidth
                                        InputProps={{
                                            classes: { input: classes.input, notchedOutline: classes.notchedOutline },
                                        }}
                                    />
                                    <TextField
                                        placeholder="No. of Back-End Devs"
                                        type="number"
                                        size="small"
                                        className={classes.textfiled}
                                        fullWidth
                                        InputProps={{
                                            classes: { input: classes.input, notchedOutline: classes.notchedOutline },
                                        }}
                                    />
                                    <TextField
                                        placeholder="No. of QA Testers"
                                        type="number"
                                        size="small"
                                        className={classes.textfiled}
                                        fullWidth
                                        InputProps={{
                                            classes: { input: classes.input, notchedOutline: classes.notchedOutline },
                                        }}
                                    />
                                    <TextField
                                        placeholder="No. of DevOps Engineers"
                                        type="number"
                                        size="small"
                                        className={classes.textfiled}
                                        fullWidth
                                        InputProps={{
                                            classes: { input: classes.input, notchedOutline: classes.notchedOutline },
                                        }}
                                    />
                                    <TextField
                                        placeholder="No. of Project Managers"
                                        type="number"
                                        size="small"
                                        className={classes.textfiled}
                                        fullWidth
                                        InputProps={{
                                            classes: { input: classes.input, notchedOutline: classes.notchedOutline },
                                        }}
                                    />
                                    <TextField
                                        placeholder="No. of UI/UX Designers"
                                        type="number"
                                        size="small"
                                        className={classes.textfiled}
                                        fullWidth
                                        InputProps={{
                                            classes: { input: classes.input, notchedOutline: classes.notchedOutline },
                                        }}
                                    />
                                    <TextField
                                        placeholder="No. of Mobile Devs"
                                        type="number"
                                        size="small"
                                        className={classes.textfiled}
                                        fullWidth
                                        InputProps={{
                                            classes: { input: classes.input, notchedOutline: classes.notchedOutline },
                                        }}
                                    />

                                    <Button onClick={popupState.close} variant='contained' color='primary' size='small' className={classes.closeBtn}>Close</Button>
                                </FormControl>
                                {/* <MenuItem onClick={popupState.close}>Logout</MenuItem> */}
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
                <Typography className={classes.header_title}>Start Date*</Typography>
                <TextField type='date'
                    fullWidth name='date'
                    onChange={handleChange} value={sales.date} InputProps={{
                        classes: { input: classes.input, notchedOutline: classes.notchedOutline }
                    }} />
                <Typography className={classes.header_title}>Deadline*</Typography>
                <TextField type='date'
                    fullWidth name='date'
                    onChange={handleChange} value={sales.date} InputProps={{
                        classes: { input: classes.input, notchedOutline: classes.notchedOutline }
                    }} />

                <Box className={classes.btns}>
                    <Button size='small' onClick={handleclose} className={classes.cancelBtn}>Cancel</Button>
                    
                        <Button size='small' onClick={handleSubmit} disabled={!isFormComplete()} sx={{ background: !isFormComplete() ? 'grey !important' : '#073762' }} className={classes.saveBtn}>Create</Button> 
                       
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default withRouter(withStyles(Styles)(DialogBox))