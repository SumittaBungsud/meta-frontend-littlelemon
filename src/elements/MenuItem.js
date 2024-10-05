import React from "react";
import CountButton from "./CountButton";

function MenuItem({ food }) {
  return (
    <fragment className="menuItem">
      <section>
        <img src={food.image} alt={food.name} />
      </section>
      <section
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          padding: "0 1.2rem",
        }}
      >
        <p>{food.name}</p>
        <section className="menuItem-footer">
          <p className="price">{food.price}</p>
          <CountButton color="#495E57" />
        </section>
      </section>
    </fragment>
  );
}

export default MenuItem;
