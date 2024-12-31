import { Avatar, Box, Button, Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { withStyles } from '@mui/styles'
import { Styles } from './Styles';
import { ReactComponent as Avatar1 } from '../../Common/assets/images/avatar1.svg';
import { CustomerReviews, Customers, Products } from './Drawer';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Star } from '@mui/icons-material';
import { AppDispatch } from '../../Redux/store/Store';
import { withRouter } from '../../../Utils/withRouter';
import {Reviews} from '../../Redux/Reducers/Reviews';
import { formatTimeDifference } from '../../../Utils/Validate';
type IProps={
    classes:{
        [type:string]:string
    },
    dispatch:AppDispatch,
    selector: {
        ReviewsReducer: {
            UserReviews: {
                data:{
                    totalElements:number,
                    data:{
                     id:number,
                     review:string,
                     rating:number,
                     name:string,
                     image:string,
                     createdDate:string
                    }[]
                }
            }
        }
    };
    navigate:Function
}
function Reviews1({classes,dispatch,selector,navigate}:IProps) {
  useEffect(() => {
    const fetchData = async () => {
      const data = {
        page: 1
      }
     await dispatch(Reviews({ data: data }));
    };

    fetchData();
  }, [dispatch]);
    const reviewsData = selector.ReviewsReducer.UserReviews?.data
    const token=localStorage.getItem('token')
    const handleReview=()=>{
      localStorage.setItem('AdminSellerIds',"8")
      navigate('/admin/reviews')
    }
  return (
    <Box className={classes.customers}>
        <List>
          <ListItem>
            <ListItemText primary={<Typography className={classes.listheader}>Customer Review</Typography>} />
            <MoreHorizIcon className={classes.horizantalmenu}/>
          </ListItem>
        </List>
        <Divider className={classes.divider} />
        <List>
          {reviewsData?.data?.map((data) => (
            <React.Fragment key={data.id}>
              <ListItem>
              {data.image?
              <Box className={classes.userImg} src={`${data?.image}/${token}`} component={'img'} />:
              <Avatar1 className={classes.userImg} />}

                <ListItemText
                  primary={
                    <Box className={classes.primary_text}>
                      <Typography component={'div'} className={classes.primarytext2}>{data.name.length>10?`${data.name.slice(0,8)+"..."}`:data.name}</Typography>
                      <Typography component={'div'}>
                        {Array.from({ length: 5 }, (_, index) => (
                          <Star
                            key={index}
                            className={classes.stars}
                            sx={{ color: data.rating > index ? '#073762' : '#9FC5E9' }}
                          />
                        ))}
                      </Typography>
                    </Box>
                  }
                />
                <Typography className={classes.primary_time}>{formatTimeDifference(data.createdDate)}</Typography>
              </ListItem>
              <ListItem className={classes.listitems}>
                <ListItemText secondary={<Typography className={classes.primarytext}>{data.review}</Typography>} />
              </ListItem>
              <Divider className={classes.divider} />
            </React.Fragment>
          ))}
          <Box className={classes.mainboxconatiner1}>
            <Button className={classes.addnewcustomer1} onClick={handleReview}>See More Reviews</Button>
          </Box>
        </List>
      </Box>
  )
}

export default withRouter(withStyles(Styles)(Reviews1))