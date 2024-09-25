import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MenuItem from "../elements/MenuItem";
import { getMeals } from "../sources/menuSource";

function Menu() {
  const [menulist, setMenulist] = useState([]);

  useEffect(() => {
    getMeals().then((result) => {
      setMenulist(result);
    });
  }, []);

  return (
    <fragment id="menu">
      <Header />
      <section className="container menu-container">
        <h1>Menu</h1>
        <datalist className="menu-list">
          {menulist.length > 0 &&
            menulist.map((food) => <MenuItem key={food._id} food={food} />)}
        </datalist>
      </section>
    </fragment>
  );
}

export default Menu;
