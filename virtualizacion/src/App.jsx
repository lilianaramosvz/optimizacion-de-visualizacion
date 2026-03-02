//virtualizacion\src\App.jsx
import "./App.css";
import Contador from "./components/contador";
import Lista from "./components/lista";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <nav>
              <button onClick={() => navigate("/contador")}>
                Ir a Contador
              </button>
              <button onClick={() => navigate("/lista")}>
                Ir a Lista Dinámica
              </button>
            </nav>
          }
        />
        <Route
          path="/contador"
          element={
            <div>
              <button onClick={() => navigate("/")}>Volver al inicio</button>
              <Contador />
            </div>
          }
        />
        <Route
          path="/lista"
          element={
            <div>
              <button onClick={() => navigate("/")}>Volver al inicio</button>
              <Lista />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
