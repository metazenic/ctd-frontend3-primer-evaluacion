import { Component } from "react";

class Historial extends Component {
  render() {
    return (
      <ul>
          {this.props.items.map( item => <li>{item}</li>)}
      </ul>
    );
  }
}

export default Historial;
