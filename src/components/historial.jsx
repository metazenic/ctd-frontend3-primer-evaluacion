import { Component } from "react";

class Historial extends Component {
  render() {
    return (
      <>
        <h4>Historial de opciones elegidas:</h4>
        <ul>
          {this.props.items.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
      </>
    );
  }
}

export default Historial;
