import React from 'react'
import "../Css/SidebarOptions.css";


function SidebarOptions({Icon, title, selected}) {
    return (
        <div className={`sidebarOptions ${selected && "sidebarOptions--active"}`}>
            <Icon className="sidebarOptions__Icon" />
            <h3 className="sidebarOptions__title">{title}</h3>
            
        </div>
    )
}

export default SidebarOptions;
