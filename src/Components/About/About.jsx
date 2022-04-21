import React from 'react'
import "./About.css"
import Me from '../../Assets/Me.jpg'
import {FaAward} from "react-icons/fa"

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2> 

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={Me} alt="About Image" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>DevMountain Student Developer</small>
            </article>
          </div>

          <p>
            I am Aaron Gonzalez, a Full Stack Web Developer that is enthusiastic about his work.
            Hobbies include video games, star-gazing, and anything to do about cool new technologies.
            Also a big fan of Studio Ghibli movies.
          </p>

          <a href="#contact" className="btn btn-primary">Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About