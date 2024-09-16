import React from "react";
import Nav from "./Nav.js";
import logoImg from "../../public/img/Logo.svg";

function Header() {
  return (
    <header>
      <img src={logoImg} />
      <Nav />
    </header>
  );
}

export default Header;
