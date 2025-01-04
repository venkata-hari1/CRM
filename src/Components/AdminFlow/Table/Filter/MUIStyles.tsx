import { Theme } from "@mui/material";

export const flex={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
}
export const textTransform={
    textTransform:'capitalize !important' as 'capitalize'
}
const Icon={
    fontWeight:'500 !important',
    color:'#414141 !important',
    fontSize:'95% !important',
    marginRight:'6px !important',
}
const Export={
    ...textTransform,
    fontSize: '95% !important',
    color: '#1A202C !important',
    border: '1px solid #073762 !important',
    borderRadius: '12px !important',
    fontWeight: '900 !important',
}
export const Styles = (theme: Theme) => ({
    exports: {
       ...Export
    },
    mainContainer:{
        ...flex
    },
    gridContainer:{
        width:'95% !important'
    },
    maincontainer:{
        ...flex,
        flexDirection:'column !important' as 'column'
    },
    exports1: {
        ...Export,
        marginRight:'10px !important'
     },
    filterdata:{
        height:'6vh !important',
        width:"6vw !important",
        border: "2px solid #073762"
    },
    Add:{
height: '6vh !important',
width:"6vw !important", 
'@media(max-resolution:1dppx)':{
    marginLeft:'0px !important'
}
    },
    dialogbtns:{
        ...textTransform,
        fontSize:'90% !important'
    },
    title:{
        fontWeight:'900 !important',
        fontSize:'100% !important'
    },
    editsale:{
        display:'flex !important',
        marginTop:'20px !important'
    },
    positionData:{
        position:'absolute !important' as 'absolute',
        boxShadow:'0px 2px 48px 0px #00000014',
        width:'9% !important',
        marginRight:'1% !important',
        padding:'2px !important',
        right:'0 !important',
        marginBottom:'30px !important',
        zIndex:'900 !important',
        background:'white !important'
    },
    reviewtitle:{
        fontSize:'110% !important',
        fontWeight:'900 !important'
    },
    images1:{
        width: '60px !important', 
        borderRadius: '15px !important', 
        height: '60px !important', 
        marginTop: '3px !important'  
    },
    tabelbody:{
        fontSize:'85% !important',
        fontWeight:'900 !important',
        '@media(max-resolution:1dppx)':{
            fontSize:'110% !important'
        }
    },
    tabelbody123:{
        fontSize:'85% !important',
        fontWeight:'900 !important',
        color: '#073762 !important', 
        background: 'white !important',
        '@media(max-resolution:1dppx)':{
            fontSize:'110% !important'
        }
    },
    tabelbody2:{
        fontSize:'85% !important',
        fontWeight:'900 !important',
        background: 'white !important',
        '@media(max-resolution:1dppx)':{
            fontSize:'110% !important'
        }
    },
    tabelbody1:{
        color:'#073762 !important',
        fontSize:'85% !important',
        fontWeight:'900 !important',
        '@media(max-resolution:1dppx)':{
            fontSize:'110% !important'
        }
    },
    yesBtn:{ 
        ...textTransform,
        fontSize:'90% !important',
        fontWeight:'900 !important',
        color:'white !important'
        
    },
    tabledate:{
        textTransform:'capitalize !important' as 'capitalize',
        fontWeight:'900 !important',
        fontSize:'100% !important'
    },
    userNill:{
        color:'red !important'
    },
    propertyId:{
        marginLeft:'4px !important' 
    },
    tabelcell2:{
    display:'flex !important'
    },
    textBlod:{
        fontWeight:'900 !important'
    },
    filter:{
        marginTop:'3% !important',
        float:'right !important' as 'right',
        display:'flex !important',
        justifyContent:'space-between !important'
    },
    export:{
        ...textTransform,
        fontSize: '95% !important',
        height:'6vh !important',
        color: '#1A202C !important',
        border: '2px solid #073762 !important',
        borderRadius: '12px !important',
        fontWeight: '900 !important',
    },
    exportContainer :{
        ...textTransform,
        margin:'0 4% !important',

    },
    tableCellFirstRow:{
        display:'grid !important',
        gridTemplateColumns:'30% 70% !important',
        gridGap:'1% !important'
    },
    pending:{
        ...textTransform,
        fontSize:'90% !important',
        color:'white !important',
        background:'#37D159 !important',
        '@media(max-resolution:1dppx)':{
            fontSize:'110% !important'
        }
    },
    pending1:{
      
        fontSize:'95% !important',
        fontWeight:'900 !important',
        color:'#37D159 !important'
    },
    sortbtns:{
     marginTop:'1% !important',
     marginBottom:'1% !important',
     '&>button':{
        marginRight:'1.5%',
        fontSize:'80%',
     }
    },
    image:{
        width:'80px',
        height:'80px',
        borderRadius:'50%'
    },
    chip:{
        fontSize:'100% !important',
        fontWeight:'900 !important',
        background:'white !important'
    },
    tableimage: {
        width: '60px !important',
        marginRight: '15px !important',
        borderRadius: '15px !important',
        height: "60px !important"
    },
    rejected: {
        ...textTransform,
        fontSize: '85% !important',
        color:'white !important',
        background: '#FF6A6A !important',
        '@media(max-resolution:1dppx)':{
            fontSize:'110% !important'
        }
    },
    nilldata1:{
        fontSize:'100%',
        color:'red',
        textAlign:'center' as 'center'
    },
    rejected1: {
        fontSize: '95% !important',
        fontWeight:'900 !important',
        color: '#FF6A6A !important',
    },
    customername: {
        fontWeight: '900 !important',
        fontSize: '150% !important',
        marginLeft:'10px !important'
    },
    btns1: {
        ...textTransform,
        fontSize: '95% !important',
        width: '90% !important',
        color: '#737787 !important'
    },
    buttons: {
        display: 'flex !important',
        justifyContent: 'space-between !important',
        width: '30% !important',
        marginTop: '3% !important'
    },
    filters: {
        ...textTransform,
        color: '#1A202C !important',
        fontSize: '96% !important',
        float:'right !important' as 'right',
        border: '2px solid #073762 !important',
        borderRadius: '12px !important',

    },
    tablefont:{
        fontSize:'90% !important',
        color:'#1A202C !important'
    },
    details:{
        width:'80% !important',
        color:'white !important',
        border: '1px solid #3A52AA59 !important'
    },
    deleteicon: {
        ...textTransform,
        color: '#FF1C1C !important',
        fontSize: '100% !important',
        marginTop: '35px !important',

    },
    btncontainer:{
        width:'80%',
        display:'grid !important',
        gridTemplateColumns:'33% 33% 33%',
        gridGap:'5px',
        [theme.breakpoints.down('lg')]:{
            width:'100%'
        }
    },
    btns: {
        ...textTransform,
        fontSize: '95% !important',
        width: '90% !important',
        background: '#073762 !important',
        color: 'white !important',
        borderTopLeftRadius: '10px !important',
        borderTopRightRadius: '10px !important'
    },
    customer_contact: {
        color: '#737787 !important',
        fontWeight: '900 !important',
        fontSize: '95% !important',
        marginLeft:'10px !important'
    },
    sold: {
        ...textTransform,
        fontSize: '86% !important',
        color: 'white !important',
        background: '#073762 !important',
        '@media(max-resolution:1dppx)':{
            fontSize:'110% !important'
        }
    },
    sold1: {
        fontSize: '95% !important',
        fontWeight:'900 !important',
        color: '#073762 !important'
    },
    exportbtns:{
        position:"absolute !important" as "absolute",
        display:'flex !important',
        marginTop:'.5% !important',
    },
    textFiled: {
        marginTop: '2% !important',
        width: '55% !important',
        border: '1px solid #9FC5E9 !important',
        borderRadius:'8px !important',
        background:'#F4FAFF !important',
        marginBottom: '2% !important',
        [theme.breakpoints.down('lg')]:{
            marginTop: '0px !important',
            width:'100% !important'
        }
    },
    input: {
        height: '0.8vh !important',
        marginLeft: '10px !important',
        marginBottom: '5px !important',
        '&::placeholder': {
            fontSize: '85% !important',
            '@media(max-resolution:1dppx)':{
                marginTop:'1% !important',
                fontSize: '105% !important',
            }
        },
        
    },
    tableHeader: {
            display: 'flex !important',
            color: '#073762 !important',
            fontSize: '110% !important',
            fontWeight: '800 !important',
            marginRight: '10px !important',
            lineHeight: "24px",
            letterSpacing: "0.20000000298023224px",
            '@media screen and (max-resolution: 1dppx)':{
                fontSize:'130% !important'
            }
        },
    icon: {
        marginTop: '2px !important'
    },
    TableRow: {
        '& .MuiTableCell-root': {
            color: '#1A202C !important',
            fontSize: '98% !important',
        },
    },
    tableicon:{
     marginTop:'1% !important',
     cursor:'pointer !important',
      marginRight:'6px !important'
    },
    tableicon1:{
    ...Icon
      },
    tableicon2:{
        ...Icon,
        cursor:'pointer !important',
        marginTop:'5px !important'
          },
    nillimages:{
        fontSize:'90% !important',
        color:'red !important'
    },
    horiztalbtns1:{
        ...textTransform,
        fontWeight:'900 !important',
        fontSize:'85% !important',
        position:'relative !important' as 'relative'
    },
    horiztalbtns:{
        color:'#1A202C !important',
        border:'1px solid #3A52AA59 !important',
        position:'relative !important' as 'relative'
    },
    addres: {
        background:'white !important',
        fontSize: '80% !important',
        marginLeft:'11px !important',
        '@media(max-resolution:1dppx)':{
            fontSize:'95% !important'
        }
        
    },
    editsales:{
        ...textTransform,
        fontSize:'80% !important',
        fontWeight:'900 !important',
        marginBottom:'1% !important'
    },
   
    nilldata:{
        ...flex,
        marginLeft:'10px',
       '&>div':{
        marginTop:'1% !important',
        width:'100% !important',
        color:'red !important',
        fontWeight:'900 !important'
       }
    },
    gridcontainer:{
        width:'95% !important',
    },
    pagination: {
        marginTop:'1% !important',
        justifyContent: "center",
        display: 'flex'
    },
    propertyMaingridcontainer:{
        ...flex,
        flexDirection:'column !important' as 'column'
    },
    propertygridcontainer: {
        width: '95% !important',
        display:"flex",
        justifyContent:"space-between !important",
        alignItems:"center !important",
        borderBottom:'1px solid #9fc5e933 !important',
        [theme.breakpoints.down('lg')]: {
            width: '100% !important'
        }
    },
    exportbtn:{
        ...textTransform,
        fontSize:'80% !important',
        marginRight:'6px !important'
    },
 
    propertiesfunction: {
        display:"flex !important",
        justifyContent:"end !important",
        [theme.breakpoints.down('lg')]:{
            justifyContent:"start !important",
        },
        alignItems:"center !important",
        '@media(max-resolution:1dppx)':{
            width:'65% !important'
        },
        '&>button': {
            ...textTransform,
            fontSize: '1em',
            color: '#1A202C',
            border: '2px solid #073762',
            borderRadius: '12px',
            fontWeight: '900',
            width:"fit-content !important"
        },
        '&>button:nth-child(3)': {
            color:'white',
            padding:'5px',
            background: '#073762'
        }
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: " #073762 !important",
        borderRadius:"12px !important", 
      }
});