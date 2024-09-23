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
    <div id="menu">
      <Header />
      <div className="container menu-container">
        <h1>Menu</h1>
        <div className="menu-list">
          {menulist.length > 0 &&
            menulist.map((food) => <MenuItem key={food._id} food={food} />)}
        </div>
      </div>
    </div>
  );
}

export default Menu;
