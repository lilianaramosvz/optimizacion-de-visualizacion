import React from "react";

const Texto3 = React.memo(() => {
  console.log("Soy texto 3");
  return <p>Texto 3</p>;
});

export default Texto3;