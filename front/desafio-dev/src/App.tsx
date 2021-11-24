import React,{useCallback} from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import {CloudUpload, Delete, Visibility,StoreMallDirectory} from '@material-ui/icons'
import './App.scss';
import { Paper } from '@material-ui/core';
function App() {

  const [fileName, setFileName] = React.useState('')
  const [preview, setPreview] = React.useState()
  const onDrop = useCallback((acceptedFiles) => {
    debugger
    acceptedFiles.forEach((file:any) => {
      debugger
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
      // Do whatever you want with the file contents
        const binaryStr:any = reader.result;
        setPreview(binaryStr)
        setFileName(file.name)
  
      }
      reader.readAsText(file);
      // reader.readAsArrayBuffer(file)
    })
    
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
 
  return (<div className="screenStore">
        <div className="header">
              <h1>Wellcome Store</h1>
        </div>
        <div className="body">
          <div className="fileContainer" {...getRootProps()}>
                <input {...getInputProps()} />
                  <div className="itemDrag">
                      <CloudUpload />
                    <h3>Upload a File</h3>
                    <p>Drag this Files Stores here</p>  
                  </div>
          </div>
          <div className="listStores">
            <div className="container">
              <div className="item">
                <StoreMallDirectory />
              </div>
              <div className="item">
                <h4>Manoel Store</h4>
                <p>Debito</p>
                <span>142000</span>
              </div>
              <div className="containerDate">
                <span>01/02/2021</span>
              </div>
            </div>
            <div className="container">
              <div className="item">
                <StoreMallDirectory />
              </div>
              <div className="item">
                <h4>Manoel Store</h4>
                <p>Debito</p>
                <span>142000</span>
              </div>
              <div className="containerDate">
                <span>01/02/2021</span>
              </div>
            </div>
          </div>
        </div>
  </div>
  );
}

export default App;
