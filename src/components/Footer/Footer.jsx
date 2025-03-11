import React from "react";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Stéphanie Paitre
        </p>
     
      </div>
    </footer>
  );
}

export default Footer;
