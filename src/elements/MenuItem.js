import React from "react";
import CountButton from "./CountButton";

function MenuItem({ food }) {
  return (
    <div className="menuItem">
      <div>
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
      </div>
      <div className="menuItem-footer">
        <p>{food.price}</p>
        <CountButton color="#495E57" />
      </div>
    </div>
  );
}

export default MenuItem;
