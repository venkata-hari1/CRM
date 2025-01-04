import { Theme } from "@mui/material"
import { flex, textTransform } from "../Common/Styles"

const publishbutton={
  padding:'10px, 16px, 9px, 16px',
    borderRadius:'12px',
    color:'white',
    fontWeight:'600'
}
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
    marginTop:'15px',
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
    display:'flex',
    width:'20%',
    [theme.breakpoints.down('lg')]:{
      width:'100%'
    },
    justifyContent:'space-between',
    '&>button':{
      width:'48%'
    },
    '&>button:nth-child(1)':{
      ...publishbutton,
    ...textTransform,
    background:'#25D366',
    '&:hover':{
      background:'#25D366'
    }
    },
    '&>button:nth-child(2)':{
      ...publishbutton,
    ...textTransform,
    background:'#720E9E',
    '&:hover':{
      background:'#720E9E'
    }
    }
    
  },
})

