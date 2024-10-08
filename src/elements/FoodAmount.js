import React from "react";

function FoodAmount({ foodItem }) {
  return (
    <section style={{ padding: "2rem" }}>
      <img src={foodItem.image} alt={foodItem.name} />
      <p>{foodItem.name}</p>
      <p>{foodItem.price}</p>
      <p>{foodItem.amount}</p>
    </section>
  );
}

export default FoodAmount;
