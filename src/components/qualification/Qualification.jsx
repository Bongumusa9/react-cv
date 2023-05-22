import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification__active button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon">
              Education
            </i>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button qualification__active button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon">
              Experience
            </i>
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Johannesburg - Digital Academy
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2022 - present</i>
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
                <h3 className="qualification__title">Business Analysis NQF Level 6</h3>
                <span className="qualification__subtitle">
                  Johannesburg - SpecCon Holdings (Pty) Ltd
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2022 - present</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Development</h3>
                <span className="qualification__subtitle">
                  Pretoria - Belgium Campus ITversity
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2016 - 2018</i>
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
                <h3 className="qualification__title">
                  Learnership Engineering Manufacturing Processes NQF 2
                </h3>
                <span className="qualification__subtitle">
                  Alrode - WISPECO ALUMINUM
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2012</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Grade 12</h3>
                <span className="qualification__subtitle">
                  Inchanga - Kwa-Thintwa School for the Deaf
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2019</i>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Johannesburg - Digital Academy
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2022 - present</i>
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
                <h3 className="qualification__title">SpecCon</h3>
                <span className="qualification__subtitle">
                  Johannesburg - Digital Academy
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2022 - present</i>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Software Developer Graduated
                </h3>
                <span className="qualification__subtitle">
                  Pretoria - Bothlale Village Subsidiary of Belgium Campus
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2020 - 2021</i>
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
                <h3 className="qualification__title">
                  Software Developer In-Services Training
                </h3>
                <span className="qualification__subtitle">
                  Pretoria - Bothlale Village Subsidiary of Belgium Campus
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">2019 - 2020</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
