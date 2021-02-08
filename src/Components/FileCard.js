import React from 'react'
import '../Css/FileCard.css'

//Icons
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';


const FileCard = ({ name }) => {
    return (
        <div className='fileCard'>
            <div className="fileCard__top">
                <InsertDriveFileOutlinedIcon style={{ fontSize: 130 }} />
            </div>

            <div className="fileCard__bottom">
                <p>{name}</p>
            
            </div>
        </div>
    )
}

export default FileCard