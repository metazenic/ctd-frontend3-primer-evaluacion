function Opcion(props) {
    return (
      <div className="opcion">
        <button className="botones" onClick={ () => props.handler(props.opcion)}>{props.opcion}</button>
        <h2>{props.texto}</h2>
      </div>
    );
}

export default Opcion;
