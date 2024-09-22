import React from "react";
import Nav from "./Nav";
import logoImg from "../img/Logo.svg";

function Header() {
  return (
    <header>
      <a href="#home">
        <img src={logoImg} alt="little lemon logo" />
      </a>
      <Nav />
    </header>
  );
}

export default Header;
