import React from 'react';
import {Delete } from '@material-ui/icons'
import './ListFiles.scss';
const ListFiles = (props:any) => {
    const { files } = props;
    return (<div className="ListFiles">
            <div className="listOftextarea">
               {files.map((file:any) => {
                   return <div className="item">
                       <span>{file.nameStore}</span>
                       <div className="iconContainer">
                           <Delete color="disabled" style={{color:'white'}}/>
                       </div>
                   </div>
               })} 
               </div>
    </div>)
}
export default ListFiles;