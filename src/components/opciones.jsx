import { Component } from "react";
import Opcion from "./opcion";

class Opciones extends Component {
  render() {
    return (
      <div className="opciones">
        <Opcion opcion="A" texto={this.props.eventoActual.opciones.a} handler={this.props.handler}/>
        <Opcion opcion="B" texto={this.props.eventoActual.opciones.b} handler={this.props.handler}/>
      </div>
    );
  }
}

export default Opciones;
