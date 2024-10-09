import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import FoodAmount from "../elements/FoodAmount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { DeliContext } from "../sources/contexts/DeliProvider";

function Delivery() {
  const [totalAmount, setTotal] = useState(0);
  const [orders, setOrders] = useState([]);
  const { foodList, deliveryFee } = useContext(DeliContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getMeals = JSON.parse(localStorage.getItem("foodList")) || [];
    setOrders(getMeals);
    getMeals.forEach((item) => {
      setTotal(
        (prev) => prev + parseFloat(item.price.substring(2)) * item.amount
      );
    });
  }, [foodList]);

  return (
    <section id="delivery" aria-label="online delivery page">
      <Header />
      <section className="container deli-container">
        <section className="deli-list" aria-label="food list selection">
          {orders.length > 0 &&
            orders.map((item) => <FoodAmount key={item.id} foodItem={item} />)}
        </section>
        <section id="deli-summary">
          <h2>Order summary</h2>
          <article
            className="deli-summary-details"
            aria-label="delivery summary"
          >
            <button
              className="button add-btn"
              onClick={() => navigate("/menu")}
            >
              <FontAwesomeIcon icon={faPlus} /> &nbsp;&nbsp;Add items
            </button>
            <section className="deli-tag">
              <h4>Subtotal </h4>
              <h3>$ {totalAmount.toFixed(2)}</h3>
            </section>
            <section className="deli-tag">
              <h4>Delivery fee </h4>
              <h3>$ {deliveryFee}</h3>
            </section>
            <section className="deli-tag">
              <h4>Total </h4>
              <h3>$ {(totalAmount + deliveryFee).toFixed(2)}</h3>
            </section>
            <section id="deli-address">
              <label>
                <FontAwesomeIcon icon={faLocationDot} color="#cd0707" />
                <h4>Order destination</h4>
              </label>
              <input
                id="address"
                name="address"
                type="textarea"
                placeholder="Address"
                maxLength="200"
              />
            </section>
            <button className="button deli-submit">Confirm Orders</button>
          </article>
        </section>
      </section>
    </section>
  );
}

export default Delivery;
