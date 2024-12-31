import { Alert, Box, Button, FormControl, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '../../Common/assets/images/EditIcon.png'
import { withStyles } from '@mui/styles';
import { Styles } from './Styles';
import { PasswordRegex } from '../../../Utils/Validate';
import { AppDispatch } from '../../Redux/store/Store';
import { ChangePassword } from '../../Redux/Reducers/Settings';
import { withRouter } from '../../../Utils/withRouter';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { toast } from 'react-toastify';
type IProps = {
  classes: {
    [type: string]: string
  },
  dispatch: AppDispatch
}
type IState = {
  old: string,
  new: string,
  confirm: string
}
function UpdatePassword({ classes, dispatch }: IProps) {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [successMessage, setSuccessMessage] = useState<string>('')
  const [display, setDisplay] = useState<boolean>(true);
  const [display1, setDisplay1] = useState<boolean>(true);
  const [password, setPassword] = useState<IState>({
    old: '',
    new: '',
    confirm: ''
  })
  const [errorpassword, setErrorPassword] = useState<IState>({
    old: '',
    new: '',
    confirm: ''
  })
  const handleSavePassword = async () => {
    const data = {
      oldPassword: password.old,
      newPassword: password.new,
      confirmNewPassword: password.confirm
    }
    const response = await dispatch(ChangePassword({ data: data }))
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
    setPassword({old:'',new:'',confirm:''})
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

  const handlepasswordfun = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === "old") {
      const passwordRegex = PasswordRegex

      if (!passwordRegex.test(value)) {
        setErrorPassword(prevError => ({
          ...prevError,
          old: "Password must be 8 characters long and include at least one special character, one upper case and lower case letters."
        }));
      } else {
        setErrorPassword(prevError => ({ ...prevError, old: '' }));
      }
    }
    if (name === "new") {
      const passwordRegex = PasswordRegex

      if (!passwordRegex.test(value)) {
        setErrorPassword(prevError => ({
          ...prevError,
          new: "Password must be 8 characters long and include at least one special character, one upper case and lower case letters."
        }));
      } else {
        setErrorPassword(prevError => ({ ...prevError, new: '' }));
      }
    }
    if (name === "confirm") {
      const passwordRegex = PasswordRegex

      if (!passwordRegex.test(value)) {
        setErrorPassword(prevError => ({
          ...prevError,
          confirm: "Password must be 8 characters long and include at least one special character, one upper case and lower case letters."
        }));
      } else {
        setErrorPassword(prevError => ({ ...prevError, confirm: '' }));
      }
    }

    setPassword(prev => ({ ...prev, [name]: value }))

  }
  const isFormComplete = () => {
    if (password.new && password.old && password.confirm && errorpassword.new === "" && errorpassword.old === "" && errorpassword.confirm === "") {
      return true
    }
    else {
      return false
    }

  }
  return (
    <Fragment>
       <Box className={classes.profileinformation}>
       <Box className={classes.listitems}>
          <Box className={classes.personalinformation} sx={{marginLeft:'0.5%'}}>Change Password</Box>
      <FormControl fullWidth sx={{marginLeft:'0.5%'}}>
        <TextField className={classes.textFiled} value={password.old} name='old' onChange={handlepasswordfun} placeholder='Old Password' InputProps={{
          classes: { input: classes.input },
        }} />
        {errorpassword.old && <Typography className={classes.validate}>{errorpassword.old}</Typography>}

        <TextField className={classes.textFiled} value={password.new} name='new' 
                type={display1 ? 'password' : 'text'}
        onChange={handlepasswordfun} placeholder='New Password' InputProps={{
          classes: { input: classes.input },
          endAdornment: (
            <React.Fragment>
                {display1 ?
                    (
                        <VisibilityOutlinedIcon className={classes.register_muiicon} onClick={() => setDisplay1(!display1)} />
                    ) : (
                        <VisibilityOffOutlinedIcon className={classes.register_muiicon} onClick={() => setDisplay1(!display1)} />
                    )}
            </React.Fragment>
        )
        }} />
        {errorpassword.new && <Typography className={classes.validate}>{errorpassword.new}</Typography>}

        <TextField value={password.confirm} name='confirm' 
        type={display ? 'password' : 'text'}
        onChange={handlepasswordfun} className={classes.textFiled} placeholder='Confirm Password' InputProps={{
          classes: { input: classes.input },
          endAdornment: (
            <React.Fragment>
                {display ?
                    (
                        <VisibilityOutlinedIcon className={classes.register_muiicon} onClick={() => setDisplay(!display)} />
                    ) : (
                        <VisibilityOffOutlinedIcon className={classes.register_muiicon} onClick={() => setDisplay(!display)} />
                    )}
            </React.Fragment>
        )
        }} />
        {errorpassword.confirm && <Typography className={classes.validate}>{errorpassword.confirm}</Typography>}

        <Button className={!isFormComplete() ?classes.update1:classes.update} onClick={handleSavePassword} disabled={!isFormComplete()}>Update</Button>
      </FormControl>
      </Box>
      </Box>
    </Fragment>
  )
}

export default withRouter(withStyles(Styles)(UpdatePassword))