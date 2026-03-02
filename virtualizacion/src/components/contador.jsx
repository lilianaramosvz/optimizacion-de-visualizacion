//virtualizacion\src\components\contador.jsx
import { useState } from 'react';
import React from 'react';
import TextoHijo from './TextoHijo.jsx';

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

      <TextoHijo texto="Primer texto" />
      <TextoHijo texto="Segundo texto" />
      <TextoHijo texto="Tercer texto" />
    </div>
  );
}
export default Contador;
