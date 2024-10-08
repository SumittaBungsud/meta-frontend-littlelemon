import React, { createContext, useState } from "react";

const DeliContext = createContext(null);

function DeliProvider({ children }) {
  const [foodList, setFoodlist] = useState(
    JSON.parse(localStorage.getItem("foodList")) || []
  );
  const deliveryFee = parseFloat(4.88);
  const addItems = async (item) => {
    await localStorage.setItem("foodList", JSON.stringify([...foodList, item]));
  };

  const deleteFood = (id) => {
    const foodDelete = foodList.find((item) => item.id !== id);

    if (foodDelete == null) {
      localStorage.removeItem("foodList");
      setFoodlist([]);
      // } else if (typeof foodDelete === "array") {
      //   localStorage.setItem("foodList", JSON.stringify(foodDelete));
      //   setFoodlist(foodDelete);
    } else {
      localStorage.setItem("foodList", JSON.stringify([foodDelete]));
      setFoodlist([foodDelete]);
    }
  };

  const updateFood = async (items, amount) => {
    const food = await foodList.find((item) => item.id === items._id);
    const newItem = {
      id: items._id,
      name: items.name,
      image: items.image,
      price: items.price,
      amount: 1,
    };

    if (food) {
      await foodList.forEach((item) => {
        if (item.id === items._id) {
          item.amount += amount;
        }
      });
      localStorage.setItem("foodList", JSON.stringify([...foodList]));
    } else {
      setFoodlist([...foodList, newItem]);
      addItems(newItem);
    }
  };

  const values = {
    deliveryFee,
    foodList,
    updateFood,
    deleteFood,
  };
  return <DeliContext.Provider value={values}>{children}</DeliContext.Provider>;
}

export { DeliProvider, DeliContext };
