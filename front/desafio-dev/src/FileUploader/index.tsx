import React, { useCallback, useState } from "react";
import { CloudUpload, Visibility } from "@material-ui/icons";
import { Button, Modal, Snackbar } from "@material-ui/core";
import './FileUploader.scss'
import ListFiles from "./ListFiles";
import { useDropzone } from "react-dropzone";
import DetailFile from "./DetailFile";
import { File } from "./store"
import axios from 'axios'
import Fade from '@mui/material/Fade';
const FileUploader = (props: any) => {
    const { getScore } = props
    const [openMessage, setOpenMessage] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("Success insert");
    const [listFiles, setListFiles] = useState<File[]>([]);
    const [selectedFile, setSelectedFile] = useState<File>({
        type: '',
        dateStart: new Date(),
        value: 0,
        cpf: '',
        card: '',
        hour: '',
        storeOwner: '',
        nameStore: ''
    });
    const formatStore = [{ start: 0, end: 1 },
    { start: 1, end: 9 },
    { start: 9, end: 19 },
    { start: 19, end: 30 },
    { start: 30, end: 42 },
    { start: 42, end: 48 },
    { start: 48, end: 62 },
    { start: 62 },
    ]
    const generateStores = (payload: string) => {
        debugger
        let listFilesText: string[] = payload.split(/\n/);
        listFilesText.splice(listFilesText.length - 1, 1)
        let listFiles = listFilesText.map((fileTxt: string, i: number) => {
            const year = parseInt(fileTxt.substring(1,5));
            const month = parseInt(fileTxt.substring(5,8));
            const day = parseInt(fileTxt.substring(8,10));
            const date = new Date(year,month, day);
            let store: File = {
                id: i,
                type: fileTxt.substring(formatStore[0].start, formatStore[0].end),
                dateStart: date,
                value: parseInt(fileTxt.substring(formatStore[2].start, formatStore[2].end)) / 100,
                cpf: fileTxt.substring(formatStore[3].start, formatStore[3].end),
                card: fileTxt.substring(formatStore[4].start, formatStore[4].end),
                hour: fileTxt.substring(formatStore[5].start, formatStore[5].end),
                storeOwner: fileTxt.substring(formatStore[6].start, formatStore[6].end).trimEnd(),
                nameStore: fileTxt.substring(formatStore[7].start).trimEnd(),
            }
            return store;
        })
        return listFiles;
    }

    const [openModal, setOpenModal] = useState(false);

    const onDrop = useCallback((acceptedFiles) => {
        debugger
        acceptedFiles.forEach((file: any) => {
            debugger
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const storeText: any = reader.result;
                let newListFiles = generateStores(storeText)
                setListFiles([...listFiles,...newListFiles]);

            }
            reader.readAsText(file);
        })

    }, [])
    const handlerOpenModal = (e: any) => {
        e.preventDefault()
        e.stopPropagation()
        let newFiles = {...listFiles};
        setOpenModal(true);
        setSelectedFile(newFiles[0]);
    }
    const getFileNextById = () => {
        debugger
        let newFiles = [...listFiles]
        let index = newFiles.findIndex((x: any) => x.id === selectedFile.id);
        index = index >= (newFiles.length -1) ? index : index + 1;
        setSelectedFile(newFiles[index])
    }
    const getFileBackById = () => {
        debugger
        let newFiles = [...listFiles]
        let index = newFiles.findIndex((x: any) => x.id === selectedFile.id);
        index = index <= 0 ? index : index - 1;
        setSelectedFile(newFiles[index])
    }
    const sendStores = async () => {
        debugger
        try {

            const REACT_APP_API_CNAB:string = process.env.REACT_APP_API_CNAB || '';
            const newFiles = [...listFiles].map((file:any) => {
                delete file.id;
                return file;
            });
            const stores = await axios.post(`${REACT_APP_API_CNAB}/`, newFiles);
            setOpenMessage(true);
            getScore(true)
        } catch (err:any) {
            console.error(err);
            setMessage(err.message);
            setOpenMessage(true);
        }
    }

    const { getRootProps, getInputProps } = useDropzone({ onDrop })
    return (<div className="uploadContainer">
       <div className="title">
          <h2>Upload de Arquivos</h2>
          <hr />
       </div>
        <div className="fileContainer" {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="itemDrag">
                <CloudUpload />
                <h3>Envio de Arquivos</h3>
                <p>Arraste seus arquivos de lojas aqui</p>
            </div>
            {
                listFiles.length > 0 &&
                <div className="iconEye" onClick={handlerOpenModal}>
                    <Visibility />
                </div>
            }
        </div>
        {listFiles.length > 0 &&
            <div className="containerListFiles">
                <ListFiles files={listFiles} />
            </div>
        }
        <Modal
            open={openModal}
            onClose={_ => setOpenModal(false)}
        >
            <DetailFile
                file={selectedFile}
                onClose={() => setOpenModal(false)}
                onBack={getFileBackById}
                onNext={getFileNextById}
            />
        </Modal>
        <div className="btnSend">
            <Button onClick={sendStores} variant="contained">Enviar Lojas</Button>
        </div>
        <Snackbar
            open={openMessage}
            onClose={() => setOpenMessage(false)}
            message={message}
        />
    </div>)
}
export default FileUploader;