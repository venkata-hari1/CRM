import React, { Fragment, useEffect, useState } from 'react'
import { withStyles } from '@mui/styles'
import { Styles } from './Styles'
import { withRouter } from '../../../../Utils/withRouter'
import { Box, Button, Card, CardActions, CardContent, FormControl, TextField, Typography } from '@mui/material'
import { FacebookRegex, InstagramRegex, ToastError, ToastSuccess, TwitterRegex, LinkedInRegex } from '../../../../Utils/Validate'
import { AppDispatch } from '../../../Redux/store/Store'
import { AddLinks, DeleteLinks, GetLinks, UpdateLinks } from '../../../Redux/Reducers/LandingReducer'

type IProps={
    classes:{
        [type:string]:string
    },
    dispatch:AppDispatch,
    selector:{
        LandingReducer:{
            links:{
                data:{
                    youtubeLink:string,
                    instagramLink:string,
                    facebookLink:string,
                    twitteLink:string,
                    linkdinAccountLink:string

                }
            }
        }
    }
}
type IState={
    facebook:string,
    twitter:string,
    youtube:string,
    instagram:string
}
function LinkAccount({classes,dispatch,selector}:IProps) {
    const linksdata=selector.LandingReducer.links
    const[sociallinks,setSocialLinks]=useState<IState>({
        facebook:linksdata?.data?.facebookLink?linksdata?.data?.facebookLink:'',
        instagram:linksdata?.data?.instagramLink?linksdata?.data?.instagramLink:'',
        twitter:linksdata?.data?.twitteLink?linksdata?.data?.twitteLink:'',
        youtube:linksdata?.data?.linkdinAccountLink?linksdata?.data?.linkdinAccountLink:''

    })
    const[error,setError]=useState<IState>({
        facebook:'',
        instagram:'',
        twitter:'',
        youtube:''

    })
    useEffect(()=>{
        async function getData(){
            const response=await dispatch(GetLinks())
            const fulfilled=response.payload 
            localStorage.setItem("statuscode",fulfilled.statusCode)
        }
        getData()
    },[dispatch])
 
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target
        if(name==="twitter"){
            const regex=TwitterRegex 
            if(!regex.test(value)){
                setError((prev)=>({...prev,twitter:'Invalid Twitter URL'}))
            }
            else{
                setError((prev)=>({...prev,twitter:''}))
            }
        }
        if(name==="facebook"){
            const regex=FacebookRegex 
            if(!regex.test(value)){
                setError((prev)=>({...prev,facebook:'Invalid Facebook URL'}))
            }
            else{
                setError((prev)=>({...prev,facebook:''}))
            }
        }
        if(name==="instagram"){
            const regex=InstagramRegex
            if(!regex.test(value)){
                setError((prev)=>({...prev,instagram:'Invalid Instagram URL'}))
            }
            else{
                setError((prev)=>({...prev,instagram:''}))
            }
        }
        if(name==="youtube"){
            const regex=LinkedInRegex
            if(!regex.test(value)){
                setError((prev)=>({...prev,youtube:'Invalid LinkedIn URL'}))
            }
            else{
                setError((prev)=>({...prev,youtube:''}))
            }
        }
        
        setSocialLinks((prev)=>({...prev,[name]:value}))
    }
    const handleSubmit=async()=>{
        const data={
            twitteLink:sociallinks.twitter,
            facebookLink:sociallinks.facebook,
            instagramLink:sociallinks.instagram,
            linkdinAccountLink:sociallinks.youtube,
        }
        const response=await dispatch(AddLinks({data:data}))
        const fulfilled=response.payload 
        if(fulfilled.status===true){
        
            ToastSuccess(fulfilled.message)
        }
        else{
           
            ToastError(fulfilled.message)
        }
    }
    const handleDelete=async()=>{
      const response=await dispatch(DeleteLinks())
      const fulfilled=response.payload 
      if(fulfilled.status===true){
        setSocialLinks((prev)=>({...prev,
            facebook:'',
            instagram:'',
            twitter:'',
            youtube:''
        }))
        ToastSuccess(fulfilled.message)
      }
      else {
        ToastError(fulfilled.message)
      }
    }
    const isFormComplete=()=>{
        if(error.twitter==="" && error.instagram==="" && error.facebook==="" && error.youtube==="" && sociallinks.facebook && sociallinks.instagram && sociallinks.twitter && sociallinks.youtube){
            return true
        }
        else{
            return false
        }
    }
    const isFormComplete1=()=>{
        if(error.twitter==="" && error.instagram==="" && error.facebook==="" && error.youtube==="" ){
            return true
        }
        else{
            return false
        }
    }
    const handleUpdate = async () => {
        const data = {
            twitteLink: sociallinks.twitter,
            facebookLink: sociallinks.facebook,
            instagramLink: sociallinks.instagram,
            linkdinAccountLink: sociallinks.youtube,
        }
        const response = await dispatch(UpdateLinks({ data: data }))
        const fulfilled = response.payload
        if (fulfilled.status === true) {

            ToastSuccess(fulfilled.message)
        }
        else {

            ToastError(fulfilled.message)
        }
    }
  return (
      <Fragment>
          <Typography className={classes.account_email}>Link Account</Typography>
          <Typography className={classes.notificationtext}>These social profiles will appear on your website</Typography>
          <Box>
              <FormControl className={classes.formcontroller}>
                  <Box>
                      <Typography className={classes.notificationtext}>Twitter</Typography>
                      <TextField fullWidth name='twitter' value={sociallinks.twitter} onChange={handleChange} placeholder='Link Your Twitter Account'
                          className={classes.TextField1} InputProps={{
                              classes: { input: classes.input1 }
                          }}
                      />
                      {error.twitter && <Typography className={classes.validate}>{error.twitter}</Typography>}
                  </Box>
                  <Box>
                      <Typography className={classes.notificationtext}>Facebook</Typography>
                      <TextField fullWidth name='facebook' value={sociallinks.facebook} onChange={handleChange} placeholder='Link Your Facebook Account'
                          className={classes.TextField1} InputProps={{
                              classes: { input: classes.input1 }
                          }}
                      />
                      {error.facebook && <Typography className={classes.validate}>{error.facebook}</Typography>}
                  </Box>
                  <Box>
                      <Typography className={classes.notificationtext}>Instagram</Typography>
                      <TextField fullWidth name='instagram' value={sociallinks.instagram} onChange={handleChange} placeholder='Link Your InStagram Account'
                          className={classes.TextField1} InputProps={{
                              classes: { input: classes.input1 }
                          }}
                      />
                      {error.instagram && <Typography className={classes.validate}>{error.instagram}</Typography>}
                  </Box>
                  <Box>
                      <Typography className={classes.notificationtext}>LinkedIn</Typography>
                      <TextField fullWidth placeholder='Link Your LinkedIn Account' onChange={handleChange}
                          className={classes.TextField1} name='youtube' value={sociallinks.youtube} InputProps={{
                              classes: { input: classes.input1 }
                          }} />
                      {error.youtube && <Typography className={classes.validate}>{error.youtube}</Typography>}
                  </Box>
              </FormControl>
              <Box className={classes.save_changes}>

              {linksdata?.data?
              <Fragment>
                <Button onClick={handleDelete} variant='contained' color='error' >Delete</Button>
                <Button onClick={handleUpdate} variant='contained' disabled={!isFormComplete1()} color="success" sx={{marginRight:'2%'}}>Update</Button>
              </Fragment>
              
              :
              <Button onClick={handleSubmit} disabled={!isFormComplete()} 
              sx={{ background: !isFormComplete() ? "grey !important" : "#073762 !important" }}
              >Save Changes</Button>}

              </Box>
          </Box>
      </Fragment>

  )
}

export default withRouter(withStyles(Styles)(LinkAccount))