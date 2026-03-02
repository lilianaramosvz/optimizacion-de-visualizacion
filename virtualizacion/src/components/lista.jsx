//virtualizacion\src\components\lista.jsx
import React, { useState } from "react";
import ListaElem from "./listaElemento";

const Lista = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Elemento 1", likes: 0 },
    { id: 2, name: "Elemento 2", likes: 0 },
  ]);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: `Elemento ${items.length + 1}`,
      likes: 0,
    };

    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const likeItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item,
      ),
    );
  };

  const reverseList = () => {
    setItems([...items].reverse());
  };

  return (
    <div>
      <button onClick={addItem}>Agregar elemento</button>
      <button onClick={reverseList}>Invertir lista</button>

      {items.map((item) => (
        <ListaElem
          key={item.id}
          item={item}
          onLike={likeItem}
          onDelete={deleteItem}
        />
      ))}
    </div>
  );
};

export default Lista;
