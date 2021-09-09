import { Component } from "react";
import eventos from "./data.json";
import Historia from "./historia";
import Opciones from "./opciones";
import Recordatorio from "./recordatorio";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historial: [],
      contador: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(opcionElegida) {
    if (this.state.contador < 5) {
      this.state.historial.push(opcionElegida);
      this.setState({
        contador: this.state.contador + 1,
      });
    } else {
      alert("Fin.");
      this.setState({
        historial: [],
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
                evento.id ===
                this.state.contador +
                  (this.state.historial.length === 0
                    ? ""
                    : this.state.historial.at(-1))
            ).historia
          }
        />
        <Opciones handler={this.handleClick} />
        {/* <Recordatorio historial={this.state.historial} /> */}
      </div>
    );
  }
}

export default Layout;
