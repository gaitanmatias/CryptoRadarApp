// React
import ReactDOM from "react-dom/client";

// Librerías
import { BrowserRouter } from "react-router-dom";

// Contextos
import { ThemeProvider } from "./context/ThemeContext";

// App
import App from "./App";

// Estilos
import "./styles/base.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
