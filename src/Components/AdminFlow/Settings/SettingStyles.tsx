import { Theme } from "@mui/material";
import { flex, textTransform } from "../../Common/Styles";

export const Styles=(theme:Theme)=>({
    validate:{
        fontSize:'90% !important',
        color:'red !important',
        fontWeight:'900 !important',
        marginBottom:'1% !important'
    },
    cardatcions:{
        float:'right !important' as 'right',
        '&>button':{
            ...textTransform,
            fontWeight:'900',

        }
    },
    notchedOutline:{
        border:'none !important'
    },
    faqs:{
        width:'100% !important',
        display:'grid !important',
        gridTemplateColumns:'60% 40% !important'
    },
    cardcontent:{
        width:'100% !important',
        lineHeight:'30px !important',
        [theme.breakpoints.down('lg')]:{
            width:'95% !important'
        }
    },
    deleteaccount:{
        fontSize:'80% !important',
        fontWeight:'900 !important'
    },
    link:{
        fontWeight:'900 !important',
        marginLeft:'2% !important'
    },
    btn:{
        ...textTransform,
        fontWeight:'900 !important',
        fontSize:'90% !important'
    },
    progressbar:{
        position:'absolute !important' as 'absolute',
        marginLeft:'25% !important',
        marginTop:'10% !important',
        zIndex:'900 !important'
    },
    changemode:{
        ...flex,
        flexDirection:'column !important' as 'column',
        position:'fixed !important' as 'fixed',
        marginTop:'10% !important',
        marginLeft:'15% !important',
        zIndex:'900 !important',
        background:'white !important',
        width:'30% !important',
        padding:'10px !important',
        boxShadow:'2px 2px 20px 1px #00000014 !important'

    },
    alertmessage:{
        fontSize:'95% !important',
        fontWeight:'900 !important'
    },
    change:{
        color:'grey',
        fontSize:'93% !important',
        fontWeight:'900',
        marginTop:'1.5% !important'
    },
    tabheader:{
        ...textTransform,
        fontSize:'96% !important'
    },
    padding:{
        padding:'15px'
    },
    notificationtext:{
        fontSize:'96% !important',
        color:'#000929 !important'
    },
    account:{
        background:'#F4FAFF',
        border:'1px solid #9FC5E9 !important',
        borderRadius:'8px',
        height:'auto',
        padding:'10px',
        width:'70% !important',
        [theme.breakpoints.down('lg')]:{
            width:'100% !important'
        }
    },
    account_email:{
        fontSize:'100% !important',
        marginBottom:'5px !important',
        marginTop:'10px !important',
        fontWeight:'900 !important'
    },
    input:{
        height:'2.5vh !important',
        '&::placeholder':{
            fontSize:'80% !important'
        }
    },
    verify:{
        ...textTransform,
        fontSize:'100% !important',
        fontWeight:'900 !important',
        color:'#073762 !important'
    },
    deleteAccount:{
        ...textTransform,
        fontSize:'85% !important',
        fontWeight:'900 !important',
        color:'#F06565 !important',
        border:'1px solid #F06565 !important'
    },
    TextField:{
        width:'100% !important',
        border: "1.5px solid #9FC5E9 !important",
        borderRadius: "8px !important",
        backgroundColor:"#FFFFFF !important"
    },
    deletetext:{
        fontSize:'110% !important',
        fontWeight:'900 !important'
    },
    deletetext1:{
        marginTop:'8px !important',
        fontSize:'96% !important',
        color:'#000929 !important'
    },
    divider:{
        border:'1px solid #9FC5E9 !important',
        marginTop:'10px !important',
        width:'100% !important'
    },
    formcontroller:{
        display:'grid !important',
        width:'70% !important',
        gridGap:'1% !important',
        marginTop:'2% !important',
        gridTemplateColumns:'48% 48% !important',
        '&>div':{
            marginTop:'3%'
        },
        [theme.breakpoints.down('lg')]:{
            width:'98% !important'
        }
    },
    save_changes:{
        width:'68% !important',
        '&>button':{
        ...textTransform,
        fontSize:'85% !important',
        color:'white !important',
        marginTop:'3% !important',
        float:'right !important' as 'right',
        padding:'8px !important'
        },
       [theme.breakpoints.down('lg')]:{
        width:'100% !important',
       }

    },
    TextField1:{
        border:'none !important',
        background:'#F4FAFF !important',
        marginTop:'2.5% !important'
    },
    input1:{
        height:'1vh !important',
        '&::placeholder':{
            fontSize:'75% !important'
        }
    },
    notification_btn:{
        ...textTransform,
        color:'white !important',
        background:'#073762 !important',
        fontWeight:'900 !important',
        width:'25% !important',
        fontSize:'86% !important',
        marginLeft:'70% !important',
        marginTop:'10px !important',
        float:'right !important' as 'right',
        marginBottom:'2% !important',
        [theme.breakpoints.down('lg')]:{
            width:'98% !important',
            marginLeft:'0.001px !important'
        }
    },
    root: {
        "&$checked": {
          color: "#073762 !important"
        }
      },
      checked: {},
      accountgridbox:{ 
        padding:'2.5% !important'
    },
    accounttext:{
        display:'flex !important',
        flexDirection:'column !important' as 'column',
        '&>span:nth-child(1)':{
            fontSize:'110%',
            fontWeight:'900'
        },
        '&>span:nth-child(2)':{
            fontSize:'95% !important',
            marginTop:'2%'
        }
    },
    radio:{
        marginBottom:'12% !important',
        '@media(max-resolution: 1dppx)':{
            marginBottom:'6% !important',
        }
    },
    accounttext1:{
        display:'flex !important',
        flexDirection:'column !important' as 'column',
        '&>span:nth-child(1)':{
            fontSize:'90%',
            fontWeight:'900'
        },
        '&>span:nth-child(2)':{
            fontSize:'80%',
            marginTop:'2%',
            lineHeight:'25px'
        }
    },
    profile_sideimage:{
        width:'83%',
        
    },
    imagecontainer:{
        [theme.breakpoints.down('lg')]:{
            ...flex
        }
    }
})