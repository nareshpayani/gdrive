import React,  {useState, useEffect} from 'react'
import "../Css/FileView.css"
import FileItem from '../Components/FileItem'
import FileCard from '../Components/FileCard'

//Icons
import { IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ViewListIcon from '@material-ui/icons/ViewList';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

//Database
import {db} from "../firebase"



function FileView() {
    const [files, setFiles] = useState([])

    useEffect(() => {
        db.collection('myFiles').onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])

    console.log(files);

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
                {
                    files.map(({ id, item }) => (
                        <FileCard name={item.caption} />
                        
                    ))
                }
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

            {
                files.map(({ id, item }) => (
                    <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
                ))
            }
        </div>
    )
}

export default FileView;
