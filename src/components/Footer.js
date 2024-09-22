import React from "react";
import logoFooter from "../img/logo_footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigations, contacts, socialMedias } from "../sources/footerLinks";

function Footer() {
  return (
    <footer className="footer-container">
      <div>
        <img src={logoFooter} alt="footer logo" className="footer-logo" />
      </div>
      <div className="footer-body">
        <div className="footer-body-item">
          <h4>Doormat Navigation</h4>
          <ul>
            {navigations.map((item) => (
              <li>
                <a>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-body-item">
          <h4>Contact</h4>
          <ul>
            {contacts.map((item) => (
              <li>
                <p style={{ lineHeight: "0" }}>{item.name} :</p>
                <p style={{ color: "#ffffff" }}>{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-body-item">
          <h4>Social Media</h4>
          <ul>
            {socialMedias.map((item) => (
              <li>
                <FontAwesomeIcon icon={item.icon} />
                <a style={{ marginLeft: "15px" }} href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
