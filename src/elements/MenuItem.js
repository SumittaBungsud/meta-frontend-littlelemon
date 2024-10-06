import React from "react";
import CountButton from "./CountButton";

function MenuItem({ food }) {
  return (
    <section className="menuItem" role="listitem">
      <img src={food.image} alt={food.name} />
      <section className="menuItem-name">
        <p>{food.name}</p>
      </section>
      <section className="menuItem-footer">
        <p className="price">{food.price}</p>
        <CountButton color="#495E57" />
      </section>
    </section>
  );
}

export default MenuItem;
