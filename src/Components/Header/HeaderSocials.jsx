import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


function HeaderSocials() {
  return (
    <div className="header-socials">
        <a href="https://github.com/" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank"><BsLinkedin /></a>
    </div>
  )
}

export default HeaderSocials