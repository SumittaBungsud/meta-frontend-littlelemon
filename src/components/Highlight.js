import React from "react";
import FoodCard from "../elements/FoodCard";
import greekSaladImg from "../img/greek salad.jpg";
import bruchettaImg from "../img/bruchetta.svg";
import dessertImg from "../img/lemon dessert.jpg";

const menuHighlight = [
  {
    name: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    image: greekSaladImg,
    price: "$ 12.99",
  },
  {
    name: "Bruchetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    image: bruchettaImg,
    price: "$ 5.99",
  },
  {
    name: "Lemon Dessert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.",
    image: dessertImg,
    price: "$ 12.99",
  },
];

function Highlight() {
  return (
    <section className="highlight-container" aria-label="highlight">
      <article className="highlight-header">
        <h1>This weeks specials!</h1>
        <button className="button">Online Menu</button>
      </article>
      <datalist
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          padding: "3rem auto",
        }}
        aria-label="highlight special list"
      >
        {menuHighlight.map((menu) => (
          <FoodCard key={menu.name} menu={menu} />
        ))}
      </datalist>
    </section>
  );
}

export default Highlight;
