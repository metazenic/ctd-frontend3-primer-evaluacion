import { Component } from "react";
import Historial from "./historial";

let historial = [];

class Recordatorio extends Component {
  
  componentDidUpdate() {
    historial.push(this.props.ultimaOpcion);
  }

  render() {
    return (
      <div className="recordatorio">
        <h3 className="anterior">Selección anterior: {this.props.ultimaOpcion}</h3>
        <Historial items={historial} />
      </div>
    );
  }
}

export default Recordatorio;
