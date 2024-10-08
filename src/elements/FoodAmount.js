import React from "react";

function FoodAmount({ foodItem }) {
  return (
    <section className="orderItem" role="listitem">
      <img src={foodItem.image} alt={foodItem.name} />
      <section className="orderItem-footer">
        <section className="orderItem-name">
          <p>{foodItem.name}</p>
        </section>
        <p className="price">{foodItem.price}</p>
        <section>
          <p className="itemNum">Items: {foodItem.amount}</p>
        </section>
      </section>
    </section>
  );
}

export default FoodAmount;
