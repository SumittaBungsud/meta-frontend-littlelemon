import React from "react";
import CountButton from "./CountButton";

function MenuItem({ food }) {
  return (
    <fragment className="menuItem">
      <section>
        <img src={food.image} alt={food.name} />
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            padding: "0 1.2rem",
          }}
        >
          {food.name}
        </p>
      </section>
      <section className="menuItem-footer">
        <p>{food.price}</p>
        <CountButton color="#495E57" />
      </section>
    </fragment>
  );
}

export default MenuItem;
