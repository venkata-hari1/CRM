import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import { withStyles } from '@mui/styles'
import {Styles} from '../Profile/Styles'
import React from 'react'
import Account from './Account'
import ProfileInformation from './ProfileInformation'
import ChangePassword from '../Profile/ChangePassword'
type IProps={
    classes:{
        [type:string]:string
    },
    name:string
}
function Settings({classes,name}:IProps) {
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    const AdminTabs=[{id:"1",txt:"My Account"},{id:"2",txt:'Profile'},{id:"3",txt:"Password"},]
    return (
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    {AdminTabs.map((tab)=><Tab label={tab.txt} value={tab.id} className={classes.tabheader}/>)}
                </TabList>
            </Box>
            <TabPanel value="1">
                <Account name={name}/>
            </TabPanel>
            <TabPanel value="2">
                <ProfileInformation/>
            </TabPanel>
            <TabPanel value="3">
                <ChangePassword/>
            </TabPanel>
        </TabContext>
    )
}
export default withStyles(Styles)(Settings)