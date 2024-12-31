import { Theme } from "@mui/material";
import { ManRopeFont, flex, textTransform } from "../../Common/Styles";
const Button={
    ...textTransform,
    fontWeight:'900 !important',
    width:'100% !important',
    marginTop:'2% !important',
    fontSize:'85% !important',
}
export const Styles = (theme: Theme) => ({
gridbox: {
...flex
},
gridcontainer: {
width: '98% !important',
marginTop: '0.5% !important',
marginBottom: '0.5% !important',
[theme.breakpoints.down('lg')]: {
width: '100% !important'
}
},

tableHeader: {
display: 'flex !important',
'&>span': {
color: '#073762 !important',
fontSize: '98% !important',
fontWeight: '900 !important',
marginRight: '10px !important'
}
},
textFiled1: {
width: '60% !important',
[theme.breakpoints.down('lg')]: {
width: '70% !important'
}
},
addnewicon: {
...textTransform,
background: '#073762 !important',
fontSize: '95% !important',
color: 'white !important',
fontWeight: '800 !important',
float: 'right !important' as 'right',
marginRight: '10px !important',
marginTop: '1% !important'
},
filterbtn: {
...textTransform,
marginTop: '0.5% !important',
color: 'white !important',
fontSize: '96% !important',
marginLeft: '2% !important',
background: '#073762 !important'
},
formfiled: {
width: '70% !important',
marginTop: '1% !important',
marginBottom: '1% !important',
marginLeft: '1% !important',
background: '#F7F7FD !important'
},
btnssection: {
marginTop: '3% !important',
'&>button': {
...textTransform,
fontSize: '100%'
},
'&>button:nth-child(1)': {
color: '#1A202C !important'
},
'&>button:nth-child(2)': {
color: 'red'
}
},
boxconatiner: {
...flex,
marginTop: '1% !important',
flexDirection: 'column !important' as 'column'
},
messagebigtext: {
color: '#000929 !important',
fontWeight: '900 !important',
fontSize: '120% !important'
},
sendbox: {
width: '100% !important',
display: 'flex !important',
justifyContent: 'space-between !important'
},
messagesmalltext: {
fontSize: '100% !important',
color: '#737B8B !important'
},
sendicon: {
objectFit: 'cover !important' as 'cover'
},
send: {
...textTransform,
fontSize: '90% !important',
marginTop: '1.5% !important',
marginLeft: '3.3% !important',
background: '#073762 !important',
color: 'white !important',
float: 'left !important' as 'left',
[theme.breakpoints.down('lg')]: {
marginLeft: '0.001px !important',
width: '100% !important'
}
},
input1: {
'&::placeholder': {
fontSize: '90% !important'
}
},
messagecomment: {
fontSize: '110% !important',
marginBottom: '0.5% !important'
},
boxmessagebox: {
...flex,
flexDirection: 'column !important' as 'column'
},
formcontroler: {
width: '93% !important'
},
grid_container: {
width: '95% !important',
padding: '10px !important',
boxShadow: '2px 2px 20px 1px #00000014 !important'

},
messagetextFiled: {
width: '100% !important'
},
rejected1: {
fontSize: '98% !important',
color: '#FF6A6A !important',
fontWeight: '900 !important'
},
sold1: {
fontSize: '98% !important',
color: '#073762 !important',
fontWeight: '900 !important'
},
pending1: {
opacity: '50% !important',
fontSize: '98% !important',
color: '#073762 !important',
fontWeight: '900 !important'
},
input: {
height: '0.8vh !important',
marginLeft: '10px !important',
marginBottom: '5px !important',
'&::placeholder': {
fontSize: '85% !important',
}
},
textFiled: {
marginTop: '20px !important',
width: '55% !important',
marginBottom: '20px !important',
},
deleteicon: {
...textTransform,
color: '#FF1C1C !important',
fontSize: '100% !important',
marginTop: '35px !important',

},
customer_contact: {
color: '#737787 !important',
fontWeight: '900 !important',
marginLeft: '10px !important',
fontSize: '95% !important'
},
customername: {
fontWeight: '900 !important',
fontSize: '150% !important'
},
rejected: {
...textTransform,
fontSize: '86% !important',
color: 'white !important',
background: '#FF6A6A !important'
},
sold: {
...textTransform,
fontSize: '86% !important',
color: 'white !important',
background: '#073762 !important'
},
pending: {
...textTransform,
opacity: '50% !important',
fontSize: '86% !important',
color: 'white !important',
background: '#073762 !important'
},
icon: {
marginTop: '2px !important'
},
active: {
fontWeight: '900 !important',
color: 'green !important',
fontSize: '98% !important'
},
inactive: {
fontWeight: '900 !important',
color: 'red !important',
fontSize: '98% !important'
},
TableRow: {
'& .MuiTableCell-root': {
color: '#1A202C !important',
fontSize: '98% !important',
},
},
tablecell: {
display: 'flex !important',
'&>span': {
marginTop: '5px'
}
},
name: {
fontWeight: '900 !important',
fontSize: '98% !important',
marginLeft: '5px !important'
},
TableRow1: {
'& .MuiTableCell-root': {
fontWeight: '550 !important',
color: '#1A202C !important',
fontSize: '98% !important',
},
},
viewdetails: {
...textTransform,
fontSize: '95% !important',
color: 'black !important',
fontWeight: '900 !important'
},
tableimage: {
width: '50px !important',
marginRight: '15px !important',
borderRadius: '15px !important',
height: "40px !important"
},
noImage: {
color: "red",
width: "50px",
textAlign: "center" as "center",
},
pagination: {
justifyContent: "center",
display: 'flex'
},
addres: {
fontSize: '80% !important'
},
details: {
...textTransform,
color: 'white !important',
fontSize: '80% !important',
background: '#073762 !important'
},
customer_tableheader: {
background: '#F4FAFF !important'
},
customer_tableheader_txt: {
fontSize: '98% !important',
fontWeight: '900 !important'
},
buttons: {
display: 'flex !important',
justifyContent: 'space-between !important',
width: '30% !important',
marginTop: '3% !important'
},
btns1: {
...textTransform,
fontSize: '95% !important',
width: '90% !important',
color: '#737787 !important'
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
dividerbox: {
...flex,
},
filters: {
...textTransform,
color: '#1A202C !important',
fontSize: '96% !important',
border: '1px solid #073762 !important',
borderRadius: '12px !important',

},
propertybtns: {
float: 'right !important' as 'right',
'&>button': {
...textTransform,
fontSize: '95%',
color: '#1A202C',
border: '1px solid #073762',
borderRadius: '12px',
fontWeight: '900',
marginTop: '15%',
marginRight: '5px',
}
},
exports: {
...textTransform,
fontSize: '95% !important',
color: '#1A202C !important',
border: '1px solid #073762 !important',
borderRadius: '12px !important',
fontWeight: '900 !important',
marginTop: '15% !important',
marginRight: '5px !important',
},

propertygridcontainer: {
width: '95% !important',
[theme.breakpoints.down('lg')]: {
width: '100% !important'
}
},
propertyMaingridcontainer: {
...flex,
padding: '10px !important'
},
modalMainBox: {
position: 'absolute' as 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: "344px !important",
height: "511px !important",
bgcolor: 'background.paper',
borderRadius: "8px",
boxShadow: "0px 10px 10px 0px #100A553D",
p: 4,
backgroundColor: '#F4FAFF',
padding: "20px"
},
filterTxtBox: {
display: "flex",
justifyContent: "space-between",
borderBottom: "1px solid #DBDBDB",
padding: "10px"
},
filterTxt: {
fontWeight: 700,
fontSize: "18px"
},
heading: {
paddingTop: "20px"
},
headingTxt: {
fontWeight: 500,
fontSize: "16px",
lineHeight: "24px",
letterSpacing: "0.2px",
color: "#718096"
},
selectMainBox: {
minWidth: 120,
marginTop: "15px",
backgroundColor: "white"
},
textField: {
width: "345px"
},
modalBtnBox: { paddingTop: "20px" },
modalBtn: {
color: "#073762 !important",
borderColor: "#073762 !important",
textTransform: "none !important" as "none"
},
modalBtn2: {
marginLeft: "20px !important",
backgroundColor: "#073762 !important",
textTransform: "none !important" as "none"
},
inputLabel:{
fontWeight: 500,
fontSize: "16px",
lineHeight: "24px",
color: "#000929"
},
mainModalBox:{
position: 'absolute' as 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%) !important',
width: "423px !important",
height: "945px !important",
backgroundColor: '#F4FAFF !important',
boxShadow: "0px 10px 10px 0px #100A553D !important",
borderRadius: "8px !important",
padding: "40px !important",
},
modalFilterTxt:{
fontWeight: "700 !important",
fontSize: "24px",
lineHeight: "36px",
letterSpacing: "-1%",
color: "#000929"
},
modalCateTxt:{
mt: 2,
fontWeight: "700 !important",
fontSize: "16px",
lineHeight: "24px",
color: "#000929",
paddingTop: "20px"
},
cataBtnBox:{
borderBottom: "1px solid lightGray",
paddingBottom: "20px"
},
cataBtnBoxSec:{
paddingTop: "10px",
display: "flex",
justifyContent: "space-between"
},
cataBtn:{
borderRadius: "8px !important",
border: "1px solid gray !important",
padding: "10px 20px !important",
gap: "10px",
textTransform: "none !important" as "none"
},
priceRangeBox:{
    marginTop:'5% !important'
},

typebtns:{
    ...Button,
    color:'#000929 !important',
    border:'1px solid #E5E7EB !important',
},
typebtns1:{
    ...Button,
   color:'white !important',
   background:'#073762 !important'
},
divider:{
    border:'1px solid #F0EFFB !important',
    marginTop:'12px !important'
},
priceRangeTxt:{
fontWeight: "700 !important",
fontSize: "105% !important",
color: "#000929",
marginTop:'5% !important',
},
inputtextFiled:{
    width:'100% !important'
},
inputtext:{
    height:'2vh !important',
  fontSize:'80% !important',
},
inputTextFiled_text:{
    marginTop:'2% !important'
},
status:{
    color:'#000929 !important',
    fontSize:'93% !important',
    fontWeight:'900 !important'
},
notchedOutline1:{
    borderRadius:'5px !important',
    opacity:'50% !important',
    border:'0.5px solid #636363 !important'
},
dateTextFiled:{
    marginTop:'5% !important',
    background:'#FFFFFF !important'
},
input12:{
    fontSize:'86% !important'
},
priceRangeTxt1:{
marginTop:'2.5% !important',
marginBottom:'1% !important',
fontSize: "93% !important",
color: "#000929"
},
notchedOutline: {
    borderRadius:'8px !important',
    border:'1px solid #000000 !important'
  },

rangeImgBox:{ 
    display:'grid !important',
    gridTemplateColumns:'48% 48% !important',
    gridGap:'1% !important',
    marginTop:'2% !important'
},
rangeImg:{ width: "254px", height: "56px" },
featureMainBox:{
marginTop:'5% !important',
marginBottom:'5% !important',
},
featureTxt:{
fontWeight: "700 !important",
fontSize: "16px !important",
lineHeight: "24px",
color: "#000929"
},
filtertitle:{
    fontSize:'140% !important',
    fontWeight:'900 !important',
    color:'#000929 !important',
    marginBottom:'3.5% !important'
},
dilogcontent:{
    background:'#F4FAFF !important'
},
left_text_Filed_container:{
    marginLeft:'1.5% !important'
},
bedroomMainBox:{
display: "flex",
justifyContent: "space-between",
paddingTop: "20px"
},
feature_text:{
    fontSize:'93% !important'
},
btnBox:{
display: "flex",
width:'60% !important',
marginLeft:'40% !important',
justifyContent: "space-between",
float:'right !important' as 'right'
},
minusIcon:{
backgroundColor: "#073762",
borderRadius: "20px",
width: "25px",
height: "25px",
color: "white"
},
value:{
fontWeight: "700 !important",
fontSize: "16px",
lineHeight: "24px",
color: "#000929"
},
calander:{
width: "434px",
borderRadius: "5px",
backgroundColor: "white"
},
checkBox:{
'&, &.Mui-checked': {
color: '#073762 !important',
},
},

resetBtn: {
...textTransform,
fontSize:'100% !important',
color: "#073762 !important",
borderColor: "lightgray !important",
width:'100% !important'
},
applyBtnBox:{
    display:'grid !important',
    gridTemplateColumns:'50% 50% !important',
    gridGap:'1% !important'
},
applyBtn: {
...textTransform,
width:'100% !important',
marginLeft:'2% !important',
fontSize:'100% !important',
backgroundColor: "#073762 !important",
}
})