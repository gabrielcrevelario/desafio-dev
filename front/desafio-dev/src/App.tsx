import React, { useState } from 'react';
import './App.scss';
import ListScores from './ListScores';
import FileUploader from './FileUploader';

class App extends React.Component {
      scoreRef:any;
      constructor(props:any) {
            super(props)
            this.scoreRef = React.createRef()
      }
      callScores = (isRefresh: boolean) => {
            if(isRefresh) {
                  this.scoreRef.current.getStores();
            }
      } 
      render() {
            return (<div className="screenStore">
                  <div className="header">
                        <div className="container">
                              <h1>Bem Vindo ao gerenciador de Lojas</h1>
                        </div>
                  </div>
                  <div className="body">
                        <FileUploader getScore={this.callScores}/>
                        <ListScores ref={this.scoreRef} />
                  </div>
            </div>
            );
      }
}

export default App;
