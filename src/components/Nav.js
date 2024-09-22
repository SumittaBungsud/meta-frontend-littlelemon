import React from "react";
import { navigations } from "../sources/footerLinks";

function Nav() {
  return (
    <nav>
      <ul>
        {navigations.map((item) => (
          <li>
            <a className="button" href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
