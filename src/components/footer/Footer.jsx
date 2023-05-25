import React from "react";
import "./footer.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mlaba</h1>

        <ul className="footer__list">
          <li>
            <a href="/about" className="footer__link">
              About
            </a>
          </li>

          {/* <li>
            <a href="/project" className="footer__link">
              Project
            </a>
          </li> */}

          {/* <li>
            <a href="/test" className="footer__link">
              Testimonal
            </a>
          </li> */}
        </ul>

        <div className="footer__social">
          <a href="https://github.com/Bongumusa9" className="footer__social-link">
            {/* <i className="bx bxl-github"></i> */}
            <FiGithub />
          </a>

          <a href="https://discord.com/channels/725296608308363476/936535801737654293/1111170312420216862" className="footer__social-link">
            {/* <i className="bx bxl-instagram"></i> */}
            <BsDiscord />
          </a>
          {/* <a href="/https://facebook.com/" className="footer__social-link">
            <i className="bx bxl-facebook"></i>
          </a> */}

          <a href="/https://linkedin.com/" className="footer__social-link">
            {/* <i className="bx bxl-linkdin"></i> */}
            <FiLinkedin />
          </a>
        </div>

        <span className="footer__copy">
          &#169; Bongumusa. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
