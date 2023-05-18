import React from 'react'
import './skills.css'
import Backend from './Backend'
import Frontend from './Frontend'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <Frontend/>
        <Backend/>

          {/* <p className="about__description">
            Frontend developer, I created web pages with UI/UX user unterface, I
            have years of experience and many clients are happy with the
            projects carried out.
          </p> */}
        </div>
      
    </section>
  )
}

export default Skills
