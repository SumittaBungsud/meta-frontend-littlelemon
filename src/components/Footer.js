import React from "react";
import logoFooter from "../img/logo_footer.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigations, contacts, socialMedias } from "../sources/footerLinks";

function Footer() {
  return (
    <footer className="footer-container">
      <figure>
        <img
          src={logoFooter}
          alt="little lemon's footer logo"
          className="footer-logo"
        />
      </figure>
      <article className="footer-body">
        <section className="footer-body-item" aria-label="navigation link">
          <h4>Doormat Navigation</h4>
          <ul>
            {navigations.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </section>
        <section className="footer-body-item" aria-label="contact info.">
          <h4>Contact</h4>
          <ul>
            {contacts.map((item) => (
              <li key={item.name}>
                <p style={{ lineHeight: "0" }}>{item.name} :</p>
                <p style={{ color: "#ffffff" }}>{item.value}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="footer-body-item" aria-label="social media links">
          <h4>Social Media</h4>
          <ul>
            {socialMedias.map((item) => (
              <li key={item.name}>
                <FontAwesomeIcon icon={item.icon} />
                <a style={{ marginLeft: "15px" }} href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </footer>
  );
}

export default Footer;
