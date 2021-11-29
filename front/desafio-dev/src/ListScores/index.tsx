import React, { useEffect, useState } from 'react'
import { StoreMallDirectory } from "@material-ui/icons";
import './ListScores.scss'
import axios from 'axios'
import { render } from '@testing-library/react';
class ListScores extends React.Component<any,any> {
  constructor(props:any) {
   super(props) 
   this.state = {
      stores: []
   }
  }
  getStores = async () => {
    const REACT_APP_API_CNAB = process.env.REACT_APP_API_CNAB || '';
    const response = await axios.get(REACT_APP_API_CNAB);
    this.setState({stores: response.data });
  }
  componentDidMount() {
    this.getStores()

  }

  
  
  render() {
   const { stores } = this.state;

   return (
     <div className="containerListScores">
      <div className="title">
        <h2>Lojas Cadastradas</h2>
        <hr />
      </div>
      <div className="listStores">
        {
          stores.map((store: any) => {
            
            <div className="container">
              <div className="item">
                <StoreMallDirectory />
              </div>
              <div className="item">
                <h4>{store.storeOwner}</h4>
                <p>{store.type}</p>
                <span>{store.value}</span>
              </div>
              <div className="containerDate">
                <span>{store.dateStart}</span>
              </div>
            </div>
          })
        }


      </div>
    </div>)
}
}
export default ListScores;