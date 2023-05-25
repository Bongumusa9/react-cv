import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Social = () => {
  return (
    <div className="home__social">
      {/* <a href="https://instagram.com/" className="home__social-icon">
        <i className="uil uil-instagram"></i>
      </a> */}

      <a href="https://github.com/Bongumusa9" className="home__social-icon">
        {/* <i className="uil uil-github-alt"></i> */}
        <FiGithub />
      </a>

      <a href="https://www.linkedin.com/" className="home__social-icon">
        {/* <i className="uil uil-linkedin-alt"></i> */}
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Social;
