//virtualizacion\src\components\listaElemento.jsx
import React from "react";

const ListaElem = React.memo(({ item, onLike, onDelete }) => {
  console.log("Renderizando item:", item.id);

  return (
    <div>
      <span> {item.name} </span>

      <button onClick={() => onLike(item.id)}>Me gusta {item.likes}</button>

      <button onClick={() => onDelete(item.id)}>Eliminar</button>
    </div>
  );
});

export default ListaElem;
