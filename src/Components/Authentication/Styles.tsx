import { Theme } from "@mui/material";
import { flex, textTransform } from "../Common/Styles";
export const Styles = (theme: Theme) => ({
    register_flex: {
        ...flex,      
        overflowX:'hidden !important' as 'hidden'
    },
    validate: {
        fontSize: '90% !important',
        color: 'red !important',
        fontWeight: '900 !important',
        marginBottom: '1% !important'
    },
    autheticationimage:{
        ...flex,
        // height:'100vh'
    },
    alertmessage: {
        fontSize: '95% !important',
        fontWeight: '900 !important',
        textTransform:"capitalize" as "capitalize",
    },
    notchedOutline:{
        borderRadius:'8px !important',
        border:'1.5px solid #9FC5E9 !important'
    },
    input: {
        height: '2.3vh !important',
        letterSpacing:"1.5px !important",
        color:"#000929 !important",
        fontWeight:"500 !important",
        '&::placeholder': {
            fontSize: '86.00%',
            letterSpacing:"1px !important",
        },
    },
    selectorcolor: {
        ...flex,
        background: '#F4FAFF !important',
        outline: 'none !important',
        border: 'none !important',
        width: 'auto !important',
        height: 'auto !important'
    },
    gridcontainer: {
        width: '100% !important',
        height:'100vh',
        overflowY:'hidden !important' as 'hidden',
        [theme.breakpoints.down('lg')]: {
            width: '93% !important'
        }
    },
   
    register_conatiner: {
        ...flex,
        height:'90vh',
        width: '100% !important',
        flexDirection: 'column !important' as 'column'
    },
    otpverfication_headertext: {
        fontWeight: '600',
        fontSize: '112.50%',
        textTransform:"capitalize" as "capitalize",
        marginBottom:"10px"
    },
    otpverfication_otpcontainer: {
        ...flex,
        flexDirection: 'column !important' as 'column'
    },
    otpverfication_closeicon: {
        float: 'right !important' as 'right',
        marginLeft: 'auto !important'
    },
    otpverfication_middletext: {
        textAlign: 'center' as 'center',
        color: '#4E546B !important'
    },
    otpverfication_middletext1: {
        marginTop: '3% !important',
        textAlign: 'center' as 'center',
        color: '#000929',
        fontWeight: '700',
        display:"flex",
        alignItems:"baseline !important",
        justifyContent:"center",
        '&>span': {
            color: '#1859F5',
            marginLeft: '1px'
        }
    },
    otpverfication_middletext2: {
        textAlign: 'center' as 'center',
        marginTop: '3.5%',
        fontWeight: '700',
        fontSize: '100.00%',
        color: '#000929'
    },
    otpverfication_inputboxs: {
        width: '90%',
        marginTop: '2%',
        marginLeft: '2% !important',
        [theme.breakpoints.down('lg')]: {
            width: '95%',
            marginLeft: '0.001px !important'
        }
    },
    otpverfication_verfiybtn: {
        ...textTransform,
        color: 'white !important',
        fontSize: '700 !important',
        width: '100% !important',
        background: '#073762 !important',
        marginBottom: '4.5% !important',
        marginTop: '3% !important'
    },
    otpverfication_resendotp: {
        width: '100% !important',
        marginTop: '2.5% !important',
        marginBottom: '2.5% !important',
        fontSize: '16px !important',
        opacity: '0.8 !important',
        '&>span': {
            color: '#1859F5',
            marginLeft: '5px'
        }
    },
    register_leftsection_text1: {
        width: '60% !important',
        marginLeft: '4.5% !important',
        marginTop: '5% !important',
        marginBottom: '3% !important',
        [theme.breakpoints.down('lg')]: {
            width: '100% !important'
        },
        '&>div:nth-child(1)':{
            fontSize:'230.00% !important',
            color:'#000929',
            fontWeight:'900',
            [theme.breakpoints.down('lg')]:{
                fontSize:'200% !important'
            }
        },
        '&>div:nth-child(2)': {
            fontSize: '110.00%',
            color: '#4E546B',
            fontWeight: '500',
            marginTop: '1%',
        }
    },
    register_leftsection_text2: {
        width: '60% !important',
        marginLeft: '4.5% !important',
        marginTop: '10% !important',
        marginBottom: '3% !important',
        [theme.breakpoints.down('lg')]: {
            width: '100% !important'
        },
        '&>div:nth-child(1)': {
            fontSize: '32px',
            color: '#000929',
            fontWeight: '900'
        },
        '&>div:nth-child(2)': {
            fontSize: '100.00%',
            color: '#4E546B',
            fontWeight: '500',
            marginTop: '1%',
        }
    },
    register_signup: {
        ...textTransform,
        borderRadius:"8px !important",
        marginTop: '5% !important',
        background: '#073762 !important',
        fontSize: '110.00% !important',
        width: '100% !important',
        color: 'white !important',
        fontWeight: '750 !important'
    },
    register_signup12: {
        ...textTransform,
        borderRadius:"8px !important",
        marginTop: '5% !important',
        background: 'grey !important',
        fontSize: '110.00% !important',
        width: '100% !important',
        color: 'white !important',
        fontWeight: '750 !important'
    },
    register_login: {
        ...textTransform,
        fontSize: '110.00% !important',
        marginTop: '6% !important',
        marginBottom: '2% !important',
        background: '#073762 !important',
        width: '100% !important',
        color: 'white !important',
        fontWeight: '750 !important'
    },
    register_login1: {
        ...textTransform,
        marginTop: '10% !important',
        fontSize: '110.00% !important',
        marginBottom: '2% !important',
        background: '#073762 !important',
        width: '100% !important',
        color: 'white !important',
        fontWeight: '750 !important'
    },
    register_signup1: {
        borderRadius:"8px !important",
        marginTop: '5% !important',
        color: '#6C727F !important',
        fontSize: '95.00% !important',
        fontWeight: '500 !important',
        textAlign: 'center !important' as 'center',
        '&>span': {
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '700',
            color: '#000929',
            textDecoration: 'underline'
        }
    },
    register_logintext: {
        marginTop: '4% !important',
        color: '#6C727F !important',
        fontSize: '14px !important',
        fontWeight: '500 !important',
        '&>span': {
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '700',
            color: '#000929',
            textDecoration: 'underline'
        }
    },
    register_muiicon: {
        cursor: 'pointer !important',
        color: '#9FC5E9 !important'
    },
    regsiter_passwordlength: {
        color: '#6C727F',
        fontSize: '80.00% !important',
        marginTop: '1% !important',
        marginBottom: '1.5% !important'
    },
    register_leftsection_formcontroler: {
        width: '55% !important',
        [theme.breakpoints.down('lg')]: {
            width: '100% !important'
        },
        '&>div': {
            '&>div': {
                color: '#000929',
                fontWeight: '700',
                fontSize: '100.00%',
                marginBottom: '1%'
            }
        }
    },
    textfileds: {
        background: '#F4FAFF !important'
    },
    register_imagesection: {
        display: 'flex !important',
        position: 'relative !important' as 'relative'
    },
    register_image1: {
      height:'80%',
      width:'80%'
    },
    register_image2: {
        float: 'right !important' as 'right',
        marginLeft: '20% !important',
        width: '100% !important'
    },
    register_image3: {
        width: '100% !important',
        float: 'right !important' as 'right',
        marginLeft: '55% !important',
    },
    register_childimagesection: {
        display: 'flex',
        flexDirection: 'column-reverse !important' as 'column',
    },
    register_text1: {
        fontSize: '80.00% !important',
        color: '#6C727F',
        lineHeight: '25px !important',
        '&>span': {
            fontSize: '100.00% !important',
            color: '#7065F0'
        },
        [theme.breakpoints.down('sm')]: {
           marginBottom: '-14% !important',
        },
    },
    login_forgetpassword: {
        display: 'flex !important',
        justifyContent: 'space-between !important',
        '&>div:nth-child(2)': {
            color: 'blue',
            fontSize: '14px',
            fontWeight: '700',
            cursor: 'pointer'
        }
    },
    register_text: {
        fontSize: '12px !important',
        color: '#6C727F',
        lineHeight: '25px !important',
    },
    register_link: {
        fontWeight: '800',
        color: '#000929 !important',
        fontSize: '93.00% !important',
        marginLeft: '4px !important',
        marginBottom: '25px !important'
    },
    register_logo: {
        width: '150px !important'
    },
    logoBox:{
        [theme.breakpoints.down('lg')]: {
            textAlign:"center",
        }
    },
    register_headerlogo: {
        width:'100px',
        marginTop: '1.5% !important',
        marginBottom: '1.5% !important',
        marginLeft: '10% !important',
        [theme.breakpoints.down('lg')]: {
            marginLeft: '0.01px !important',
            textAlign:"center",
        }
    },
    modeStyle: {
        width: '630px',
        height: '497px',
        overflow: 'hidden',
        padding: "20px"
    },
    registerLabel:{
 marginTop:"6px !important",
 color:"#000929 !important",
 fontWeight:"500 !important",
    },
    counter:{color:"green",fontWeight:"bold"},
    inputFields:{
        borderRadius:"8px !important",
        border:"1px solid #9FC5E9 !important",
        backgroundColor:"#F4FAFF !important",
        marginTop:"4px !important",
        "& :hover":{
            borderColor:"#9FC5E9 !important",
        }
    }
}) 