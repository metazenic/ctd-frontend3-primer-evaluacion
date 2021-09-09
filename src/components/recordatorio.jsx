import { Component } from "react";

class Recordatorio extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="recordatorio">
        <h3 className="anterior">
          Selección anterior: {this.props.ultimaOpcion}
        </h3>
        <h4>Historial de opciones elegidas:</h4>
        {/* <ul>
          {this.props.historial.map((entrada) => (
            <li>{entrada}</li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default Recordatorio;
