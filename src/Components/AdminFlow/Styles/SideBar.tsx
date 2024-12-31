import { Theme } from "@mui/material";
import { flex } from "../../Common/Styles";

export const Styles=(theme:Theme)=>({
    Sidebar:{
        background:'#F4FAFF !important',
        height:'100vh !important',
        position:'fixed !important' as 'fixed',
        width:'100% !important',
        zIndex:'900 !important'
    },
    gridcontainer:{
        width:'100% !important',
        [theme.breakpoints.down('lg')]:{
            width:'95% !important'
        }
    },
    maincontainer:{
        ...flex,
        flexDirection:'column !important' as 'column'
    }
})