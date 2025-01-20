import React, { useState } from 'react'
import { withStyles } from '@mui/styles'
import { withRouter } from '../../../../Utils/withRouter'
import { Styles } from './AddClientStyles'
import { Box, Button, Dialog, DialogContent, Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import { EmailRegex, NameRegex } from '../../../../Utils/Validate'
import CachedIcon from '@mui/icons-material/Cached';
import { AppDispatch } from '../../../Redux/store/Store'
import { Dailog_Box } from '../../../Redux/Reducers/LandingReducer'
import CancelIcon from '@mui/icons-material/Cancel';
type IProps = {
    classes: {
        [type: string]: string
    },
    handleValue: () => void,
    open: boolean,
    editsale: null
    dispatch: AppDispatch
    selector: {
        LandingReducer: {
            dailogbox: boolean
        }
    }
}
type IState = {
    name: string,
    email: string,
    date: string,
    amount: number | null
}
function DialogBox({ classes, dispatch, selector }: IProps) {
    const [propertyId, setPropertyId] = useState<string>('')
    const [tenetstatus, setTenetStatus] = useState<string>('')
    const [referce, setReferece] = React.useState(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [sales, setSales] = useState<IState>({
        email: '',
        name: '',
        date: '',
        amount: null
    })
    const [error, setError] = useState<IState>({
        email: '',
        name: '',
        date: '',
        amount: null
    })
    const [selectedPayment, setSelectedPayment] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [value, setValue] = useState(false)
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };
   const handleRemoveFile=()=>{
        setPreviewUrl(null)
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
    const handleRadio = (e: any) => {
        if (e.target.value) {
            setReferece(e.target.value)
            setTimeout(() => { setValue(true) }, 300)
        }

    }
    const handleclose = () => {
        dispatch(Dailog_Box(false))
    }
    const openFileDialog = () => {
        document.getElementById('file-input')?.click();
    };

    const open = selector.LandingReducer.dailogbox
    return (
        <Dialog open={open} onClose={handleclose}
        sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "100%",
                maxWidth: "500px", 
              },
            },
          }}
        >
            <DialogContent>
                <Box className={classes.boxheader}>
                    <Typography className={classes.title}>Add Business Details</Typography>
                    <Divider />
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={6}>
                        <Typography className={classes.header_title}>First Name*</Typography>
                        <TextField placeholder='Enter First Name' fullWidth InputProps={{
                            classes: { input: classes.input, notchedOutline: classes.notchedOutline }
                        }} />
                        <Typography className={classes.header_title}>Last Name*</Typography>
                        <TextField placeholder='Enter Last Name' fullWidth InputProps={{
                            classes: { input: classes.input, notchedOutline: classes.notchedOutline }
                        }} />
                        <Typography className={classes.header_title}>Sector*</Typography>
                        <TextField placeholder='Enter Sector..' fullWidth InputProps={{
                            classes: { input: classes.input, notchedOutline: classes.notchedOutline }
                        }} />
                        <Typography className={classes.header_title}>Email*</Typography>
                        <TextField placeholder='Enter Email..' fullWidth InputProps={{
                            classes: { input: classes.input, notchedOutline: classes.notchedOutline }
                        }} />
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        <Typography className={classes.header_title}>Mobile*</Typography>
                        <TextField placeholder='Enter Mobile..' fullWidth InputProps={{
                            classes: { input: classes.input, notchedOutline: classes.notchedOutline }
                        }} />

                        <Typography className={classes.header_title}>Location*</Typography>
                        <TextField placeholder='Enter Location..' fullWidth InputProps={{
                            classes: { input: classes.input, notchedOutline: classes.notchedOutline }
                        }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography className={classes.header_title}>Referce Type* </Typography>
                            {value && <CachedIcon onClick={() => setValue(false)} sx={{ marginTop: '2%' }} />}</Box>
                        <FormControl fullWidth>
                            {!value ? <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                onChange={handleRadio}
                            >
                                <FormControlLabel value="Name" control={<Radio />} label="Name" />
                                <FormControlLabel value="Mobile" control={<Radio />} label="Mobile" />
                                <FormControlLabel value="Event" control={<Radio />} label="Event" />
                            </RadioGroup> :
                                <TextField type={referce === "Mobile" ? 'number' : 'text'} placeholder={`Enter ${referce}...`} InputProps={{
                                    classes: { input: classes.input, notchedOutline: classes.notchedOutline }
                                }} />}
                        </FormControl>
                        <Typography className={classes.header_title}>Date*</Typography>
                        <TextField type='date'
                            fullWidth name='date'
                            onChange={handleChange} value={sales.date} InputProps={{
                                classes: { input: classes.input, notchedOutline: classes.notchedOutline }
                            }} />
                    </Grid>
                </Grid>
               <Divider sx={{marginTop:'10px',marginBottom:'10px'}}/>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={12} lg={6}>
                    <Box sx={{display:'flex',marginTop:{xs:'2%',md:'2%',lg:'0px'}}}>
                        <input
                            type="file"
                            id="file-input"
                            style={{ display: 'none' }}
                            accept="image/*" // Accept only images
                            onChange={handleFileChange}
                        />

                        {/* Button to open file dialog */}
                        <Button variant="contained" onClick={openFileDialog} sx={{width:'60%'}} className={classes.cancelBtn}>
                            Select File
                        </Button>
                        {previewUrl && (
                            <Box sx={{border:'1px solid grey',borderRadius:'10px',padding:'1px',background:'black'}}>  
                                <CancelIcon sx={{float:'right',width:'20px',color:'red'}} onClick={handleRemoveFile}/>                     
                                <Box
                                    src={previewUrl}
                                    component={'img'}
                                    alt="Preview"
                                    style={{ width: '60px', height: '60px', borderRadius: '5px', objectFit: 'cover' }}
                                />
                            </Box>
                        )}
                    </Box>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                    <Button size='small' onClick={handleclose} sx={{width:'99%'}} className={classes.cancelBtn}>Cancel</Button>
                    </Grid>
                    <Grid item xs={6} md={6} lg={3}>
                    <Button size='small' onClick={handleSubmit} disabled={!isFormComplete()} sx={{width:'99%', background: !isFormComplete() ? 'grey !important' : '#073762' }} className={classes.saveBtn}>Create</Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}

export default withRouter(withStyles(Styles)(DialogBox))