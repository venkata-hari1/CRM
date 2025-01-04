import React, { Fragment, useEffect, useState } from 'react'
import Header from './Header'
import TextEditor from './TextEditor'
import { Box, Button } from '@mui/material'
import { withStyles } from '@mui/styles'
import { Styles } from './UpdatesStyles'
import { AppDispatch } from '../Redux/store/Store'
import { TermsAndConditionController, TermsAndConditionData, UpdateTermsAndConditionController } from '../Redux/Reducers/Property'
import { withRouter } from '../../Utils/withRouter'
import { ToastError, ToastSuccess } from '../../Utils/Validate'
import { Email, WhatsApp } from '@mui/icons-material'
type IProps={
    classes:{
        [type:string]:string
    },
    dispatch:AppDispatch,
    selector:{
      PropertyReducer:{
        TermsAndConditionData:{
          status:boolean,
          data:{
            id:number,
            termsAndConditions:string,
            createdDate:string
          }
        }
      }
    }
}
function TermsAndCondition1({selector,classes,dispatch}:IProps) {
  const termsandcondition=selector.PropertyReducer.TermsAndConditionData
  const[privacyPolicy,setPrivacyPolicy]=useState<string>('')
  const[value,setValue]=useState<string | boolean | null>(termsandcondition?.status)
  const[about,setAbout]=useState<string>('')
  const[length,setLength]=useState<any>(2)
  useEffect(()=>{
    async function getData(){
    await dispatch(TermsAndConditionData())
    }
    getData()
  },[dispatch,length,value])
  const handlegetData=(data:{value:string})=>{
    setPrivacyPolicy(data.value)
  }
  const handlePublish=async()=>{
    const Id=localStorage.getItem('AdminSellerIds')
    if(Id==="9"){
      const data={
        termsAndConditions:privacyPolicy
      }
     const response=await dispatch(TermsAndConditionController({data:data}))
    const fulfilled=response.payload 
    if(fulfilled.status===true){
      setValue(true)
     ToastSuccess(fulfilled.message)
    }
    else{
      setValue(true)
     ToastError(fulfilled.message)
    }
    }
  }
const handlegetTerms=(data:{id:number,termsAndConditions:string})=>{
  localStorage.setItem("termsid",data?.id.toString())
  setAbout(data?.termsAndConditions)
  setValue(false)
  
}
const HandleUpdate=async()=>{
  const data={
    termsAndConditions:privacyPolicy
  }
const response=await dispatch(UpdateTermsAndConditionController({data:data}))
const fulfilled=response.payload 
if(fulfilled.status===true){
  setAbout("")
  setValue(true)
  ToastSuccess(fulfilled.message)
}
else{
  ToastError(fulfilled.message)
}
}
  return (
    <Fragment>
  
      <Header name='Updates' />
      <Box className={classes.mainroot}>
      <Box className={classes.root}>
        <Box className={classes.conatiner}>
        <TextEditor about={about} handlegetData={handlegetData} value='Enter Updates'/>
        </Box>
        <Box className={classes.btncontainer}>
      <Box className={classes.btns}>
            <Button onClick={handlePublish} sx={{color:'white !important'}} startIcon={<WhatsApp/>} color='success'>Whatsapp</Button>
            <Button onClick={handlePublish} sx={{color:'white !important'}} startIcon={<Email/>} color='primary'>email</Button>
        </Box>
      </Box>
      </Box>
      </Box>
    </Fragment>
  )
}

export default withRouter(withStyles(Styles)(TermsAndCondition1))