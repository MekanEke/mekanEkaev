import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className="gmail_Add">
          <p>Gmail Address</p>
          <div className="ahref">
            <a href=" /bookcrossingiuhd@gmail.com">
              bookcrossingiuhd@gmail.com
            </a>
          </div>
        </div>
        <div className="telNumber">
          <h5>Telephone number</h5>
          <ul>
            <ol>+993 61 98 46 77</ol>
            <ol>+993 63 13 68 16</ol>
            <ol>+993 62 26 50 36</ol>
          </ul>
        </div>
        <div className="adress">
          <h5> Address </h5>
          <p>International University for the Humanities and Development</p>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <footer>
        <span>Since 2022</span>
      </footer>
    </div>
  );
};

export default Footer;
