import { Theme } from "@mui/material";
import { flex, fontSize_100prc, textTransform } from "../Styles";
export const Styles=(theme:Theme)=>({
  headerContainer:{
    ...flex,
    background:'white !important',
    width:'100% !important',
    padding:'5px !important',
    position:'fixed !important' as 'fixed',
    zIndex:'1000 !important',
    top:'0 !important',
    borderBottom:'1px solid #9fc5e933 !important',
    [theme.breakpoints.down('lg')]:{
      left:'0 !important',
      padding:'18px 0px !important',
      width:'99% !important',

    }

  },
  headerimage:{
    width:'30px',height:'30px',borderRadius:'50%',
    [theme.breakpoints.down('lg')]:{
      width:'20px',
      height:'20px'
    }
  },
  headerlogo:{
    '@media screen and (max-resolution: 1dppx)':{
      width:'100% !important',
      marginTop:'15% !important'
    }
  },
  dialogContent:{
    fontSize:'90% !important',
    lineHeight:'28px !important',
    
  },
  headerContainer11:{
    ...flex,
    background:'white !important',
    width:'88% !important',
    padding:'5px !important',
    position:'fixed !important' as 'fixed',
    zIndex:'1000 !important',
    top:'0 !important',
    [theme.breakpoints.down('lg')]:{
      left:'0 !important',
      width:'99% !important',

    }
  },
  profile:{
    display:'flex !important',
    position:'relative !important' as 'relative',
    float:'right !important' as 'right'
  },
  sellernotification:{
   '@media screen and (max-resolution:1dppx)':{
    marginLeft:'20% !important'
   },
   '@media screen and (min-resolution: 120dpi) and (max-resolution: 130dpi)': {
    marginLeft:'13% !important'
   }
  },
  sellerbox1:{
    marginRight:'110px !important',
    '@media(max-resolution:1dppx)':{
      marginRight:'140px !important',
    }
  },
  notificationicon:{
    marginRight:'2% !important',
    fontSize:'10rem !important',
    height:"42px !important",
    '@media(max-resolution:125dpi)':{
      marginRight:'1px !important'
  },
    cursor:"pointer !important",
    "&:hover":{
      height:"41px !important",
    }
  },
  gridBox:{
    display:'flex !important',
    alignItems:"center !important",
    justifyContent:"space-between !important"
  },
  logout:{
    color:'#F14231 !important'
  },
  Notification:{
    marginTop:'3px !important',
    position:'absolute !important' as 'absolute',
    zIndex:900,
    background:'white',
    boxShadow:'2px 3px 20px 0px #0000001F !important',
    right:"0 !important",
    marginLeft:'20% !important',
    width:'100% !important',
    [theme.breakpoints.down('lg')]:{
      width:'90% !important',
      marginRight:'0.001px !important'
    }
  },
  listmode:{
    fontSize:'85% !important',
    marginTop:'1.5% !important',
    fontWeight:'900 !important',
    color:'black !important',
  },
  dialogtitle:{
    fontWeight:'900 !important',
    fontSize:'160% !important'
  },
  breakpage:{
    marginTop:'4.5% !important',
    [theme.breakpoints.down('lg')]:{
      marginTop:'15% !important'
    }
  },
  btnchangemode:{
    ...textTransform,
    fontSize:'95% !important'
  },
  headerLogo:{
    marginLeft:'5% !important',
    [theme.breakpoints.down('lg')]:{
      marginLeft:'0.1px !important'
    }
  },
  TextField:{
    width:'70% !important',
    marginTop:'1% !important',
    borderRadius:'8px !important',
    background:'#F4FAFF !important',
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none"
    },
    "&.Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none"
      }
    },
    [theme.breakpoints.down('lg')]:{
      width:'100% !important'
    }
  },
  input:{
    border:'none !important',
    height:'1.5vh !important',
    marginLeft:'2% !important',
    '&::placeholder':{
      fontSize:'85% !important'
    }
  },
  headerContainer1:{
    ...flex,
    position:'fixed !important' as 'fixed',
    width:'100% !important',
    background:'white !important',
    zIndex:'1000 !important',
    top:'0',
    borderBottom:'1px solid #9fc5e933 !important'
  },
  headerTitle:{
    fontSize:'180% !important',
    fontWeight:'900 !important',
    [theme.breakpoints.down('lg')]:{
      marginLeft:'15px'
    }
  },
  btn3:{
    width:'100% !important'
  },
  gridContainer:{
    width:'95% !important',
  },
  gridContainer1:{
  width:'97% !important',
  alignItems:"center !important",
  // padding:".5% 0 .5% 3%!important",
  [theme.breakpoints.down('lg')]:{
    width:'99% !important'
  }
  },

  gridContainer2:{
    width:'95% !important',
    [theme.breakpoints.down('lg')]:{
      width:'99% !important'
    }
    },
  leftbixsection:{
    width:'30% !important',
    float:'right !important' as 'right',
    marginRight:'40% !important',
    [theme.breakpoints.down('lg')]:{
      width:'80% !important',
      marginRight:'0.1% !important',
    }
  },
  leftbixsection2:{
    width:'100% !important',
    float:'right !important' as 'right',
    [theme.breakpoints.down('lg')]:{
      width:'80% !important',
      marginRight:'0.1% !important',
    }
  },
  leftbixsection1:{
    width:'70% !important',
    float:'right !important' as 'right',
    marginRight:'46% !important',
    [theme.breakpoints.down('lg')]:{
      width:'80% !important',
      marginRight:'0.1% !important',
    }
  },
  headerdivider:{
    marginTop:'6.4% !important'
  },
  header_profile_drop_down:{
    position:'absolute !important' as 'absolute',
    zIndex:900,
    background:'white',
    boxShadow:'2px 3px 20px 0px #0000001F !important',
    right:0,
    width:'14% !important',
    marginRight:'5% !important',
    [theme.breakpoints.down('lg')]:{
      width:'90% !important',
      marginRight:'0.001px !important'
    }
  },
  header_profile_drop_down2:{
    position:'absolute !important' as 'absolute',
    zIndex:900,
    background:'white',
    boxShadow:'2px 3px 20px 0px #0000001F !important',
    right:0,
    width:'14% !important',
    marginRight:'18% !important',
    [theme.breakpoints.down('lg')]:{
      width:'90% !important',
      marginRight:'0.001px !important'
    }
  },
  header_profile_drop_down1:{
    position:'absolute !important' as 'absolute',
    zIndex:900,
    background:'white',
    boxShadow:'2px 3px 20px 0px #0000001F !important',
    right:"0 !important",
    width:'14% !important',
    marginRight:'10% !important',
    [theme.breakpoints.down('lg')]:{
      width:'90% !important',
      marginRight:'0.001px !important'
    }
  },
  header_profile_text:{
    display:'flex !important',
    color:'#AAAAAA',
    '&:hover':{
      fontWeight:'900',
      color:'#073762',
    },
    '&>span':{
      fontSize:'80% !important',
      marginLeft:'15px',
      marginTop:'1px',

    }
  },
  chip:{
    background:'white !important'
  },
  btn_icon:{
    // maxWidth:"155px !important",
    padding: "8px !important",
    border:'1px solid #E0DEF7 !important',
    borderRadius: '1000px !important',
    backgroundColor:" #F4FAFF !important",
    color:" #1A202C !important",
    fontWeight:"600 !important",
    boxShadow:" 0px 0px 40px 0px #7065F01A",
    ...textTransform
  },
  text:{
    ...flex,
    padding:'10px',
    height:'5vh !important',
    cursor:'pointer !important',
    background:'#9FC5E9 !important'
  },
  btnsheader:{
  
    height:'5.1vh',
    marginTop:"auto !important",
    marginBottom:"auto !important",
    borderRadius:'100px !important',
    border:'1px solid #F0EFFB !important',
    '&>button':{
    ...textTransform,
    width:'50%'
    },
    '&>button:nth-child(1)':{
      background:'#DF5532',
      color:'white',
      height:'5vh',
      borderRadius:'100px',
      fontWeight:'900'
  },
  '&>button:nth-child(2)':{
    color:'#000000',
    height:'5vh',
    borderRadius:'100px',
    fontWeight:'900'
}

  },
  btnsheader1:{
    height:'5.1vh',
    width:'80% !important',
    borderRadius:'100px !important',
    marginTop:"auto !important",
    marginBottom:"auto !important",
    border:'1px solid #F0EFFB !important',
   
    '&>button':{
    ...textTransform,
    width:'50%'
    },
    '&>button:nth-child(2)':{
      background:'#DF5532',
      color:'white',
      height:'5vh',
      borderRadius:'100px',
      fontWeight:'900'
  },
  '&>button:nth-child(1)':{
    color:'#000000',
    height:'5vh',
    borderRadius:'100px',
    fontWeight:'900'
}

  },
  header_loginsection: {
    display: 'flex !important',
    width: '100% !important',
    justifyContent: 'flex-end !important',
    height: '6vh !important',
    [theme.breakpoints.down('lg')]: {
      marginLeft: '0.001px',
    },
    '&>button': {
      width: '100%'
    }
  },
  avatar:{
    ...flex,
    borderRadius:'50% !important',
    background:'#073762',
    color:'white',
    padding:'3px !important',
    width:'25px',
    height:'25px',
    margin:"0 5px !important",
    fontSize:'0.8rem !important',
    fontWeight:'800'
  },
  text1:{
    ...flex,
    height:'5vh !important',
    padding:'10px',
    cursor:'pointer !important',
  },
  deactiveNavItem:{
    ...flex,
    height:'5vh !important',
    padding:'5px 15px',
    cursor:'pointer !important',
    borderRadius:"5px !important"
  },
  activeNavItem:{
    ...flex,
    padding:'5px 15px',
    height:'5vh !important',
    cursor:'pointer !important',
    background:'#9FC5E9 !important',
    borderRadius:"5px !important"

  },
  header_logo:{
    width:'100% !important',
    objectFit:'cover !important' as 'cover',
    backgroundPosition:'center !important'
  },
  header_middlesections:{
    display:'grid !important',
    [theme.breakpoints.down('lg')]:{
      display:'none !important'
    }
  },
  headernavbar: {
    display: 'flex',
    marginTop: '12px !important',
    '&>div': {

      fontWeight:'800',
      color:'#000929',
      display:'flex',
      marginLeft:'40px',
      fontSize: '15.98px'
    }
  },
  headernavbar1: {
    display: 'flex',
    alignItems:"center !important",
    marginLeft:'30px !important',
    '&>div': {
      fontWeight:'800',
      color:'#000929',
      display:'flex',
      marginLeft:'40px',
      ...fontSize_100prc
    }
  },
  headerbtns:{
  width:'100% !important',
   display:'flex !important',
   marginTop:'3px !important',
   float:'right' as 'right',
   marginLeft:'0px !important',
   marginRight:'10px !important',
    [theme.breakpoints.down('lg')]:{
      marginLeft:'0.01px !important',
    },
    '&>a':{
    '&>button':{
      fontWeight:'1000',
      fontSize:'96%',
      padding:'8px !important',
      textTransform:'capitalize !important' as 'capitalize'
    },
    '&>button:nth-child(1)':{
      color:'#073762',
      marginRight:'10px',
      border:'1px solid #9FC5E9'
    }
  },
  },
  ladingpage_login:{
    width:'91.93px !important',
    marginRight:'15px !important'
  },
  ladingpage_signup:{
    fontWeight:'1000 !important',
    textTransform:'capitalize !important' as 'capitalize',
    background:'#073762 !important',
    width:'105.93px !important',
    color:'white !important',
  },
  smallProfile:{
    height:"30px",
    width:"30px",
    borderRadius:"50%",
    background:'#073762',
  },
  sellerBtnText :{
    fontSize:"1em !important"
  },
  downIcon : {
    color:"#718096 !important",
    fontSize:"24px !important"
  }
})