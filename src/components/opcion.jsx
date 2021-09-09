import { Component } from "react";

class Opcion extends Component {
  render() {
    return (
      <div className="opcion">
        <button className="botones" onClick={ () => this.props.handler(this.props.opcion)}>{this.props.opcion}</button>
        <h2>{this.props.texto}</h2>
      </div>
    );
  }
}

export default Opcion;
