import { Theme } from "@mui/material";
import { flex, textTransform } from "../../Common/Styles";

export const Styles=(theme:Theme)=>({
btn:{
...textTransform,
fontSize:'100% !important',
color:'#073762 !important',
fontWeight:'900 !important'
},

propertyimages:{
    border:'1px solid #E4E4E7 !important',
    borderRadius:'16px !important',
    padding:'10px !important',
    marginRight:'2% !important'
},
insertIcon:{
    ...flex,
    padding:'10px',
    border:'1px dashed grey !important',
    marginRight:'10px !important'
},
dropimages:{
    color:'#718096 !important',
    fontSize:'98% !important'

},
browseimages:{
    color:'#0CAF60 !important',
    fontSize:'110% !important',
    marginTop:'1% !important'
},
arrowleft:{ 
    marginRight:'10px !important',
    fontSize:'14px !important'
},
addnewuser:{
    fontSize:'140% !important',
    fontWeight:'900 !important'
},
upload:{
    fontWeight:'900 !important',
    fontSize:'110% !important'
},
gridconatiner:{
    marginTop:'1.5% !important',
    width:'95% !important',
},
inputtext:{
    fontSize:'90% !important'
},
input:{
    height:'1.5vh !important',
    '&::placeholder':{
        fontSize:'80% !important'
    }
},
btns:{
    marginTop:'1.5% !important',
    '&>button:nth-child(1)':{
        ...textTransform,
        fontSize:'90% !important',
        fontWeight:'900 !important',
        border:'1px solid #073762',
        color:'#073762'
    },
    '&>button:nth-child(2)':{
        ...textTransform,
        fontSize:'90% !important',
         background:'#073762',
         marginLeft:'1.5%',
         color:'white'
    }
},
TextField:{
    fontSize:'95% !important',
    fontWeight:'900 !important',
    marginBottom:'1.8% !important',
    marginTop:'1.8% !important'
},
boxcontainer:{
    ...flex,
    flexDirection:'column' as 'column'
},
validate: {
    fontSize: '90% !important',
    color: 'red !important',
    fontWeight: '900 !important',
    marginBottom: '1% !important'
},
})