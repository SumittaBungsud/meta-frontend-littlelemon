import React, { useEffect, useState } from "react";
import { navigations } from "../sources/footerLinks";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const navigate = useNavigate();
  const [winWidth, setWin] = useState(0);
  const [open, setOpen] = useState(false);
  const navigateMenu = navigations.map((item) =>
    item.name === "About" ? (
      <li key={item.name} role="link">
        <button
          className="button menu-btn"
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
        <button className="button menu-btn" onClick={() => navigate(item.link)}>
          {item.name}
        </button>
      </li>
    )
  );

  useEffect(() => {
    const handleResize = (e) => {
      setWin(e.target.innerWidth);
    };

    setOpen(false);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [winWidth, open]);

  return winWidth > 760 ? (
    <nav>
      <ul id="menubar" role="menubar">
        {navigateMenu}
      </ul>
    </nav>
  ) : (
    <nav>
      <FontAwesomeIcon
        icon={faBars}
        onClick={() => setOpen(!open)}
        className="menubar-icon"
      />
      <div
        style={{ visibility: open ? "visible" : "hidden" }}
        className="menubar-option"
      >
        <ul id="menubar" role="menubar">
          {navigateMenu}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
