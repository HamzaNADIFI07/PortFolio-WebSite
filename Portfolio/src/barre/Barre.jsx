import React from 'react'
import Style from './BarreStyles.module.css'
import logo from '../assets/logo.png'

function Barre() {
  // Fonction pour le défilement fluide
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 250;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className={Style.barre}>
        <div className={Style.logo}>
            <img src={logo} alt="logo" />
        </div>
        <div className={Style.button}>
            <button type="button" onClick={() => scrollToSection('nom')}>About</button>
            <button type="button" onClick={() => scrollToSection('skills')}>Skills</button>
            <button type="button" onClick={() => scrollToSection('projects')}>Projects</button>
            <button type="button" onClick={() => scrollToSection('experiences')}>Experiences</button>
            <button type="button" onClick={() => scrollToSection('certifications')}>Certifications</button>
            <button type="button" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
    </div>
  )
}

export default Barre
