import React, { Fragment, useEffect, useState } from 'react'
import Header from './Header'
import TextEditor from './TextEditor'
import { Box, Button, Dialog, DialogActions, DialogContent, Theme } from '@mui/material'
import { withStyles } from '@mui/styles'
import { flex, textTransform } from '../Common/Styles'
import { withRouter } from '../../Utils/withRouter'
import { AppDispatch } from '../Redux/store/Store'
import {PrivacyPolicyController, PrivacyPolicyData, UpdatePrivacyPolicyController} from '../Redux/Reducers/Property'
import { toast } from 'react-toastify'
// import PrivacyPolicy from '../CustomerFlow/CustomerProfile/PrivacyPolicy'
import {ReactComponent as Publishicon} from '../Common/assets/images/Publishicon.svg'
import { ToastError, ToastSuccess } from '../../Utils/Validate'
export const Styles=(theme:Theme)=>({
  root:{
    ...flex,
    flexDirection:'column !important' as 'column'
  },
  btncontainer:{
    width:'95% !important',
    marginTop:'3% !important',
    display:'flex !important',
    justifyContent:'space-between !important'
  },
  conatiner:{
    width:'95% !important',
    [theme.breakpoints.down('lg')]:{
        width:'100% !important'
    }
  },
  preview:{
    ...textTransform,
    fontSize:'90% !important',
    fontWeight:'900 !important'
  },
  btns:{
    width:'10% !important',
    '&>button':{
    ...textTransform,
    marginLeft:'10px',
    fontSize:'90%',
    padding:'10px, 16px, 9px, 16px',
    borderRadius:'12px',
    color:'white',
    width:'100%',
    background:'#073762',
    '&:hover':{
      background:'#073762'
    }
    }
    
  },
})
type IProps={
    classes:{
        [type:string]:string
    },
    dispatch:AppDispatch ,
    selector:{
      PropertyReducer:{
        PrivacyPolicyData:{
          status:boolean,
          data:{
            id:number,
            createdDate:string
            privacyPolicy:string
          }
        }
      }
    }
}
function PrivacyPolicy1({classes,dispatch,selector}:IProps) {
  const privacypolicy=selector.PropertyReducer.PrivacyPolicyData
  const[value,setValue]=useState<boolean>(privacypolicy?.status)
  const[privacyPolicy,setPrivacyPolicy]=useState<string>('')
  const[about,setAbout]=useState<string>('')
  const handlegetData=(data:{value:string})=>{
    setPrivacyPolicy(data.value)
  }
  const handlegetTerms=(data:{id:number,privacyPolicy:string})=>{
    localStorage.setItem("termsid",data?.id.toString())
    setAbout(data?.privacyPolicy)
    setValue(false)
    
  }
  useEffect(()=>{
    async function getData(){
    await dispatch(PrivacyPolicyData())
    }
    getData()
  },[dispatch,value])
  const handlePublish=async()=>{
    const Id=localStorage.getItem('AdminSellerIds')
    if(Id==="10"){
      const data={
        privacyPolicy:privacyPolicy
      }
     const response=await dispatch(PrivacyPolicyController({data:data}))
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

  const HandleUpdate=async()=>{
    const data={
      privacyPolicy:privacyPolicy
    }
  const response=await dispatch(UpdatePrivacyPolicyController({data:data}))
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
      <Header name='Privacy Policy'/>
      {value?
      <Box sx={{marginTop:'10%'}}>
        {/* <PrivacyPolicy admin={true} handlegetTerms={handlegetTerms} privacypolicy={privacypolicy}/> */}
      </Box>:
      <Box className={classes.mainroot}>
      <Box className={classes.root}>
        <Box className={classes.conatiner}>
        <TextEditor about={about} handlegetData={handlegetData} value='Enter Privacy Policy'/>
        </Box>
        <Box className={classes.btncontainer}>
      <Box className={classes.btns}>
      {value || value===undefined?<Button onClick={handlePublish} startIcon={<Publishicon/>} sx={{color:'white !important'}}>Publish</Button>:
      <Button onClick={HandleUpdate}>Update</Button>
      }
        
        </Box>
     
      </Box>
      </Box>
    
       
    </Box>}
      
    
    </Fragment>
  )
}

export default withRouter(withStyles(Styles)(PrivacyPolicy1))