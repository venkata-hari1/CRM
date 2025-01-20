import { Theme } from "@mui/material";
import { textTransform } from "../../../Common/Styles";

export const Styles=(theme:Theme)=>({
title:{
 fontSize:'110% !important',
 fontWeight:'900 !important',
 marginBottom:'1% !important'
 },
 dialogPaper:{
  width:'23% !important',
  height:"fit-content !important",
   border:"1px solid #D9D9D9 !important",
   borderRadius:"8px !important",
   [theme.breakpoints.down('lg')]:{
    width:'95% !important'
   }
 },
 validate:{
   color:'red !important',
   fontSize: '75% !important',
   marginTop:'1% !important'
 },
 selecttext:{
   display:'flex !important',
   gridGap:'2% !important',
   alignItems:"center !important",
   fontSize:'85% !important',
   color:'#414141 !important',
   fontWeight:'900 !important',
 },
 inputheadertext:{
    fontSize:'88% !important',
    fontWeight:'900 !important',
    marginTop:'1.2% !important',
    marginBottom:'1.2% !important'
 },
input:{
  fontSize:'90% !important'
 
},
 inputLabelShrink:{
   fontSize:'1px !important'
 },
 btns:{
    marginTop:'6%!important',
    '&>button:nth-child(1)':{
        ...textTransform,
        border:'1px solid #073762',
        color:'#073762',
        fontSize:'90%'
    },
    '&>button:nth-child(2)':{
       ...textTransform,
       background:'#073762',
       color:'white',
       fontSize:'90%',
       marginLeft:'2%'
    }
 },
 header_title:{
  fontWeight:'500 !important',
  fontSize:'96% !important',
  color:'#000929 ',
  margin:'3% 0 !important',
},
propertyInput:{
  height: "43.5px",
  '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#9FC5E9 !important',
      borderRadius:"8px",
  },
  '& .MuiSvgIcon-root': {
      color: '#9FC5E9 !important'
  }
},
notchedOutline: {
  borderWidth: "1px",
  borderColor: "#9FC5E9 !important",
  borderRadius:"8px !important"
},
cancelBtn:{
  height:"45px !important",
  borderRadius:"12px !important",
  border: "2px solid #073762 !important",
  marginRight:"10px !important"
},
saveBtn:{
  minWidth:"78px !important",
  height:"45px !important",
  borderRadius:"12px !important",
  border: "2px solid transparent !important",
  marginRight:"10px !important",
  backgroundColor: "#073762 !important",
},
select_formcontainer:{
  display:'flex',
  padding:'10px',
  flexDirection:'column' as 'column'
},
popup_btn:{
  background:'#f4faff !important',
  color:'black !important',
  fontWeight:'700 !important',
  width:'100% !important',
  marginTop:'10px !important',
  ...textTransform
},
closeBtn:{
  ...textTransform
},
textfiled:{
  marginBottom:'10px !important'
}
})