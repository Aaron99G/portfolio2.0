import React from 'react'
import "./Footer.css"
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">Aaron</a>
      <ul className="permalinks">
        <li><a href="#"></a>Home</li>
        <li><a href="#"></a>About</li>
        <li><a href="#"></a>Experience</li>
        <li><a href="#"></a>Portfolio</li>
        <li><a href="#"></a>Contact</li>
      </ul>

      <div className="footer-socials">
        <a href="https://github.com/"><FaGithub /></a>
        <a href="https://linkedin.com/"><BsLinkedin /></a>
      </div>
    </footer>
  )
}

export default Footer