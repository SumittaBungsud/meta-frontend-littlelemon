import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MenuItem from "../components/MenuItem";
import { getMeals } from "../sources/menuSource";

function Menu() {
  const [menulist, setMenulist] = useState([]);

  useEffect(async () => {
    const result = await getMeals();
    setMenulist(result);
  }, []);
  return (
    <div id="menu">
      <Header />
      <div>
        {menulist.map((food) => (
          <MenuItem food={food} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
