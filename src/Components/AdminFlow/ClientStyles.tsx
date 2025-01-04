import { Theme } from "@mui/material";
import { flex, fontSize_12px, fontSize_14px, fontSize_16px, fontSize_18px, fontSize_24px, fontSize_28px, textTransform } from "../Common/Styles";
const Requesttour = {
   ...fontSize_16px,
   ...textTransform,
   marginTop: '4% !important',
   padding: '10px !important',
   width: '100% !important',
   fontWeight: '800 !important',
   color: 'white !important',

}
export const Styles = (theme: Theme) => ({
   requestTour:{
      ...Requesttour,
     background:'#100A55 !important' ,
     '&:hover':{
      background:'#100A55 !important' 
     }
   },
   boimage1:{
      marginTop:'8px !important'
   },
   requestTour1:{
      ...Requesttour,
      background:'grey !important',
      '&:hover':{
         background:'grey !important',
      }
   },
   sliderimage: {
      marginRight: '3px',
      width: '60px',
      height: '60px',
      borderRadius: '50%'
   },
   image1: {
      width: '100%',
      height: '70vh'
   },
   purchase: {
      display: 'grid !important'
   },
   purchase1: {
      display: 'none !important'
   },
   edithome: {
      float: 'right !important' as 'right'
   },

   telicon: {
      textDecoration: 'none !important'
   },
   inlinebtn: {
      display: 'inline-flex !important' as 'inline-flex'
   },
   callicon: {
      color: '#073762 !important'
   },
   image3:{
      width:'50px',  
      height:'50px',   
      borderRadius:'50%'  
    },   
    image2:{  
      width: '100%',   
      height: '33vh' 
    },   
    socilatext:{   
      marginRight:'5px !important'   
    },  
    socilatext1:{  
      marginRight:'5px !important',  
      fontSize:'24px !important',
      color:"#1A202C !important"
    },
    divider1:{
      width:'100% !important'
   },
   project_container:{
      ...flex
   },
   page3_gridcontainer2: {
      width: '92% !important',
      marginTop: '2% !important',
      marginBottom: '0.2% !important',
      [theme.breakpoints.down('lg')]: {
         width: '98% !important',
         marginTop:'0px !important'
      }
   },
   terms: {
      fontSize: '80% !important',
      lineHeight: '28px !important'
   },
   btncontainer: {
      ...flex,
      marginTop: '1.5% !important'
   },
   closebtn: {
      ...textTransform,
      width: '100% !important',
      fontWeight: '900 !important',
      fontSize: '80% !important'
   },
   sharebtn: {
      marginLeft: '4px !important',
      marginRight: '4px !important'
   },
   FormControl: {
      marginLeft: '3px !important',
      width: '60% !important',
      display: 'grid !important',
      gridGap: '1% !important',
      gridTemplateColumns: '70% 30% !important'
   },
   Slider_btn1: {
      ...textTransform,
      padding: '10px !important',
      fontSize: '90% !important',
      fontWeight: '900 !important',
      color: '#073762 !important',
      float: 'right !important' as 'right',
      backgroundColor: '#9FC5E9 !important',
      '@media(max-resolution: 1dppx)':{
         marginTop:'4.2% !important',
         marginRight:'2% !important'
      }
   },
   slider_Map12: {
      '&>div:nth-child(1)': {
         fontWeight: '800',
         fontSize: '150.00%'
      },
      '&>div:nth-child(3)': {
         display: 'flex',
         color: '#073762',
         fontWeight: '800',
         fontSize: '100.00%'
      },
      '&>div:nth-child(5)': {
         lineHeight: '30px',
         fontSize: '87.50%'
      }
   },
   slider_rightarrow: {
      marginBottom: '1% !important',
      fontWeight: '800 !important'
   },
   slider1_rightsection: {
      position: 'relative !important' as 'relative',

   },
   submit: {
      ...textTransform,
      fontSize: '85% !important',
      fontWeight: '900 !important',
      color: 'white !important',
      background: '#100A55 !important'
   },
   textFiled: {
      borderRadius: '8px !important',
      marginLeft: '3px !important',
      background: 'white !important',
      border: '2px solid #9FC5E9 !important',
      '& fieldset': {
         border: 'none'
      }
   },
   input: {
      '&::placeholder': {
         fontSize: '80% !important'
      }
   },
   slider_btns: {
      display: 'flex !important',
      float: 'right !important' as 'right',
      marginRight: '5px !important',
      marginTop: '8.8% !important',
      [theme.breakpoints.down('lg')]: {
         marginTop: '1% !important'
      }
   },
   slider_viewallphotos: {
      ...textTransform,
      position: 'absolute !important' as 'absolute',
      bottom: 0,
      zIndex: 900,
      border: '1px solid #9FC5E9 !important',
      borderRadius: '8px !important',
      background: 'white !important',
      right: 0,
      color: '#000929 !important',
      fontWeight: '800 !important',
      marginRight: '6px !important',
      marginBottom: '20px !important',
      '@media(max-resolution: 1dppx)':{
         marginBottom: '60px !important',
         marginRight: '15px !important',
      }
   },
   customertitle:{
      fontSize: '250% !important',
      fontWeight: '800 !important',
      color: '#000929',
      [theme.breakpoints.down('lg')]: {
         marginTop: "10px !important"
      }
   },
   slider_title: {
      fontSize: '250% !important',
      fontWeight: '800 !important',
      color: '#000929',
      [theme.breakpoints.down('lg')]: {
         marginTop: "50px !important"
      }
   },
   slider_title1: {
      fontSize: '100% !important',
      opacity: '0.8 !important',
      marginTop: '1.5% !important'
   },
   Slider_btn: {
      ...textTransform,
      marginLeft: '10px !important',
      fontWeight: '800 !important',
      fontSize: '90% !important',
      backgroundColor: '#9FC5E9 !important',
      color: '#073762 !important'
   },
   slider_questionbuttons1: {
      float: 'right !important' as 'right',
      marginTop: '10% !important',
      '&>button': {
         ...textTransform,
         fontWeight: '800',
         background: '#9FC5E9',
         color: '#073762',
         marginRight: '10px',
         padding: '10px',
         fontSize: '90%',
         '&:hover': {
            background: '#9FC5E9'
         }
      },
   },
   slider_questionbuttons: {
      float: 'right !important' as 'right',
      marginTop: '10% !important',
      '&>button:nth-child(1)': {
         ...textTransform,
         fontWeight: '800',
         background: '#9FC5E9',
         color: '#073762',
         marginRight: '10px',
         padding: '10px',
         fontSize: '90%',
         '&:hover': {
            background: '#9FC5E9'
         }
      },
      '&>button:nth-child(2)': {
         ...textTransform,
         background: '#9FC5E9',
         padding: '10px',
         '&>a': {
            fontWeight: '800',
            color: '#073762',
            fontSize: '90%',
         },
         '&:hover': {
            background: '#9FC5E9'
         }

      }
   },
   ownerBtn: {
      width: "130px",
      whiteSpace: "nowrap",
   },
   slider_popuptext: {
      ...fontSize_28px,
      color: '#073762',
      fontWeight: '1000 !important',
      marginBottom: '2% !important'
   },
   slider_text1: {
      color: 'grey !important',
      opacity: '0.8',
      marginLeft: '18px !important',
      fontSize: '96% !important'
   },
   slider_text2: {
      fontSize: '16px !important',
      fontWeight: '800 !important',
      color: '#000929 !important'
   },
   slider_text3: {
      fontSize: '14px !important',
      color: 'grey !important',
   },
   page3_griditems1: {
      padding: '10px',
      background: '#F4FAFF',
      border: '1px solid #9FC5E9',
      borderRadius: '8px !important',
      alignItems: "center"
   },
   slider_griditem2: {
      background:'#F4FAFF',
      borderRadius: '8px !important',
      padding: '30px'
   },
   slider_griditem3: {
      borderRight:'1px solid #9FC5E9',
      [theme.breakpoints.down('lg')]:{
         display:'grid',
         gridTemplateColumns:'40% 60%',
         gridTemplateRows:'40px',
         gridGap:'2%',
         border:'none'
      },
      marginRight:'10px',
      '&>div:nth-child(1)': {
         fontSize: '100.00%',
         color: 'grey'
      },
      '&>div:nth-child(2)': {
         display:'flex',
         marginTop: '8% !important',
         fontWeight: '800',
         fontSize: '96%',
         '&>span':{
            marginTop:'1%',
            marginLeft:'1%'
         },
         [theme.breakpoints.down('lg')]:{
            marginTop: '0px !important',
         }
      }
   },
   slider_griditem4: {
      '&>div:nth-child(1)': {
         fontWeight: '800',
         fontSize: '150.00%',
       
      },
      '&>div:nth-child(2)': {
         fontSize: '96.00%',
         color: '#000929'
      }
   },
   divider: {
      width: '100% !important',
      marginBottom: '20px !important',
      marginTop: '30px !important'
   },
   slider_griditem5: {
      borderRadius:'8px',
      padding:'20px',
      marginTop:'3px !important',
     
      '&>div': {
         display: 'flex',
         justifyContent: 'space-between',
         '&>div': {
            fontSize: '100.00%',
            marginBottom: '10px'
         },
         '&>div:nth-child(1)': {
            display:'flex',
            color: '#100A55',
            fontSize:'100%',
            '&>span':{
               marginTop:'1.1%'
            }
         },
         '&>div:nth-child(2)': {
            fontWeight: '800',
             fontSize:'100%'
         }
      }
   },
   card: {
     
      height:'fit-content !important',
      borderRadius: '8px !important',
   },
   slider_cardcontent: {
      '&>div:nth-child(1)': {
         color: '#073762',
         fontSize: '110.00%',
         fontWeight: '800'
      },
      '&>div:nth-child(2)': {
         marginTop: '1%',
         '&>span:nth-child(1)': {
            color: '#073762',
            fontSize: '150.00%',
            fontWeight: '800'
         },
         '&>span:nth-child(2)': {
            ...fontSize_14px,
            color: 'grey',
         }
      },
      '&>div:nth-child(3)': {
         '&>button': {
            ...fontSize_16px,
            ...textTransform,
            padding: '10px',
            marginTop: '3%',
            background: '#073762',
            fontWeight: '800',
            color: 'white',
            width: '100%'
         }
      },
      '&>div:nth-child(5)': {
         ...fontSize_18px,
         color: '#000929',
         fontWeight: '800',
         marginBottom: '3%'
      },
      '&>div:nth-child(6)': {
         display: 'grid',
         gridTemplateColumns: '48% 48%',
         gridGap: '1%',
         marginBottom: '2%',
      },
      '&>div:nth-child(9)': {
         ...fontSize_12px,
         marginTop: '5% !important',
         color: 'grey'
      }
   },

   svg_home: {
      marginRight: '5px',
      color: 'grey'
   },
   btn2: {
      ...fontSize_14px,
      ...textTransform,
      opacity: '0.8',
      fontSize: '90% !important',
      padding: '12px !important',
      border: '1px solid #9FC5E9 !important',
      borderRadius: '8px !important',
      color: '#000929 !important',
   },
   btn1: {
      ...fontSize_14px,
      ...textTransform,
      opacity: '0.8',
      fontSize: '90% !important',
      padding: '12px !important',
      fontWeight: '800 !important',
      color: '#073762 !important',
      border: '1px solid #073762 !important',
      borderRadius: '8px !important',
      background: '#9FC5E9 !important'
   },
   svg_icon1: {
      marginRight: '5px !important'
   },
   anchorBtn:{
      ...textTransform,
      fontSize_16px,
      color: '#073762',
      marginTop: '1.5%',
      fontWeight: '800',
      padding: '10px',
      background: 'white',
      borderRadius: '40px',
      '&:hover': {
         background: '#073762',
         color: 'white',

      }
   },
   popup_contactbtns: {
      display: 'flex !important',
      flexDirection: 'column !important' as 'column',
      '&>button': {
         ...textTransform,
         fontSize_16px,
         color: '#073762',
         marginTop: '1.5%',
         fontWeight: '800',
         padding: '10px',
         background: 'white',
         borderRadius: '40px',
         '&:hover': {
            background: '#073762',
            color: 'white',

         }
      },
   },
   popup_uppertext: {
      '&>div:nth-child(1)': {
         fontWeight: '800',
         color: '#000929'
      },
      '&>div:nth-child(2)': {
         ...fontSize_14px,
         color: '#000929',
         marginTop: '1% !important'
      }
   },
   popup_header_text: {
      display: 'flex !important',
      justifyContent: 'space-between !important'
   },
   popup_dialog_content: {
      background: '#F6F8FB !important'
   },
   popup_location: {
      ...fontSize_12px,
      marginTop: '2% !important',
      display: 'flex !important',
      color: 'grey !important'
   },
   popup_location12: {
      ...fontSize_24px,
      color: '#11142D !important',
      marginRight: '5px !important'
   },
   dialogcontent: {
      background: '#F6F8FB'
   },
   gridleftsidecontainer:{
      borderRadius:'8px',
      padding:'10px',
      background:'#100A55'
   }
})