import React, { useContext } from "react";
import CountButton from "./CountButton";
import { DeliContext } from "../sources/contexts/DeliProvider";

function MenuItem({ food }) {
  const { updateFood, deleteFood } = useContext(DeliContext);

  const addCallback = () => {
    const getMeals = JSON.parse(localStorage.getItem("foodList")) || [];
    const foodItem = getMeals.find((item) => item.id === food._id) || [];
    if (foodItem && foodItem.amount === 10) {
      return;
    }
    updateFood(food, 1);
  };

  const deductCallback = () => {
    const getMeals = JSON.parse(localStorage.getItem("foodList")) || [];
    const foodItem = getMeals.find((item) => item.id === food._id) || [];
    if (foodItem && foodItem.amount === 1) {
      deleteFood(food._id);
    } else if (foodItem) {
      updateFood(food, -1);
    } else {
      return;
    }
  };

  return (
    <section className="menuItem" role="listitem">
      <img src={food.image} alt={food.name} />
      <section className="menuItem-body">
        <section className="menuItem-name">
          <p>{food.name}</p>
        </section>
        <section className="menuItem-footer">
          <p className="price">{food.price}</p>
          <CountButton
            color="#495E57"
            addCallback={addCallback}
            deductCallback={deductCallback}
            id={food._id}
          />
        </section>
      </section>
    </section>
  );
}

export default MenuItem;
