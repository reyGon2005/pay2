import React, { useContext, useState } from "react";
import "../styles/home.css";
import { ListaTransferencia } from "../components/ListaTransferencia";
import { CuentaContext } from "../context/CuentaContext";

export const HomeScreen = () => {
  const { user, depositar } = useContext(CuentaContext);
  const [monto, setMonto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const cantidad = Number(monto);
    if (isNaN(cantidad) || cantidad <= 0) return;
    depositar(cantidad);
    setMonto("");
  };

  return (
    <>
      <div className="container d-flex flex-column align-items-center bienvenida">
        <div className="w-100 mb-4">
          <h2 className="text-start">Bienvenido, {user.nombre}</h2>
        </div>

        <div className="text-center">
          <h3>Tu dinero:</h3>
          <p className="fs-4 fw-semibold">${user.dinero}</p>

          <h3 className="depo">Depositar:</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              placeholder="Cantidad"
              value={monto}
              onChange={(e) => setMonto(e.target.value)}
              className="form-control mb-2"
            />
            <button type="submit" className="btn btn-success">
              Depositar
            </button>
          </form>
        </div>
      </div>

      <ListaTransferencia movimientos={user.movimientos} />
    </>
  );
};
