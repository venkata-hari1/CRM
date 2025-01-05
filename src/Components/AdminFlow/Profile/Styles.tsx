import { Theme } from "@mui/material";
import { flex, textTransform } from "../../Common/Styles";

export const Styles=(theme:Theme)=>({
    mainbox:{
        ...flex,
        marginTop:'7.3% !important',
        borderTop:'1px solid #E2E8F0 !important',
        '@media screen and (min-resolution: 120dpi) and (max-resolution: 130dpi)':{
            marginTop:'-5px !important',
        },
        '@media(max-resolution:1dppx)':{
            marginTop:'-23px !important',
        }
    },
    padding12:{
        padding: '1.5% !important',
        width:'95% !important',
    },
    profileinformation:{
        ...flex,
        width:'80%',
        // padding:'10px',
        flexDirection:'column !important' as 'column',
        [theme.breakpoints.down('lg')]:{
            width:'100%'
        }
       
    },
    listitems:{
    
        width:'100% !important',
      
    },
    formRadioGroup:{
        width:'100% !important',
        display:'grid !important',
        height:'8vh !important',
        padding:'15px !important',
        borderBottom:'1px solid #9FC5E9 !important',
        gridTemplateColumns:'65% 35% !important',
        gridGap:'1% !important',
        [theme.breakpoints.down('lg')]:{
            gridTemplateColumns:'60% 40% !important',
            height:'auto !important'
        }
    },
    startIcon:{
      color:'white',
      border:'1px solid white',
      borderRadius:'50%',
      padding:'1%'
    },
    pincodecontainer:{
        display:'grid !important',
        gridTemplateColumns:'80% 20% !important',
        width:'95% !important',
        gridGap:'1% !important'
    },
    accountcircle:{
        width:'100px !important',
        height:'100px !important',
        color:'grey !important'
    },
    pincodeadd:{
        ...textTransform,
        fontSize:'90% !important',
        color:'white !important',
    },
    profilebox:{
        borderRight:'1px solid #E2E8F0 !important',
        height:'100vh !important',
        [theme.breakpoints.down('lg')]:{
            height:'auto !important'
        }
    },
    gridContaineritems:{
        display:'grid',
        gridTemplateColumns:'100%'
    },
    padding23:{
        padding:'9px !important',
       
    },
    profilebtns:{
        ...textTransform,
        marginLeft:'4% !important',
        marginTop:'2% !important',
        marginBottom:'2% !important'
    },
    circular:{
            top: "0 !important",
            left: "0 !important",
            bottom:"0 !important",
            right:"0 !important",
            position: 'absolute !important' as 'absolute',
            display: 'flex !important',
            alignItems: 'center !important',
            justifyContent: 'center !important',
    },
    roundbox:{
        position: 'relative !important' as 'relative', 
        display: 'inline-flex !important'
    },
    flexBox:{
        marginTop:'20px !important',
        width:'95% !important',
        [theme.breakpoints.down('lg')]:{
            width:'95% !important'
        }
    },
    register_muiicon:{
        cursor:'pointer !important' as 'pointer',
    },
    image:{
    width:'80px !important',
    height:'80px !important',
    borderRadius:'50% !important',
    border:'1px solid grey !important'
    },
    validate:{
        color:'red',
        fontSize:'80% !important',
        marginTop:'1%'
    },
    box_header:{
        marginTop:'5% !important',
        background:'#073762 !important',
        borderRadius:'16px !important',
        width:'85% !important',
        marginLeft:'3% !important'
    },
    completesecondarytext:{
        fontSize:'95% !important',
        color:'white !important',
        opacity:'50% !important',
        marginTop:'1% !important'
    },
    verifyButton:{
        ...textTransform,
        fontSize:'96% !important',
        width:'85% !important',
        color:'#073762 !important',
        fontWeight:'900 !important',
        marginLeft:'6% !important',
        background:'white !important',
        [theme.breakpoints.down('lg')]:{
            width:'85% !important'
        }
    },
    completeprofile:{
        color:'white !important',
        fontSize:'130% !important',
        fontWeight:'900 !important'
    },
    icon:{
        fontSize:'28px !important',
        color:'#073762 !important'
    },
    primarytext:{
        color:'#323142 !important',
        fontWeight:'900 !important',
        fontSize:'120% !important'
    },
    secondarytext:{
        fontSize:'98% !important',
        color:'#ACADB9 !important',
    },
    personalinformation:{
        fontWeight:'900 !important',
        fontSize:'160% !important',
        marginTop:'1% !important',
        marginBottom:'1% !important',
        color:'#1A202C !important'
    },
    listitemtext:{
        marginLeft:'15px !important'
    },
    delete:{
        ...textTransform,
        fontWeight:'900 !important',
        background:'#9FC5E9 !important',
        fontSize:'80% !important',
        borderRadius:'8px !important',
        color:'#1A202C !important',
        marginLeft:'6px !important'
    },
    input:{
        height:'1.5vh !important',
        '&::placeholder':{
            fontSize:'86% !important'
        }
    },
    textFiled:{
        borderRadius:'10px !important',
        border:'1px solid #9FC5E9 !important',
        marginTop:'2.5% !important',
        background:'#F4FAFF !important'
    },
    update:{
        ...textTransform,
        color:'white !important',
        background:'#073762 !important',
        fontSize:'1.1rem !important',
        marginTop:'3% !important',
        padding:"1% 0 !important",
        borderRadius:"8px !important"
    },
    update1:{
        ...textTransform,
        color:'white !important',
        background:'grey !important',
        fontSize:'1.1rem !important',
        marginTop:'3% !important',
        padding:"1% 0 !important",
        borderRadius:"8px !important"
    },
    textFiled1:{
        fontSize:'90% !important',
        fontWeight:'900 !important',
        marginTop:'2% !important',
        marginBottom:'2% !important'
    },
    input12:{
        fontSize:'80% !important',
        height:'1vh !important'
    },
    locationbtns:{
        marginTop:'8% !important'
    },
    cancelbtn:{
        ...textTransform,
        marginRight:'1.5% !important',
        color:'#073762 !important',
        padding:'1.5% !important',
        fontSize:'90% !important',
        border:'1px solid #073762 !important'
    },
    editbtn:{
        ...textTransform,
        background:'#F4FAFF !important',
        padding:'1% !important',
        fontSize:'85% !important',
        borderRadius:'10px !important',
        height:'4.5vh !important',
        border:'1px solid #9FC5E9 !important'
    },
    btncontainer:{
        width:'70% !important',
        display:'flex !important',
        justifyContent:'space-between !important',
        marginTop:'10px !important'
    },
    formcontroller:{
        borderTop:'1px solid black !important'
    },
    address:{
        fontSize:'100% !important'
    },
    deletebtn:{
        ...textTransform,
        background:'#FFCDCD !important',
        color:'#FF1C1C !important',
        fontSize:'82% !important',
        padding:'5% !important',
        borderRadius:'10px !important',
        height:'4.5vh !important',
        marginLeft:'3% !important',
        border:'1px solid #FF1C1C80 !important'
    },
    savebtn:{
        ...textTransform,
        fontSize:'90% !important',
        padding:'1.5% !important',
        background:'#073762 !important',
        color:'white !important',
        fontweight:'900 !important'
    },
    notchedOutline:{

        border:'1.3px solid black !important'
    },
    notchedOutline1:{

        border:'1px solid #9FC5E9 !important'
    },
    location:{
        padding:'15px !important',
        fontWeight:'900 !important',
        fontSize:'120% !important'
    },
    dialogtitle:{
        fontSize:'110% !important',
        fontWeight:'900 !important'
    },
    flexBox1:{
       display:'flex !important',
       padding:'15px !important',
       justifyContent:'space-between !important',
       borderBottom:'1px solid #9FC5E9 !important'
    },
    buttonselect:{
        ...textTransform,
        border:'1px solid #9FC5E9 !important',
        fontWeight:'900 !important',
        color:'#3D4254 !important',
        height:'7.5vh !important',
        fontSize:'85% !important',
        boxShadow:'0px 1px 13px 0px #919DAF40 !important'

    },
    selectaddress:{
        fontWeight:'900 !important',
        fontSize:'170% !important'
    },
    uploadphotos:{
        ...textTransform,
        color:'white !important',
        fontWeight:'900 !important',
        background:'#073762 !important',
        fontSize:'80% !important',
        borderRadius:'8px !important',
        [theme.breakpoints.down('lg')]:{
            width:'100% !important',
            marginBottom:'5px !important'
        }
        
    },
    profile_sideimage:{
        width:'83%'
    },
    imagecontainer:{
        [theme.breakpoints.down('lg')]:{
            ...flex
        }
    }
})