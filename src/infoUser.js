export const infoUser = () => {
  return {
    nombre: "Rey Gonzalez",
    dinero: 2500,
    credito: 1500,
    movimientos: [
      {
        id: `mov-${Date.now()}`,
        tipo: "entrada",
        monto: 1200,
        descripcion: "Depósito de nómina",
      },
      {
        id: `mov-${Date.now() + 1}`,
        tipo: "salida",
        monto: 400,
        descripcion: "Pago de servicios",
      },
      {
        id: `mov-${Date.now() + 2}`,
        tipo: "entrada",
        monto: 300,
        descripcion: "Transferencia recibida",
      },
    ],
  };
};
