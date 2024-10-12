import React, { useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import MenuItem from "../elements/MenuItem";
import { getMeals } from "../sources/menuSource";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { DeliContext } from "../sources/contexts/DeliProvider";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [menulist, setMenulist] = useState([]);
  const { foodList } = useContext(DeliContext);
  const navigate = useNavigate();

  useEffect(() => {
    getMeals().then((result) => {
      setMenulist(result);
    });
  }, []);

  return (
    <section id="menu" aria-label="menu list selection page">
      <Header />
      {foodList.length > 0 && (
        <button
          className="button menu-icon"
          onClick={() => navigate("/meta-frontend-littlelemon/delivery")}
        >
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      )}
      <section className="container menu-container">
        <h1>Menu</h1>
        <datalist className="menu-list" role="list">
          {menulist.length > 0 &&
            menulist.map((food) => <MenuItem key={food._id} food={food} />)}
        </datalist>
      </section>
    </section>
  );
}

export default Menu;
