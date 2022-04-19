import React from 'react'
import "./Header.css"
import CTA from './CTA'
import Me from '../../Assets/Me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header-container">
            <h5>Hello, I am</h5> 
            <h1>Aaron Gonzalez</h1>
            <h5 className="text-light">Fullstack Dev</h5>
            <CTA />
            <HeaderSocials />

            <div className="me">
                <img src={Me} alt="me" className="mypic" />
            </div>

            <a href="#Contact" className="scroll-down"></a>
        </div>
    </header>
  )
}

export default Header