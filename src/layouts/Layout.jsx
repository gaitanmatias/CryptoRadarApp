// Librerias
import { Outlet } from "react-router-dom";

// Componentes
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import PageTitleManager from "../components/PageTitleManager/PageTitleManager";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

// Estilos
import "./Layout.css";

function Layout() {
  return (
    <div className="layout">
      <ScrollToTop />
      <PageTitleManager />
      
      <NavBar />
      <Outlet className="layout__outlet" />
      <Footer />
    </div>
  );
}

export default Layout;
