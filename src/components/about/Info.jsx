import React from "react";
import { HiOutlineDesktopComputer, HiOutlineTerminal } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        {/* <i className='bx bx-award about__icon' ></i> */}
        <HiOutlineDesktopComputer className="about__icon" />
        <h3 className="about__title">Experiences</h3>
        <span className="about__subtitle">3 years Working</span>
      </div>

      <div className="about__box">
        {/* <i className='bx bx-briefcase-alt about__icon'></i> */}
        <HiOutlineTerminal className="about__icon" />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">2 Projects</span>
      </div>
    </div>
  );
};

export default Info;
