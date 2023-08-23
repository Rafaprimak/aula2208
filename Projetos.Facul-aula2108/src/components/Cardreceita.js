function Cardreceita(props) {
    return (
      <div key={props.id}>
        <h2>{props.id}</h2>
        <p>{props.nome}</p>
      </div>
    );
  }

export default Cardreceita;