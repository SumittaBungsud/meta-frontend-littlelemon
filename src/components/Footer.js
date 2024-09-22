import React from "react";
import logoFooter from "../img/logo_footer.png";

function Footer() {
  return (
    <footer className="footer-container">
      <div>
        <img src={logoFooter} alt="footer logo" className="footer-logo" />
      </div>
      <div className="footer-body">
        <div className="footer-body-item">
          <h5>Doormat Navigation</h5>
        </div>
        <div className="footer-body-item">
          <h5>Contact</h5>
        </div>
        <div className="footer-body-item">
          <h5>Social Media</h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
