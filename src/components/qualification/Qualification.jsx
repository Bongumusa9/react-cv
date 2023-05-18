import React from "react";
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h3 className="skills__title">Qualification</h3>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon">
              Education
            </i>
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon">
              Experience
            </i>
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Johannesburg - Insititute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2012 - present</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">
                  Johannesburg - Insititute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2012 - present</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack</h3>
                <span className="qualification__subtitle">
                  Johannesburg - Insititute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2012 - present</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Cloud</h3>
                <span className="qualification__subtitle">
                  Johannesburg - Insititute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2012 - present</i>
                </div>
              </div>
            </div>
          </div>

          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Johannesburg - Insititute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2012 - present</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">
                  Johannesburg - Insititute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2012 - present</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack</h3>
                <span className="qualification__subtitle">
                  Johannesburg - Insititute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2012 - present</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
