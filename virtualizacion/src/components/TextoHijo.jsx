import React from "react";

const TextoHijo = React.memo(({ texto }) => {
  console.log("Renderizado de texto...");
  return <p>{texto}</p>;
});

export default TextoHijo;
