import React from "react";

const Texto2 = React.memo(() => {
  console.log("Soy texto 2");
  return <p>Texto 2</p>;
});

export default Texto2;