import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

function FoodCard({ menu }) {
  return (
    <section className="foodCard-container">
      <section className="foodCard">
        <img src={menu.image} alt={menu.name} />
        <article>
          <section>
            <section
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              aria-label="food name and price"
            >
              <h1>{menu.name}</h1>
              <p style={{ color: "#F48414", fontWeight: "bold" }}>
                {menu.price}
              </p>
            </section>
            <section
              style={{
                textAlign: "start",
                padding: "0 15px",
              }}
              aria-label="food description"
            >
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
