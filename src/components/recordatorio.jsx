import { Component } from "react";
import Historial from "./historial";

class Recordatorio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historial: []
    };
  }

  render() {
    return (
      <div className="recordatorio">
        <h3 className="anterior">
          Selección anterior: {this.props.ultimaOpcion}
        </h3>
        <h4>Historial de opciones elegidas:</h4>
        <Historial items={["A", "B"]/*hardcodeado*/} />
      </div>
    );
  }
}

export default Recordatorio;
