import React, { Fragment,useEffect, useState } from 'react';
import { withStyles } from '@mui/styles';
import { Styles } from '../Table/Filter/MUIStyles';
import { Box, Button, Chip, Grid, Pagination,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { withRouter } from '../../../Utils/withRouter';
import { AppDispatch } from '../../Redux/store/Store';
import { Exports_data, Property } from '../../Redux/Reducers/AdminReducer';
import Filter from './Filter/Filter';
import moment from 'moment';
import Filters from '../Filters/Filters';
import { toast } from 'react-toastify';
import { Search } from '@mui/icons-material';

type IProps = {
  classes: {
    [type: string]: string;
  };
  navigate: Function;
  dispatch: AppDispatch;
  selector: {
    AdminReducer: {
      AdminProperties: {
        data: {
          totalPages: number | undefined;
          data: {
            status: string;
            price: string ;
            updatedAt: number;
            address: string;
            city:string;
            apartmentName: string;
            images: string | undefined[];
            id: number,
            userName: string,
          }[]
        }
      }
    }
  };
};
interface Property {
  [key: string]: string | number;
}

const TableHeader = [
  { id: 2, txt: 'Property', field: 'propertyName' },
  { id: 3, txt: 'Date', field: 'date' },
  { id: 4, txt: 'PropertyID', field: 'PropertyID' },
  { id: 5, txt: 'Price', field: 'Price' },
  { id: 6, txt: 'Status', field: 'status' },
  { id: 7, txt: 'Actions' },
];

function PropertyTable({ classes, navigate, dispatch, selector }: IProps) {
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [orderBy , setOrderBy] = useState("asc")
  const [bathroom, setBathroom] = useState(0)
  const [bedroom, setBedroom] = useState(0)
  const[Category,setCategory]=useState<string | null>(null)
  const[status,setStatus]=useState<string>('')
  const[minPrice,setMinPrice]=useState<string | null>(null)
  const[maxPrice,setMaxPrice]=useState<string | null>(null)
  const[open1,setOpen1]=useState<boolean>(false)
  const properties = selector.AdminReducer.AdminProperties
  const[excel,setExcel]=useState<boolean>(false)
const[download,setDownload]=useState<string>('')
  useEffect(() => {
   async function getData(){
    try{
    const data = { 
      page: page,
      apartmentName:searchQuery,
      orderBy:orderBy,
      sortBy:"",
      bedrooms:bedroom,
      bathrooms:bathroom,
      status:status,
      Date:'',
      priceLessThan:minPrice,
      priceGreaterThan:maxPrice,
      category:Category
    };
    await dispatch(Property({ data: data }));
  }  catch(error){
    toast.error("error")
  }
  }
  getData()
  }, [dispatch,status,Category,bedroom,bathroom,page,maxPrice,minPrice,searchQuery]);



  const handleDetails = (data: { id: number }) => {
    localStorage.setItem('propertyId',data.id.toString())
    navigate(`/admin/properties/${data.id}`,{state:{sales:true}});
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };



const pagination = (e: React.ChangeEvent<unknown>, page: number) => {
    setPage(page)
  };
  
  const handleClose = () => {
    setOpen1(false)
  }
  const handleOpen = async() => {
    const data={}
  const response=await dispatch(Exports_data({data:data}))
  const fulfilled=response.payload 
   if(fulfilled.status===true){
    setExcel(true)
    setDownload(`${fulfilled.data}/photo`)
   }
  }
  const handleGetData=(data:{data:{page:number,status:string,category:string | null,bathrooms:number,priceLessThan:string,bedrooms:number,priceGreaterThan:string}})=>{
    setPage(data?.data?.page)
    setMinPrice(data?.data?.priceLessThan)
    setMaxPrice(data?.data?.priceGreaterThan)
    setBedroom(data?.data?.bedrooms)
    setBathroom(data?.data?.bathrooms)
    setStatus(data?.data?.status)
    setCategory(data?.data?.category)
  }
  const handleCancel=()=>{
    setExcel(false)
  }
  const hadleOpenFilter=()=>{
    setOpen1(true)
  }
  const token=localStorage.getItem('token')
  return (
    <Fragment>
      <Filters open1={open1} handleGetData={handleGetData} admin={true} handleClose={handleClose}/>
      <Box className={classes.propertyMaingridcontainer}>
        <Grid container className={classes.propertygridcontainer}>
          <Grid item xs={6} lg={8} md={6}>
            <TextField
              
              placeholder="Search with property"
              className={classes.textFiled}
              onChange={handleSearch}
              InputProps={{
                classes: { input: classes.input },
                startAdornment: <Search/>,
              }}
            />
          </Grid>
          <Grid xs={6} md={6} lg={4}>
          <Filter data={properties?.data?.data} handleOpen1={handleOpen} hadleOpenFilter={hadleOpenFilter}/>
          </Grid>
        </Grid>
      <TableContainer className={classes.propertygridcontainer}>
        <Table>
          <TableHead>
            <TableRow>
              {TableHeader.map((data) => (
                <TableCell key={data.id} onClick={() => handleSort(data.field!)}>
                  <Box className={classes.tableHeader}>
                    {data.txt}
                   
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {properties && properties?.data?.data?.length > 0 ? (
              properties?.data?.data?.map((data) => (
                <TableRow key={data?.id} className={classes.TableRow}>
                  
                  <TableCell  className={classes.tabelcell2}>
                    {data?.images && data.images.length > 0 ? (
                      <Box src={`${data?.images?.[0]}/${token}`} component={'img'} className={classes.tableimage} />
                    ) : (          
                      <></>
                    )}
                    <Box>
                    
                        <Chip label={data.apartmentName} className={classes.chip}/>
                      <Box className={classes.addres}>{data.city}</Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box className={classes.tabledate}>{moment(data?.updatedAt,'YYYY-MM-DD HH:mm:ss.SSS Z').format('ll')}</Box>
                  </TableCell>
                  <TableCell>
                    <Typography className={classes.propertyId}>
                    {data?.id}
                    </Typography>
                    </TableCell>
                  <TableCell  className={data.status === "Rented" ? classes.rejected1 : data.status === "Sold" ? classes.sold1 : classes.pending1}>
                
                    </TableCell>
                  <TableCell>
                    <Button
                    className={data.status === "Rented" ? classes.rejected : data.status === "Sold" ? classes.sold : classes.pending}
                    >{data?.status}</Button>
                  </TableCell>
                  <TableCell>
                    <Button className={classes.details} onClick={() => handleDetails(data)}>
                      details
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={TableHeader.length}>
                  <Typography variant="body1" align="center" className={classes.userNill}>
                    No Users Found.
                  </Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      
      </TableContainer>
      <Pagination
            className={classes.pagination}
            count={properties?.data?.totalPages}
            page={page}
            onChange={pagination}
            color='primary'
          />
      </Box>
    </Fragment>
  );
}

export default withRouter(withStyles(Styles)(PropertyTable));