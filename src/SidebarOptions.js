import React from 'react';
import './SidebarOptions.css'

function SidebarOptions({active, Icon, text}) {
  return(
    <div className={`sidebar-option  ${active &&
     'sidebar-option--active'}`}>
      <Icon />
    </div>
  );
}

export default SidebarOptions;
