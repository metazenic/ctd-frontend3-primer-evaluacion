import Opcion from "./opcion";

function Opciones(props) {
    return (
      <div className="opciones">
        <Opcion opcion="A" texto={props.eventoActual.opciones.a} handler={props.handler}/>
        <Opcion opcion="B" texto={props.eventoActual.opciones.b} handler={props.handler}/>
      </div>
    );
}

export default Opciones;
