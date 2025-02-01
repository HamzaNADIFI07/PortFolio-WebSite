import React from 'react'
import Style from './BarreStyles.module.css'
import logo from '../assets/logo.png'
import about from '../about/About.jsx'

function Barre() {
  return (
    <div className={Style.barre}>
        <div className={Style.logo}>
            <img src={logo} alt="logo" />
        </div>
        <div className={Style.button}>
            <button type="button" target={about}>About</button>
            <button type="button">Skills</button>
            <button type="button">Projects</button>
            <button type="button">Experiences</button>
            <button type="button">Certifications</button>
            <button type="button">Contact</button>
        </div>
    </div>
  )
}

export default Barre