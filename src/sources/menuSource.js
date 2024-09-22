import axios from "axios";
// Italian food
// https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian

// food description find by id (idMeal)
// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52961

const prices = ["$ 12.99", "$ 7.69", "$ 8.99", "$ 10.49"];

export const getMeals = async () => {
  const result = await axios
    .get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian")
    .then((res) => res.data.meals);
  return result;
};
