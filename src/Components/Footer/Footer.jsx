import React from 'react'
import "./Footer.css"
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">Aaron</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="https://github.com/Aaron99G"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/aaron-gonzalez-9078541a4/"><BsLinkedin /></a>
      </div>
    </footer>
  )
}

export default Footer