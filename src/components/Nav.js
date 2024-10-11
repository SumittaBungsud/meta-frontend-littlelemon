import React from "react";
import { navigations } from "../sources/footerLinks";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <nav>
      <ul role="menubar">
        {navigations.map((item) =>
          item.name === "About" ? (
            <li key={item.name} role="link">
              <button
                className="button"
                onClick={async () => {
                  await navigate(item.link);
                  await document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.name}
              </button>
            </li>
          ) : (
            <li key={item.name} role="link">
              <button className="button" onClick={() => navigate(item.link)}>
                {item.name}
              </button>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Nav;
