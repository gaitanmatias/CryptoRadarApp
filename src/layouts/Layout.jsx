// Librerias
import { Outlet } from "react-router-dom";

// Componentes
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

// Estilos
import "./Layout.css";

function Layout() {
  return (
    <div className="layout-container">
      <NavBar />
      <Outlet className="outlet" />
      <Footer />
    </div>
  );
}

export default Layout;
