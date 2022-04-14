import React from 'react'
import "./Nav.css"
import { FaHome, FaUserAlt, FaBookOpen } from 'react-icons/fa'
import { MdMessage } from "react-icons/md"
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActive] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActive("#")} className={activeNav === "#" ? "active" : ""}><FaHome /></a>
      <a href="#about" onClick={() => setActive("#about")} className={activeNav === "#about" ? "active" : ""}><FaUserAlt /></a>
      <a href="#experience" onClick={() => setActive("#experience")} className={activeNav === "#experience" ? "active" : ""}><FaBookOpen /></a>
      <a href="#contact" onClick={() => setActive("#contact")} className={activeNav === "#contact" ? "active" : ""}><MdMessage /></a>
      <a href="#services" onClick={() => setActive("#services")} className={activeNav === "#services" ? "active" : ""}><FaHome /></a>
    </nav>
  )
}

export default Nav