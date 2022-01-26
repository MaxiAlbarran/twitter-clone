import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
  return(
    <div className='sidebar'>
      <TwitterIcon />


      <SidebarOptions active Icon={HomeIcon} text="Home"/>
      <SidebarOptions Icon={SearchIcon} text="Explore"/>
      <SidebarOptions Icon={NotificationsIcon} text="Notification"/>
      <SidebarOptions Icon={MailOutlineIcon} text="Messages"/>
      <SidebarOptions Icon={PersonIcon} text="Profile"/>
      <SidebarOptions Icon={MoreHorizIcon} text="Options"/>


      <Button variant="outlined" className='sidebar--tweet' fullWidth>Tweet</Button>
      
    </div>
  );
}

export default Sidebar;
