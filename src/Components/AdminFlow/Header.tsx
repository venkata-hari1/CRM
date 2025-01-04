import React, { Fragment, useState } from 'react';
import { withStyles } from '@mui/styles';
import { Styles } from '../Common/Header/Styles';
import { Box, Button, Drawer, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { withRouter } from '../../Utils/withRouter';
import { AppDispatch,} from '../Redux/store/Store';
import { ReactComponent as Avatar } from '../Common/assets/images/avatar1.svg'
import Sidebar from '../Sidebar/Sidebar';
type IProps = {
  lsdesktop: any,
  name: string,
  sell: boolean,
  navigate: Function,
  classes: {
    [type: string]: string
  },
  value: boolean | number
  handlegetId: (id: number) => void
  dispatch: AppDispatch
  window: () => Window
}
function Header({ name,classes, window, lsdesktop }: IProps) {
  const [id, setId] = useState(1)
  const [value1, setValue1] = useState(false)
  const [display, setDisplay] = useState(false)

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handlebtns = () => {
    setValue1(!value1)
    setDisplay(false)
  }

  const container = window !== undefined ? () => window().document.body : undefined;
  const name1: string = "Naresh Mendu"
  return (
    <Fragment>
      {lsdesktop && <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              padding:'10px',
              boxSizing: "border-box",
              background:'#F4FAFF',
              width:'80%',
            },
          }}
        >
          <Sidebar mobilesidebar={true} handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </nav>}
      <Box className={classes.headerContainer}>

        <Grid container spacing={1} className={classes.gridContainer1}>
          <Grid item lg={8.5} xs={lsdesktop ? 8 : 6} md={lsdesktop ? 8 : 6}>
            <Box className={classes.headerTitle}>{name}</Box>
          </Grid>
          <Grid item lg={3.5} xs={lsdesktop ? 4 : 5} md={lsdesktop ? 4 : 5}>
            {lsdesktop ? <MenuIcon sx={{ cursor: 'pointer',float:'right' }} onClick={handleDrawerToggle} /> :
              <Button size='small' sx={{ width: '30%' }} onClick={handlebtns} startIcon={
                <Avatar className={classes.headerimage} />
              } className={classes.btn_icon}
              >
                {name1.length > 6 ? `${name1.slice(0, 6) + "..."}` : name1}
              </Button>}
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.headerdivider}></Box>
    </Fragment>
  );

}

export default withRouter(withStyles(Styles)(Header))