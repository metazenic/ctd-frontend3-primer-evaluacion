function Historial(props) {
    return (
      <>
        <h4>Historial de opciones elegidas:</h4>
        <ul>
          {props.items.map((item, index) => (<li key={index}>{item}</li>))}
        </ul>
      </>
    );
}

export default Historial;
