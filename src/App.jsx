import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomeScreen } from "./pages/homeScreen";
import { CreditoScreen } from "./pages/CreditoScreen";
import { TransefernciaScreen } from "./pages/TransefernciaScreen";
import { AsistenteScreen } from "./pages/AsistenteScreen";
import { CuentaScreen } from "./pages/CuentaScreen";
import "./styles/app.css";
import { CuentaProvider } from "./context/CuentaProvider";

function App() {
  return (
    <>
      <CuentaProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cuenta" element={<CuentaScreen />} />
          <Route path="/credito" element={<CreditoScreen />} />
          <Route path="/transferencia" element={<TransefernciaScreen />} />
          <Route path="/asistente" element={<AsistenteScreen />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </CuentaProvider>
    </>
  );
}

export default App;
