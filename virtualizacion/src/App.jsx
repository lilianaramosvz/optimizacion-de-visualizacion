import "./App.css";
import Contador from "./components/contador";
import Lista from "./components/lista";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <button onClick={() => navigate("/")}>
          Ir a Contador
        </button>

        <button onClick={() => navigate("/lista")}>
          Ir a Lista Dinámica
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<Contador />} />
        <Route path="/lista" element={<Lista />} />
      </Routes>
    </div>
  );
}

export default App;
