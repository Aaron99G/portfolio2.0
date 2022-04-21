import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'


function HeaderSocials() {
  return (
    <div className="header-socials">
        <a href="https://github.com/Aaron99G" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/aaron-gonzalez-9078541a4/" target="_blank"><BsLinkedin /></a>
    </div>
  )
}

export default HeaderSocials