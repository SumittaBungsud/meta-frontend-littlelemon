import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

function FoodCard({ menu }) {
  return (
    <div className="foodCard-container">
      <div className="foodCard">
        <img src={menu.image} alt={menu.name} />
        <article>
          <div>
            <div
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1>{menu.name}</h1>
              <p style={{ color: "#F48414", fontWeight: "bold" }}>
                {menu.price}
              </p>
            </div>
            <div
              style={{
                textAlign: "start",
                padding: "0 15px",
              }}
            >
              <p>{menu.description}</p>
            </div>
          </div>
          <div className="foodCard-footer">
            <p>Order Delivery</p>
            <span style={{ paddingLeft: "15px" }}>
              <FontAwesomeIcon icon={faBicycle} />
            </span>
          </div>
        </article>
      </div>
    </div>
  );
}

export default FoodCard;
