import React from "react";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Logo from "../Icons/Logo";
import Tweeter from "../Icons/Tweeter";
import Navbar from "../navbar/Navbar";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row justify-content-space-between align-items-center">
          <div className="footer-area__left">
            <div className="logo">
              <a href={`process.env.PUBLIC_URL`}>
                <Logo />
              </a>
            </div>
            <div className="navigation">
              <Navbar />
            </div>
          </div>
          <div className="footer-area__right">
            <div className="social-icons">
              <a href="#0">
                {" "}
                <Facebook />
              </a>
              <a href="#0">
                {" "}
                <Tweeter />
              </a>
              <a href="#0">
                <Instagram />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
