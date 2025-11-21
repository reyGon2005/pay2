import React, { useContext } from "react";
import { ListaTransferencia } from "../components/ListaTransferencia";
import { infoUser } from "../infoUser";
import { CuentaContext } from "../context/CuentaContext";

export const CuentaScreen = () => {
  const { user } = useContext(CuentaContext);
  return (
    <>
      <div>
        <ListaTransferencia movimientos={user.movimientos} />
      </div>
    </>
  );
};
