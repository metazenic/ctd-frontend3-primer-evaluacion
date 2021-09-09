import { Component } from "react";
import eventos from "./data.json";
import Historia from "./historia";
import Opciones from "./opciones";
import Recordatorio from "./recordatorio";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ultimaOpcion: "",
      contador: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(opcionElegida) {
    if (this.state.contador < 5) {
      this.setState({
        ultimaOpcion: opcionElegida,
        contador: this.state.contador + 1,
      });
    } else {
      
      alert("Fin.");
      this.setState({
        ultimaOpcion: "",
        contador: 1,
      });
    }
  }

  render() {
    return (
      <div className="layout">
        <Historia
          cuerpo={
            eventos.find(
              (evento) =>
                evento.id === this.state.contador + this.state.ultimaOpcion.toLowerCase()
            ).historia
          }
        />
        <Opciones handler={this.handleClick} />
        <Recordatorio ultimaOpcion={this.state.ultimaOpcion} />
      </div>
    );
  }
}

export default Layout;
