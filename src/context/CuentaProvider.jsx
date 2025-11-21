import React, { useReducer } from "react";
import { CuentaContext } from "./CuentaContext";
import { infoUser } from "../infoUser";

const initialState = infoUser();

const cuentaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "cuenta/depositar":
      return {
        ...state,
        dinero: state.dinero + action.payload,
        movimientos: [
          {
            id: `mov-${Date.now()}`,
            tipo: "entrada",
            monto: action.payload,
            descripcion: `Depósito de $${action.payload}`,
          },
          ...state.movimientos,
        ],
      };
    case "cuenta/transferir":
      return { ...state, dinero: state.dinero - action.payload };
    case "cuenta/credito":
      return {
        ...state,
        dinero: state.dinero - action.payload,
        movimientos: [
          {
            id: `mov-${Date.now()}`,
            tipo: "credito",
            monto: action.payload,
            descripcion: `Pago de $${action.payload}`,
          },
          ...state.movimientos,
        ],
      };
    default:
      return state;
  }
};

export const CuentaProvider = ({ children }) => {
  const [user, dispatch] = useReducer(cuentaReducer, initialState);

  const depositar = (cantidad) => {
    dispatch({
      type: "cuenta/depositar",
      payload: cantidad,
    });
  };

  const transferir = (cantidad) => {
    dispatch({
      type: "cuenta/transferir",
      payload: cantidad,
    });
  };

  const creditoPago = (cantidad) => {
    dispatch({
      type: "cuenta/credito",
      payload: cantidad,
    });
  };

  return (
    <CuentaContext.Provider
      value={{
        user,
        depositar,
        transferir,
        creditoPago,
      }}
    >
      {children}
    </CuentaContext.Provider>
  );
};
