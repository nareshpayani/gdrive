import React from 'react'
import "../Css/Sidebar.css";
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import SidebarOptions from './SidebarOptions';
import InboxIcon from '@material-ui/icons/Inbox';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import plus from "../Media/plus.svg";

function Sidebar() {
    return (
        <div className="sidebar">
            <Button className="sidebar__addFile" ><img src={plus} />New File</Button>
            <SidebarOptions arrow Icon ={InboxIcon} title="My Drive"  selected= {true}/>
            <SidebarOptions Icon ={PeopleAltOutlinedIcon} title="Shared with me" />
            <SidebarOptions Icon ={WatchLaterOutlinedIcon} title="Recent" />
            <SidebarOptions Icon ={StarBorderOutlinedIcon} title="Starred" />
            <SidebarOptions Icon ={DeleteOutlineOutlinedIcon} title="Trash" />
            <SidebarOptions Icon ={ExpandMoreIcon} title="More" />

            <div className="sidebar__footer">
            <SidebarOptions Icon ={CloudOutlinedIcon} title="Storage" />
            <Button variant="outlined">Buy Storage</Button>
            </div>
        </div>
    )
}

export default Sidebar;
