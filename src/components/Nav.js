import React from "react";
import { navigations } from "../sources/footerLinks";

function Nav() {
  return (
    <nav>
      <ul role="menubar">
        {navigations.map((item) => (
          <li key={item.name} role="link">
            <a role="button" className="button" href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
