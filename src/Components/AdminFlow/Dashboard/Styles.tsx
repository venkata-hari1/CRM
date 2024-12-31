import { Theme } from "@mui/material";
import { flex, textTransform } from "../../Common/Styles";

export const Styles = (theme: Theme) => ({
    mainboxconatiner: {
        ...flex,
    },
    userImg:{
        width:'60px',
        height:'60px',
        borderRadius:'50%',
        marginRight:'5px !important'
    },
    boximage:{
        width:'55px',
        height:'55px',
        borderRadius:'50%',
        marginRight:'1%'
    },
    revenuew:{
        width:'100%',
        display:'flex !important',
        flexDirection:'column !important' as 'column',
        '&>div:nth-child(1)':{
            fontWeight:'900',
            fontSize:'90%'
        },
        '&>div:nth-child(2)':{
            fontWeight:'900',
            marginTop:'1px',
            fontSize:'110%'
        }
    },
    primary_text1: {
        color: '#737B8B !important',
        fontSize: '95% !important'
    },
    inputext:{
        fontSize:'90% !important'
    },
    FormControl:{
        marginTop:'0px !important',
        minWidth:'150px !important'
    },
    rentstatistics:{
        color:'#000000 !important',
        fontWeight:'900 !important',
        fontSize:'120% !important'
        
    },
    totalrent:{
        fontSize:'100% !important',
        color:'grey !important'
    },
    download:{
        ...textTransform,
        marginTop:'10% !important',
        fontSize:'95% !important',
        fontWeight:'900 !important',
        color:'#073762 !important',
        border:'1px solid #073762 !important',
        borderRadius:'8px !important',
        [theme.breakpoints.down('lg')]:{
          
        }
    },
    totalrent1:{
        fontSize:'120% !important',
        color:'black !important',
        fontWeight:'900 !important'

    },
    homeicon:{
        ...flex,
        padding:'5px !important',
        width:'25px !important',
        height:'25px !important',
        borderRadius:'50% !important',
        background:'linear-gradient(42.36deg, #37D159 14.58%, #41FE6A 114.37%) !important'

    },
    homeicon1:{
        ...flex,
        padding:'5px !important',
        width:'25px !important',
        height:'25px !important',
        borderRadius:'50% !important',
        background:'#073762 !important'

    },
    img:{
        objectFit:'cover !important' as 'cover',
        marginTop:'2% !important',
        width:'100% !important',
        height:'24vh !important',
        borderRadius:'13px !important'
    },
    svg1: {
        ...flex,
        width: '40px !important',
        height: '40px !important',
        borderRadius: '50% !important',
        background: '#073762 !important'
    },
    svg2: {
        ...flex,
        width: '40px !important',
        height: '40px !important',
        borderRadius: '50% !important',
        background: '#32D16D !important'
    },
    svg3: {
        ...flex,
        width: '40px !important',
        height: '40px !important',
        borderRadius: '50% !important',
        background: '#32D16D !important'
    },
    primary_text2: {
        fontWeight: '900 !important',
        marginTop: '1px !important',
        fontSize: '110% !important'
    },
    mainboxconatiner1: {
        ...flex,
        background: 'white !important'
    },
    gridContainer: {
        width: '95% !important',
        [theme.breakpoints.down('lg')]: {
            width: '99% !important'
        }
    },
    gridContainer1: {
        background: 'white !important',
        marginTop: '3% !important',
        padding: '1% !important',
        border: '1px solid #9FC5E9 !important',
        borderRadius: '16px !important'
    },
    addnewcustomer: {
        ...textTransform,
        marginTop: '2% !important',
        borderRadius: '20px !important',
        background: '#073762 !important',
        color: 'white !important',
        padding: '4% !important',
        fontSize: '90% !important'
    },
    prograssbar: {
        backgroundColor: '#9FC5E9 !important',
        height: '2.8vh !important',
        borderRadius: '20px !important',
        width: '90% !important',
        marginTop: '2% !important',
        marginLeft: '5% !important',
        '& .MuiLinearProgress-bar': {
            backgroundColor: '#073762',
        }
    },
    horizantalmenu: {
        cursor: 'pointer !important',
        color: 'black !important'
    },
    litsitem1: {
        background: 'red !important',

    },
    time: {
        marginLeft: '50px !important'
    },
    flexbox: {
        display: 'flex !important',
        justifyContent: 'space-between !important'
    },
    addnewcustomer1: {
        ...textTransform,
        width: '100% !important',
        marginTop: '2% !important',
        borderRadius: '20px !important',
        background: '#073762 !important',
        color: 'white !important',
        padding: '4% !important',
        fontSize: '90% !important'
    },
    divider: {
        width: '100% !important',
        border: '0.5px solid #9FC5E9 !important'
    },
    customers: {
        background: 'white !important',
        border: '1px solid #9FC5E9 !important',
        borderRadius: '16px !important',
        padding: '10px !important',
        marginBottom: '1% !important'
    },
    listheader: {
        fontSize: '120% !important',
        fontWeight: '900 !important'
    },
    listheaderbtn: {
        ...textTransform,
        fontSize: '110% !important',
        fontWeight: '900 !important',
        color: '#073762 !important'
    },
    arrowright: {
        color: '#000929 !important',
        fontSize: '100% !important',
    },
    stars: {
        fontSize: '120% !important',
        marginTop: '2% !important',
        marginRight: '1.5% !important'
    },
    listitems: {
        display: 'flex !important',
        justifyContent: 'space-between !important'
    },
    arrowright1: {
        color: '#000929 !important',
        fontSize: '100% !important',
    },
    avatar: {
        marginRight: '3% !important'
    },
    avatar1: {
        marginRight: '10px !important'
    },
    avatar12: {
        width:'70px !important',
        height:'70px !important',
        borderRadius:'50% !important',
        marginRight: '10px !important'
    },
    primary_text: {
        width: '100% !important',
        '&>div:nth-child(1)': {
            fontSize: '95% !important'
        },
    },
    primary_time: {
        fontSize: '90% !important',
        color: 'grey !important'
    },
    listItemEarningBoxs: {
        background: 'white !important',
        border: '1px solid #9FC5E9 !important',
        borderRadius: '16px !important',
    },
    primarytext: {
        lineHeight:'25px !important',
        color: '#737B8B !important',
        fontSize: '95% !important'
    },
    primarytext1: {
        color: '#737B8B !important',
        fontSize: '90% !important',
    },
    primarytext2: {
        fontSize: '100% !important',
        fontWeight: '900 !important',
        marginBottom: '1% !important',
        color: '#000929 !important'
    },
    secondarytext: {
        fontWeight: '900 !important',
        color: '#202020 !important',
        fontSize: '180% !important',
        marginTop: '4% !important'
    },
    TotalRevenue_text: {
        display: 'flex !important',
        flexWrap: 'wrap !important' as 'wrap',
        [theme.breakpoints.down('lg')]: {
            justifyContent: 'space-around !important'
        },
        '&>div:nth-child(1)': {
            '&>div:nth-child(1)': {
                color: '#000000',
                fontSize: '110%',
                fontWeight: '900'
            },
            '&>div:nth-child(2)': {
                color: '#000000',
                marginTop: '1%',
                fontSize: '130%',
                fontWeight: '900'
            }
        },
        '&>div:nth-child(2)': {
            marginLeft: '10%',
            display: 'flex',
            marginBottom:'5%',
            '&>div:nth-child(2)': {
                '&>div:nth-child(1)': {
                    color: '#32D16D',
                    fontSize: '100%'
                },
                '&>div:nth-child(2)': {
                    fontSize: '110%',
                    color: '#737B8B',
                    marginTop: '1%'
                }
            }
        }
    },
    arrowcircle_up_icon: {
        color: '#32D16D !important',
        marginTop: '6% !important',
        marginRight: '3px !important'
    },
    TotalRevenue_btn: {
        ...textTransform,
        color: '#737B8B !important',
        fontSize: '100% !important'
    },
    revenuecontainer:{
        display:'grid !important',
        gridTemplateColumns:'100% !important',
        [theme.breakpoints.down('lg')]:{
            gridGap:'2% !important',
            gridTemplateColumns:'35% 60% !important'
        }
    },
    boxbuttons: {
        marginTop:'2% !important',
        borderBottom: '1px solid #9FC5E9 !important',
        [theme.breakpoints.down('lg')]:{
            marginTop:'0px !important',
        }
    },

    TotalRevenue_btn1: {
        ...textTransform,
        borderBottom: '2px solid #073762 !important',
        color: '#073762 !important',
        fontWeight: '900 !important',
        fontSize: '100% !important'
    },
    overview:{
        fontWeight:'900 !important',
        fontSize:'130% !important'
    }
})