import Style from './AboutStyles.module.css'

import linkedinIcon from '../assets/socialMedia/icons8-linkedin-100.png'
import githubIcon from '../assets/socialMedia/icons8-github-100.png'
import gmailIcon from '../assets/socialMedia/icons8-gmail-100.png'

import CV from '../assets/HamzaNadifiResume.pdf'

function About() {

  return (
    <div className={Style.about}>
        <h1 id='nom'>Hamza NADIFI</h1>
        <h2>Computer science student</h2>
        <div className={Style.icons}>
            <a href="https://github.com/HamzaNADIFI07">
                <img src={githubIcon} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/hamza-nadifi-18840a1a9/">
                <img src={linkedinIcon} alt="linkedin" />
            </a>
            <a href="mailto:nadifihamza07@gmail.com">
                <img src={gmailIcon} alt="gmail" />
            </a>
        </div>
        <p>I am a Bachelor s student in Full-Stack Development, passionate about web development. <br />
        I am currently looking for an apprenticeship to apply my skills and deepen my knowledge.</p>
        <a href={CV} download>
            <button className="cv">Resume</button>
        </a>
        
    </div>
  )
}

export default About