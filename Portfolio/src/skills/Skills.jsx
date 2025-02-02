import React from 'react'
import Style from './SkillsStyles.module.css'

import htmlIcon from '../assets/icons8-html-100.png'
import cssIcon from '../assets/icons8-css-100.png'
import jsIcon from '../assets/icons8-javascript-100.png'
import phpIcon from '../assets/icons8-php-logo-100.png'
import javaIcon from '../assets/icons8-logo-java-coffee-cup-100.png'
import pythonIcon from '../assets/icons8-python-100.png'
import cIcon from '../assets/icons8-c-100.png'

import reactIcon from '../assets/icons8-react-native-100.png'
import nodeIcon from '../assets/icons8-nodejs-100.png'
import bootstrapIcon from '../assets/icons8-bootstrap-100.png'

import mysqlIcon from '../assets/icons8-mysql-100.png'
import mongodbIcon from '../assets/icons8-mongodb-100.png'

import gitIcon from '../assets/icons8-git-100.png'
import vsCodeIcon from '../assets/icons8-code-studio-visuel-2019-100.png'
import eclipseIcon from '../assets/icons8-eclipse-java-100.png'
import figmaIcon from '../assets/icons8-figma-100.png'


function Skills() {
  return (
    <div className={Style.skills}>
        <h1 className={Style.title} id='skills'>Skills</h1>
        <div className={Style.skillsContent1}>
            <div className={Style.programmingLanguages}>
                <h2>Programming Languages</h2>
                <div className={Style.icons}>
                    <div>
                        <img src={htmlIcon} alt="HTML" />
                        <img src={cssIcon} alt="CSS" />
                        <img src={jsIcon} alt="JavaScript" />
                        <img src={phpIcon} alt="PHP" />
                    </div>
                    <div>
                        <img src={javaIcon} alt="Java" />
                        <img src={pythonIcon} alt="Python" />
                        <img src={cIcon} alt="C" />
                    </div>
                
                </div>
            </div>
            <div className={Style.frameworks}>
                <h2>Frameworks</h2>
                <div className={Style.icons}>
                    <img src={reactIcon} alt="REACT" />
                    <img src={nodeIcon} alt="NODEJS" />
                    <img src={bootstrapIcon} alt="BOOTSTRAP" />       
                </div>
            </div>
        </div>
        <div className={Style.skillsContent2}>
            <div className={Style.databases}>
                    <h2>Databases</h2>
                    <div className={Style.icons}>
                        <img src={mysqlIcon} alt="MYSQL" />
                        <img src={mongodbIcon} alt="MONGODB" />      
                    </div>
            </div>
            <div className={Style.toolsDevelopment}>
                    <h2>Tools & Development</h2>
                    <div className={Style.icons}>
                        <img src={gitIcon} alt="GIT" />
                        <img src={vsCodeIcon} alt="VSCODE" /> 
                        <img src={eclipseIcon} alt="ECLIPSE" />
                        <img src={figmaIcon} alt="FIGMA" />      
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Skills