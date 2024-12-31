import React, { Fragment, useEffect, useState } from 'react'
import Header from '../Header'
import { Box, Button, FormControl, Grid, Input, InputLabel, List, ListItem, ListItemIcon, ListItemText, MenuItem, Select, TextField, Typography } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { withStyles } from '@mui/styles';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { Styles } from './Styles';
import { CountryCodes, SignUp } from '../../Redux/Reducers/Authentication';
import { AppDispatch } from '../../Redux/store/Store';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth } from '../../Redux/Reducers/LandingReducer';
import { withRouter } from '../../../Utils/withRouter';
import { EmailRegex, NameRegex, PasswordRegex, PhoneRegex } from '../../../Utils/Validate';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { toast } from 'react-toastify';

type IProps = {
    dispatch: AppDispatch;
    navigate: Function;
    selector: {
        AuthReducer: {
            countrycodes: { data: { id: number, code: string }[] }
        }
    }
    classes: {
        [type: string]: string
    },
}

type IState = {
    name: string,
    email: string,
    password: string,
    phone: string
}

function AddNewUser({ classes, dispatch, selector }: IProps) {
    const [value, setValue] = useState<string>('');
    const [display, setDisplay] = useState<boolean>(true);
    const [open, setOpen] = useState<boolean>(false);
    const [countryCode, setCountryCode] = useState<string>()
    const [auth, setAuth] = useState<IState>({
        name: '',
        email: '',
        phone: '',
        password: ''
    })
    const [error, setError] = useState<IState>({
        name: '',
        email: '',
        phone: '',
        password: '',
    })
    const [errorMessage, setErrorMessage] = useState<string>('')
    const Selector = selector.AuthReducer.countrycodes

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(CountryCodes())
    }, [])

    const handleRegister = async () => {
        const formData = new FormData()
        formData.append("name", auth.name)
        formData.append("email", auth.email)
        formData.append("mobile", auth.phone)
        formData.append("password", auth.password)
        
        const response = await dispatch(SignUp({ data: formData }))
        const fulfilled = response.payload
        if (fulfilled.status === true) {
            toast.success(fulfilled.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
        else {
            toast.error(fulfilled.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }

    };
    const RegisterhandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "name") {
            const Name_Regex = NameRegex
            if (!Name_Regex.test(value)) {
                setError((prev) => ({ ...prev, name: 'Name does not containes special charaters and numbers' }))
            }
            else {
                setError((prev) => ({ ...prev, name: '' }))
            }
        }
        if (name === "phone") {
            const phoneregex = PhoneRegex
            if (!phoneregex.test(value)) {
                setError((prev) => ({ ...prev, phone: 'Invalid Phone Number' }))
            }
            else {
                setError((prev) => ({ ...prev, phone: '' }))
            }
        }
        if (name === "email") {
            const emailregex = EmailRegex
            if (!emailregex.test(value)) {
                setError((prev) => ({ ...prev, email: 'Invalid Email' }))
            }
            else {
                setError((prev) => ({ ...prev, email: '' }))
            }
        }
        if (name === "password") {
            const passwordRegex = PasswordRegex

            if (!passwordRegex.test(value)) {
                setError(prevError => ({
                    ...prevError,
                    password: "Password must be 8 characters long and include at least one special character, one upper case and lower case letters."
                }));
            } else {
                setError(prevError => ({ ...prevError, password: '' }));
            }
        }

        setAuth(prev => ({ ...prev, [name]: value }));
    };

    const hanldeSelectCountryCode: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
        const value = e.target.value;
        setCountryCode(value);
    };

    const IsFormComplete = () => {
        const { name, phone, password, email } = auth
        if (name && phone && password && email && error.name === '' && error.phone === '' && error.password === '' && error.email === "") {
            return true
        }
        else {
            return false
        }
    }

    return (
        <Fragment>
            <Header name='Add New User' />
            <Box className={classes.boxcontainer}>
                <Box className={classes.gridconatiner}>
                    <Button className={classes.btn} onClick={()=>navigate('/admin/customer')}><ArrowBackIosIcon className={classes.arrowleft} />Back to Customers</Button>
                    <Box className={classes.addnewuser}>Add New Customer</Box>
                </Box>
                <Grid container spacing={1} className={classes.gridconatiner}>
                    <Grid item xs={12} md={12} lg={5} className={classes.propertyimages}>
                        <Box className={classes.register_leftsection_formcontroler}>
                            <FormControl fullWidth>
                                <Typography component={'div'} className={classes.TextField}>Name</Typography>
                                <TextField
                                    name='name'
                                    value={auth.name}
                                    onChange={RegisterhandleChange}
                                    placeholder='Enter name'
                                    className={classes.textfileds}
                                    InputProps={{
                                        classes: { input: classes.input }
                                    }}
                                />
                                {error.name && <Typography className={classes.validate}>{error.name}</Typography>}
                                <Typography component={'div'} className={classes.TextField}>Phone</Typography>
                                <TextField
                                    name='phone' value={auth.phone}
                                    onChange={RegisterhandleChange}
                                    placeholder='Phone Number'
                                    className={classes.textfileds}
                                    InputProps={{
                                        classes: { input: classes.input },
                                        // startAdornment: (
                                        //     <Box>
                                        //         <select className={classes.selectorcolor} value={countryCode} onChange={hanldeSelectCountryCode as React.ChangeEventHandler<HTMLSelectElement>}>
                                        //             {Selector?.data?.map((data: { id: number, code: string }) => <option key={data.id} value={data?.code}>{data?.code}</option>)}
                                        //         </select>
                                        //     </Box>
                                        // )
                                    }}
                                />
                                {error.phone && <Typography className={classes.validate}>{error.phone}</Typography>}
                                <Typography component={'div'} className={classes.TextField}>Email</Typography>
                                <TextField
                                    placeholder='Email'
                                    name='email' value={auth.email}
                                    className={classes.textfileds}
                                    onChange={RegisterhandleChange}
                                    InputProps={{
                                        classes: { input: classes.input }
                                    }}
                                />
                                {error.email && <Typography className={classes.validate}>{error.email}</Typography>}
                                <Typography component={'div'} className={classes.TextField}>Password</Typography>
                                <TextField
                                    placeholder='Enter Password'
                                    type={display ? 'password' : 'text'}
                                    name="password"
                                    className={classes.textfileds}
                                    onChange={RegisterhandleChange}
                                    value={auth.password}
                                    InputProps={{
                                        classes: { input: classes.input },
                                        endAdornment: (
                                            <Fragment>
                                                {display ? (
                                                    <RemoveRedEyeIcon className={classes.register_muiicon} onClick={() => setDisplay(!display)} />
                                                ) : (
                                                    <VisibilityOffIcon className={classes.register_muiicon} onClick={() => setDisplay(!display)} />
                                                )}
                                            </Fragment>
                                        )
                                    }}
                                />
                                {error.password && <Typography className={classes.validate}>{error.password}</Typography>}
                                <Box className={classes.btns}>
                                    <Button>Cancel</Button>
                                    <Button className={!IsFormComplete() ? classes.register_signup12 : classes.register_signup} onClick={handleRegister} disabled={!IsFormComplete()}>Add</Button>
                                </Box>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                        {/* <Box className={classes.propertyimages}>
                            <Typography className={classes.upload}>Upload Photo </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon className={classes.insertIcon}><InsertPhotoIcon /></ListItemIcon>
                                    <ListItemText primary={<Typography className={classes.dropimages}>Drop User image here, or</Typography>}
                                        secondary={<Typography className={classes.browseimages}>select Click to browse</Typography>}
                                    />
                                </ListItem>
                            </List>
                        </Box> */}
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}

export default withRouter(withStyles(Styles)(AddNewUser))
