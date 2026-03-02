import { useState } from "react";
import React from "react";
import Texto1 from "./texto1";
import Texto2 from "./texto2";
import Texto3 from "./texto3";

function Contador() {
  const [contador, setContador] = useState(0);
  <button onClick={() => setContador(contador + 1)}>
    Contador: {contador}
  </button>;

  return (
    <div>
      <h2>Contador</h2>
      <label>{contador}</label>
      <br />
      <button onClick={() => setContador(contador + 1)}>+</button>

      <Texto1 />
      <Texto2 />
      <Texto3 />
    </div>
  );
}
export default Contador;
