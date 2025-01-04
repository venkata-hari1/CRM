import { Theme } from "@mui/material";
import { flex, textTransform } from "../Common/Styles";

export const Styles=(theme:Theme)=>({
    boxstyles:{
        backgroundColor:'#F4FAFF !important',
        position:'fixed !important' as 'fixed',
        zIndex:'900 !important',
        height:'100vh',
         width:'15.5% !important',
        [theme.breakpoints.down('lg')]:{
            backgroundColor:'#F4FAFF !important',
            width:'72% !important',
            padding:'8px'
        }
        // padding:"10px !important"
    },
    logout:{
        ...flex,
        position:'absolute !important' as 'absolute',
        bottom:'0px !important',
        marginBottom:'30px !important',
        width:'95% !important',
        fontWeight:'800 !important',
        background:'#073762 !important',
        color:'white !important',
        ...textTransform,
   
     
    },
    header_logo:{
        display:'flex !important',
        flexDirection:'column !important' as 'column',
        // padding:'10px !important'
    },
    header_image:{
        marginTop:'2% !important',
        marginBottom:'17.5px !important',
        marginLeft:'6% !important'
    },
    listicons:{
        marginTop:'2% !important',
    },
    sidebartext:{
        color:'#737787 !important',
        fontSize:'100% !important'
    },
    sidebartext1:{
        color:'white !important',
        fontSize:'100% !important'
    },

    mainlistitems1:{
        borderRadius:'8px !important',
        width:'95% !important',
        height:'6vh !important',
        background:'#073762 !important',
        color:'white !important',
        '@media screen and (max-resolution: 1dppx) ':{
            marginTop:'4% !important',
        },
        '@media screen and (min-resolution: 120dpi) and (max-resolution: 130dpi)':{
            marginTop:'3% !important'
        }
        
    },
    mainlistitems:{
       '@media screen and (max-resolution: 1dppx) ':{
        marginTop:'4% !important',
    },
    '@media screen and (min-resolution: 120dpi) and (max-resolution: 130dpi)':{
        marginTop:'3% !important'
    }
    },
    listicons1:{
        '&>div':{
            '&>svg':{
        fill:'red !important'
            }
        }
    }
})