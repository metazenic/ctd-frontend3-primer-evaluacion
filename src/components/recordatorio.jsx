import { Component } from "react";

class Recordatorio extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h3 className="anterior">
          Selección anterior: {this.props.historial.splice(0, 1)}
        </h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>
          {this.props.historial.map((entrada) => (
            <li>{entrada}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Recordatorio;
