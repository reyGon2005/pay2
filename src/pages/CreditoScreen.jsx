import React, { useContext, useEffect, useState } from "react";
import "../styles/credito.css";
import { CuentaContext } from "../context/CuentaContext";

export const CreditoScreen = () => {
  const { user, creditoPago } = useContext(CuentaContext);
  const [cuentaDeuda, setCuentaDeuda] = useState(0);
  const [monto, setMonto] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cantidad = Number(monto);
    if (isNaN(cantidad) || cantidad <= 0) return;

    creditoPago(cantidad);
    setCuentaDeuda((prev) => prev - cantidad);
    setMonto("");
  };

  return (
    <div className="credito-container">
      <h2>Crédito</h2>
      <div className="credito-info">
        <p>Monto límite: {user.credito}</p>
        <p>Debe: {500 + cuentaDeuda}</p>
        <p>Crédito restante:{user.credito - cuentaDeuda}</p>
      </div>

      <form className="credito-form" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Monto a depositar"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          min="1"
        />
        <button type="submit">Depositar</button>
      </form>
    </div>
  );
};
