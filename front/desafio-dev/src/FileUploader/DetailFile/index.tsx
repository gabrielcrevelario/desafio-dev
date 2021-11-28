import React from 'react';
import './DatailFile.scss'
import { TextField } from '@material-ui/core';
import {Close, ArrowBack,NavigateNext} from '@material-ui/icons';
const DetailFile = (props:any) => {
    const {file, onClose, onBack, onNext} = props;
    return (<div className="DetailFile">
                    <div className="header">
                        <div className="title">
                            <h3>Informações da Loja</h3>
                            <hr/>
                        </div>
                        <button onClick={onClose}><Close /></button>
                    </div>
                    <div className="body">
                        <div className="backAndNextButton">
                              <button onClick={onBack}> <NavigateNext /></button>
                              <button onClick={onNext}> <NavigateNext /></button>
                        </div>
                            <div className="customInformation">
                                <div className="item">
                                    <span>Tipo</span>
                                    <span>{file.type}</span>
                                </div>
                                <div className="item">
                                    <span>Data</span>
                                    <span>{file.dataStart}</span>
                                </div>
                            </div>
                            <div className="customInformation">
                                <div className="item">
                                    <span>Valor</span>
                                    <span>{file.value}</span>
                                </div>
                                <div className="item">
                                    <span>CPF</span>
                                    <span>{file.cpf}</span>
                                </div>
                            </div>
                            <div className="customInformation">
                                <div className="item">
                                    <span>Cartão</span>
                                    <span>{file.card}</span>
                                </div>
                                <div className="item">
                                    <span>Hora</span>
                                    <span>{file.hour}</span>
                                </div>
                            </div>
                            <div className="customInformation">
                                <div className="item">
                                    <span>Dono da loja</span>
                                    <span>{file.storeOwner}</span>
                                </div>
                                <div className="item">
                                    <span>Nome da loja</span>
                                    <span>{file.nameStore}</span>
                                </div>
                            </div>
                    </div>
    </div> );
}
export default DetailFile;