import React from 'react';
import './App.scss';
import ListScores from './ListScores';
import FileUploader from './FileUploader';
function App() {
 
  return (<div className="screenStore">
        <div className="header">
              <div className="container">
                    <h1>Bem Vindo ao gerenciador de Lojas</h1>
              </div>
        </div>
        <div className="body">
         <FileUploader />
          <ListScores /> 
        </div>
  </div>
  );
}

export default App;
