import "../styles/listaTransf.css";

export const ListaTransferencia = ({ movimientos }) => {
  return (
    <>
      <div className="container">
        <h2>Lista transferencia</h2>
        <ul>
          {movimientos.map((movimiento) => (
            <li key={movimiento.id} className="tarjeta-transferencia-borde">
              <div className="tarjeta-transferencia">
                <p>{movimiento.tipo}</p>
                <p>{movimiento.monto}</p>
                <p>{movimiento.descripcion}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
