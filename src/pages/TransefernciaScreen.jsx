import React, { useState, useContext } from "react";
import { CuentaContext } from "../context/CuentaContext";
import "../styles/transferencia.css";

export const TransefernciaScreen = () => {
  const { user, transferir } = useContext(CuentaContext);
  const [monto, setMonto] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const cantidad = parseFloat(monto);

    if (isNaN(cantidad) || cantidad <= 0) {
      alert("Ingrese un monto válido, Rey 👑");
      return;
    }

    transferir(cantidad);
    setMonto("");
  };

  return (
    <div className="transferencia-container">
      <h2>Transferencias</h2>
      <div className="transferencia-info">
        <p>Dinero disponible: ${user.dinero}</p>
      </div>

      <form className="transferencia-form" onSubmit={handleSubmit}>
        <input
          type="number"
          value={monto}
          placeholder="Monto a transferir"
          onChange={(event) => setMonto(event.target.value)}
          min="1"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
