import React from 'react';
import "../Css/Header.css";
import gDrivelogo from "../Media/logo.png";
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';


function Header() {
    return (
        <div className="header">
               <div className="header__logo">
                {/* Icon Button is used for Effect */}
                <img src={gDrivelogo} alt="Logo" />
                <span>Drive</span>
            </div>

            <div className="header__middle">
                <IconButton> 
                    <SearchIcon />
                </IconButton>  
                <input type="text" placeholder="Search in Drive"/>
                <IconButton> 
                    <ArrowDropDownIcon className="header__inputCaret" />
                </IconButton> 
            </div>

            <div className="header__right">  
                <IconButton> 
                    <HelpOutlineIcon />
                </IconButton>          
                <IconButton> 
                    <AppsIcon />
                </IconButton>
                <IconButton> 
                    <SettingsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header;
