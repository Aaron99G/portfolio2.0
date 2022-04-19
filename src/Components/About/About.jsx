import React from 'react'
import "./About.css"
import Me from '../../Assets/Me.jpg'
import {FaAward} from "react-icons/fa"

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
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
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>DevMountain Student Developer</small>
            </article>
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>DevMountain Student Developer</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eos ex iure consectetur cum eum ab molestiae reiciendis dicta explicabo incidunt, quaerat possimus nihil magnam, repudiandae id aliquid voluptates voluptas?
          </p>

          <a href="#contact" className="btn btn-primary">Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About