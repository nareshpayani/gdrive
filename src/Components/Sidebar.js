import React, {useState} from 'react'
import "../Css/Sidebar.css";
import { Button } from '@material-ui/core';
import SidebarOptions from './SidebarOptions';

//Icons
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import CloudOutlinedIcon from '@material-ui/icons/CloudOutlined';
import plus from "../Media/plus.svg";

import firebase from "firebase";
import {storage, db} from "../firebase"

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


//Model function

function getModalStyle() {
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        height:300,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }));

function Sidebar() {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);

    const [file, setFile] = useState(null);
    const [uploading, setuploading] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleChange = (e) => {
          if(e.target.files[0]){
              setFile(e.target.files[0])
          }
      }

      const handleUpload = () => {
        setuploading(true);

        storage.ref(`files/${file.name}`).put(file).then(snapshot => {
            console.log(snapshot);

            storage.ref(`files`).child(file.name).getDownloadURL().then(url => {
                db.collection("myFiles").add({
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    caption: file.name,
                    fileUrl: url,
                    size: snapshot._delegate.bytesTransferred,
                })

                setuploading(false)
                setOpen(false)
                setFile(null)
            })
        })
      };
    return (
        <div className="sidebar">
            <Button className="sidebar__addFile" onClick= {handleOpen}><img src={plus} />New File</Button>
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

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            <div style={modalStyle} className= {classes.paper}>
                <p className="modle__Header">Upload Files To Google Drive </p>
                {
                    uploading ? (
                        <p>uploading...</p>
                    ) : (
                        <div className="modle__body">
                        <input  type="file" onChange={handleChange} />
                        <button onClick= {handleUpload} > BROWSE </button>
                        </div>
                    )
                }
            </div>
            </Modal>
        </div>
    )
}

export default Sidebar;
