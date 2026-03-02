//virtualizacion\src\components\texto1.jsx
import React from "react";

const Texto1 = React.memo(() => {
  console.log("Soy texto 1");
  return <p>Texto 1</p>;
});

export default Texto1;
