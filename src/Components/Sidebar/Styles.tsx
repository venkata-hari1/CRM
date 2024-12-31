import { Theme } from "@mui/material";
import { ManRopeFont, flex, textTransform } from "../Common/Styles";

export const Styles=(theme:Theme)=>({
    boxstyles:{
        backgroundColor:'#F4FAFF !important',
        position:'fixed !important' as 'fixed',
        zIndex:'900 !important',
        height:'100vh',
        padding:"10px !important"
    },
    logout:{
        ...flex,
        width:'60% !important',
        fontWeight:'800 !important',
        background:'#100A55 !important',
        fontSize:'80.00% !important',
        color:'white !important',
        ...textTransform,
        marginTop:'2% !important',
        marginBottom:'12.5px !important',
        marginLeft:'20px !important'
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
        fontFamily:'"Manrope", sans-serif !important',
        color:'#737787 !important',
        fontSize:'100% !important'
    },
    sidebartext1:{
        fontFamily:'"Manrope", sans-serif !important',
        color:'white !important',
        fontSize:'100% !important'
    },

    mainlistitems1:{
        borderRadius:'12px !important',
        background:'#073762 !important',
        color:'white !important',
        fontWeight:'900 !important',
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