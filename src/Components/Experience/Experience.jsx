import React from 'react'
import "./Experience.css"
import {FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava} from "react-icons/fa"
import {SiJavascript, SiTailwindcss, SiMongodb, SiPython, SiPostman} from "react-icons/si"
import {BsFillBootstrapFill} from "react-icons/bs"
import {GrMysql} from "react-icons/gr"

function Experience() {
  return (
    <section id="experience">
      <h2>My Skills</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <article className="experience-details">
              <div>
                <h4>HTML</h4>
                <FaHtml5 className="experience-details-icon"/>
                <small className="text-light">Intermediate</small>
              </div>
              
            </article>
            <article className="experience-details">
              <div>
                <h4>CSS</h4>
                <FaCss3Alt className="experience-details-icon"/>
                <small className="text-light">Intermediate</small>
              </div>
              
            </article>
            <article className="experience-details">
              <div>
                <h4>JavaScript</h4>
                <SiJavascript className="experience-details-icon"/>
                <small className="text-light">Intermediate</small>
              </div>
              
            </article>
            <article className="experience-details">
              <div>
                <h4>Bootstrap</h4>
                <BsFillBootstrapFill className="experience-details-icon"/>
                <small className="text-light">Experienced</small>
              </div>
              
            </article>
            <article className="experience-details">
              <div>
                <h4>TailWind</h4>
                <SiTailwindcss className="experience-details-icon"/>
                <small className="text-light">Experienced</small>
              </div>
              
            </article>
            <article className="experience-details">
              <div>
                <h4>React</h4>
                <FaReact className="experience-details-icon"/>
                <small className="text-light">Experienced</small>
              </div>
              
            </article>
          </div>
        </div>
        {/* ---Backend--- */}
        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience-content">
          <article className="experience-details">
              <div>
                <h4>Node JS</h4>
                <FaNodeJs className="experience-details-icon"/>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience-details">
              <div>
                <h4>Mongo DB</h4>
                <SiMongodb className="experience-details-icon"/>
                <small className="text-light">Experienced</small>
              </div>
              
            </article>
            <article className="experience-details">
            <div>
              <h4>Python</h4>
              <SiPython className="experience-details-icon"/>
              <small className="text-light">Intermediate</small>
            </div>
              
            </article>
            <article className="experience-details">
            <div>
              <h4>MySQL</h4>
              <GrMysql className="experience-details-icon" />
              <small className="text-light">Experienced</small>
            </div>
              
            </article>
            <article className="experience-details">
            <div>
              <h4>Java</h4>
              <FaJava className="experience-details-icon"/>
              <small className="text-light">Experienced</small>
            </div>
              
            </article>
            <article className="experience-details">
            <div>
              <h4>Postman Api</h4>
              <SiPostman className="experience-details-icon"/>
              <small className="text-light">Experienced</small>
            </div>
              
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience