import React from 'react'
import "../Css/RightBar.css";

//Icons
import calender from "../Media/calender.png";
import task from "../Media/task.png";
import keep from "../Media/keep.png";
import AddIcon from '@material-ui/icons/Add';

function RightBar() {
    return (
        <div className="rightbar">
            <div className="rightbar__top">
            <img src={calender} alt="calender" />
            <img src={keep} alt="keep" />
            <img src={task} alt="task" />
            </div>

            <div className="rightbar__plusIcon">
                <AddIcon />
            </div>
            
        </div>
    )
}

export default RightBar
