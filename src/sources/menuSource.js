import axios from "axios";
// Italian food
// https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian

// food description find by id (idMeal)
// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52961

const prices = ["$ 12.99", "$ 7.69", "$ 8.99", "$ 10.49"];

export const getMeals = async () => {
  const result = await axios
    .get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian")
    .then((res) => res.data)
    .catch((err) => console.log(err));

  const addPrice = result.meals.map((food) => {
    return {
      _id: food.idMeal,
      name: food.strMeal,
      image: food.strMealThumb,
      price: prices[Math.floor(Math.random() * prices.length)],
    };
  });

  return addPrice;
};

export const getExternalAPI = async () => {
  const data = await axios
    .get("https://raw.githubusercontent.com/courseraap/capstone/main/api.js")
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return data;
};

export const getLongDate = (date) => {
  const day = date.toString().substring(8, 10);
  const month = date.toString().substring(4, 7);
  const year = date.toString().substring(11, 15);
  const longDate = `${day} ${month} ${year}`;
  return longDate;
};
