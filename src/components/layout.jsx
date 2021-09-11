import { Component } from "react";
import eventos from "./data.json";
import Historia from "./historia";
import Opciones from "./opciones";
import Recordatorio from "./recordatorio";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.eventoActual = () => {return eventos.find( (evento) => evento.id === this.state.contador + this.state.ultimaOpcion.toLowerCase())}
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
      window.location.reload()
    }
  }

  render() {
    return (
      <div className="layout">
        <Historia eventoActual={this.eventoActual()} />
        <Opciones eventoActual={this.eventoActual()} handler={this.handleClick} />
        <Recordatorio ultimaOpcion={this.state.ultimaOpcion} />
      </div>
    );
  }
}

export default Layout;
