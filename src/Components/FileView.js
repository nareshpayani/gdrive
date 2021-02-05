import React from 'react'
import "../Css/FileView.css"
import { IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ViewListIcon from '@material-ui/icons/ViewList';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';


function FileView() {
    return (
        <div className="fileView">
             <div className="fileViewHeader__settings">
                <div className="fileViewHeader__settingsLeft">
                    <span>My Drive</span>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>              
                </div>

                <div className="fileViewHeader__settingsRight">
                    <IconButton>
                        <ViewListIcon/>
                    </IconButton>

                    <IconButton>
                        <ErrorOutlineIcon/>
                    </IconButton>
                </div>
            </div>


            <div className="fileView__row">
                {/* File Card Component */}
            </div>

            <div className="fileView__titles">
                <div className="fileView__titles__left">
                    <p>Name</p>
                </div>
                <div className="fileView__titles__right">
                    <p>Last modified</p>
                    <p>File Size</p>
                </div>
            </div>

            {/* File Items */}
        </div>
    )
}

export default FileView;
