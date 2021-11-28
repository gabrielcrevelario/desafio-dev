import { StoreMallDirectory } from "@material-ui/icons";
import './ListScores.scss'
const ListScores = (props:any) => {
    return (
    <div className="containerListScores">
  <div className="title">
          <h2>Lojas Cadastradas</h2>
          <hr />
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
  </div>)
}
export default ListScores;