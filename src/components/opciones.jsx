import { Component } from "react";
import Opcion from "./opcion";

class Opciones extends Component {
  render() {
    return (
      <div className="opciones">
        <Opcion opcion="A" texto="Lorem ipsum dolor sit amet." handler={this.props.handler}/>
        <Opcion opcion="B" texto="Lorem ipsum dolor sit amet." handler={this.props.handler}/>
      </div>
    );
  }
}

export default Opciones;
