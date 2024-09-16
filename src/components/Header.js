import React from "react";
import Nav from "./Nav";
import logoImg from "..//img/Logo.svg";

function Header() {
  return (
    <header>
      <img src={logoImg} alt="little lemon logo" />
      <Nav />
    </header>
  );
}

export default Header;
