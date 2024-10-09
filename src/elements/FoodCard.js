import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

function FoodCard({ menu }) {
  return (
    <section className="foodCard-container">
      <section className="foodCard">
        <img src={menu.image} alt={menu.name} />
        <article className="foodCard-body">
          <section>
            <section
              className="foodCard-title"
              aria-label="food name and price"
            >
              <h2>{menu.name}</h2>
              <p style={{ color: "#F48414", fontWeight: "bold" }}>
                {menu.price}
              </p>
            </section>
            <section className="foodCard-des" aria-label="food description">
              <p>{menu.description}</p>
            </section>
          </section>
          <section className="foodCard-footer">
            <p>Order Delivery</p>
            <span style={{ paddingLeft: "15px" }}>
              <FontAwesomeIcon icon={faBicycle} />
            </span>
          </section>
        </article>
      </section>
    </section>
  );
}

export default FoodCard;
