import React from 'react';
import './Sidebar.css';
import SidebarOptions from './SidebarOptions';

import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__links'>
        <TwitterIcon className='sidebar--twitterIcon' />

        <SidebarOptions active Icon={HomeIcon} text='Home' />
        <SidebarOptions Icon={SearchIcon} text='Explore' />
        <SidebarOptions Icon={NotificationsNoneIcon} text='Notification' />
        <SidebarOptions Icon={MailOutlineIcon} text='Messages' />
        <SidebarOptions Icon={PersonIcon} text='Profile' />
        <SidebarOptions Icon={MoreHorizIcon} text='Options' />

        <Button variant='outlined' className='sidebar--tweet'>
          <CreateIcon />
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
