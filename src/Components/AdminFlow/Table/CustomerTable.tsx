import React, { Fragment, useEffect, useState } from 'react';
import { withStyles } from '@mui/styles';
import { Styles } from './MUIStyles';
import Avatar from '../../Common/assets/images/avatar.jpg';
import { withRouter } from '../../../Utils/withRouter';
import { Box, Button, Grid, Menu, MenuItem, Modal, Pagination, Select, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Theme, Typography, useMediaQuery } from '@mui/material';
import { ReactComponent as SearchIcon } from '../../Common/assets/images/search.svg';
import { ReactComponent as CustomerFilter } from '../../Common/assets/images/customerfilter.svg'
import { AppDispatch } from '../../Redux/store/Store';
import { Customer } from '../../Redux/Reducers/AdminReducer';
type IProps = {
    classes: {
        [type: string]: string
    },
    navigate: Function;
    dispatch: AppDispatch;
    selector: {
        AdminReducer: {
            AdminCustomer: {
                data: {
                    totalPages: number | undefined;
                    data: {
                        email: string;
                        photo: string;
                        name: string;
                        activity: string;
                        mobile: string;
                        status: string;
                        active: boolean;
                        verifyStatus: boolean;
                        price: number;
                        updatedAt: number;
                        address: string;
                        apartmentName: string;
                        images: string | undefined[];
                        id: number,
                        userName: string,
                    }[]
                }
            }
        }
    };
}

const TableHeader = [
    { id: 1, txt: 'Customer Name' },
    { id: 2, txt: 'PhoneNumber' },
    { id: 3, txt: 'Email' },
    { id: 4, txt: 'Status' },
    { id: 5, txt: 'Action' }
]

function CustomerTable({ classes, navigate, dispatch, selector }: IProps) {
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [status, setStatus] = useState<string | boolean>('')
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const customer = selector.AdminReducer.AdminCustomer;
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClose1 = (data: string) => {
        const status = data === "All" ? "" : data === "Active" ? true : false
        setStatus(status)
        setAnchorEl(null);
    }
    useEffect(() => {
        async function getData() {
            const data = { page: page, name: searchQuery, status: status };
            await dispatch(Customer({ data: data }));
        }
        getData()
    }, [page, searchQuery, status]);



    const handleView = (data: { id: number, name: string, email: string, mobile: string, photo: string }) => {
        localStorage.setItem('id', JSON.stringify(data.id))
        const id = JSON.parse(localStorage.getItem('id') || '')
        navigate(`/admin/customer/${id}`, { state: { name: data.name, email: data.email, mobile: data.mobile, photo: data.photo } })
    }


    const pagination = (e: React.ChangeEvent<unknown>, page: number) => {
        localStorage.setItem("page", JSON.stringify(page))
        setPage(page);
    };
    const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
    const token = localStorage.getItem('token')
    return (

        <Box className={classes.gridbox}>
            <Grid container spacing={2} className={classes.gridcontainer}>
                <Grid item xs={12} md={12} lg={7}>
                    <Box className={classes.textFiled1}>
                        <TextField
                            fullWidth
                            placeholder='Search for Customers'
                            InputProps={{
                                classes: {
                                    input: classes.input,
                                    notchedOutline: classes.notchedOutline
                                },
                                startAdornment: (
                                    <SearchIcon />
                                ),

                            }}
                            value={searchQuery}
                            onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setSearchQuery(e.target.value)}

                        />
                        <Button
                            sx={{ width: '100%' }}
                            className={classes.filtersbtn}
                            size='small'
                            startIcon={<CustomerFilter />}
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >{isDesktop ? "" : "Filters"}</Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem value="All" onClick={() => handleClose1('All')}>All</MenuItem>
                            <MenuItem value="Active" onClick={() => handleClose1('Active')}>Active</MenuItem>
                            <MenuItem value="InActive" onClick={() => handleClose1('InActive')}>InActive</MenuItem>
                        </Menu>
                    </Box>
                </Grid>
                <Grid item lg={5} sx={{ display: { md: 'none', xs: 'none', lg: 'grid' } }}>
                    {/* <Button
                            startIcon={<AddIcon />}
                            className={classes.addnewicon}
                            onClick={() => navigate('/admin/addnewuser')}
                        >
                            Add New Customer
                        </Button> */}
                </Grid>
            </Grid>
            <TableContainer className={classes.gridcontainer}>
                <Table>
                    <TableHead className={classes.customer_tableheader}>
                        <TableRow>
                            {TableHeader.map((data) =>
                                <TableCell key={data.id} className={classes.customer_tableheader_txt}>{data.txt}</TableCell>
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customer?.data?.data?.length > 0 ? (
                            customer?.data?.data?.map((data) =>
                                <TableRow key={data.id} className={classes.TableRow1}>
                                    <TableCell>
                                        <Box className={classes.tablecell}>
                                            <Box src={data?.photo === null ? Avatar : `${data?.photo}/${token}`} component={'img'} />
                                            <Typography component={'span'} className={classes.name}>{data.name.length > 12 ? `${data.name.slice(0, 12) + "..."}` : data.name}</Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>{data.mobile}</TableCell>
                                    <TableCell>
                                        {data?.email ? (
                                            <Typography className={classes.active}>{data?.email?.length > 20 ? `${data?.email?.slice(0, 20) + "..."}` : data?.email}</Typography>
                                        ) : (
                                            <Typography className={classes.inactive}>NA</Typography>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {data.verifyStatus === false ? <Typography className={classes.inactive}>InActive</Typography> :
                                            <Typography className={classes.active}>Active</Typography>}
                                    </TableCell>
                                    <TableCell><Button className={classes.viewdetails} onClick={() => handleView(data)}>View</Button></TableCell>
                                </TableRow>
                            )
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} align="center" sx={{ color: "red" }}>No users found.</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

            </TableContainer>
            <Box className={classes.gridcontainer} sx={{ marginTop: '1%' }}>
                <Pagination
                    className={classes.pagination}
                    count={customer?.data?.totalPages}
                    page={page}
                    onChange={pagination}
                    color='primary'
                />
            </Box>
        </Box>
    )
}

export default withRouter(withStyles(Styles)(CustomerTable));