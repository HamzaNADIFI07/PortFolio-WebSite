import Style from './SkillsStyles.module.css'

import htmlIcon from '../assets/skills/icons8-html-100.png'
import cssIcon from '../assets/skills/icons8-css-100.png'
import jsIcon from '../assets/skills/icons8-javascript-100.png'
import phpIcon from '../assets/skills/icons8-php-logo-100.png'
import javaIcon from '../assets/skills/icons8-logo-java-coffee-cup-100.png'
import pythonIcon from '../assets/skills/icons8-python-100.png'
import cIcon from '../assets/skills/icons8-c-100.png'

import reactIcon from '../assets/skills/icons8-react-native-100.png'
import nodeIcon from '../assets/skills/icons8-nodejs-100.png'
import angularIcon from '../assets/skills/icons8-angularjs-100.png'
import bootstrapIcon from '../assets/skills/icons8-bootstrap-100.png'

import mysqlIcon from '../assets/skills/icons8-mysql-100.png'
import mongodbIcon from '../assets/skills/icons8-mongodb-100.png'

import gitIcon from '../assets/skills/icons8-git-100.png'
import vsCodeIcon from '../assets/skills/icons8-code-studio-visuel-2019-100.png'
import eclipseIcon from '../assets/skills/icons8-eclipse-java-100.png'
import figmaIcon from '../assets/skills/icons8-figma-100.png'


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
                    <div>
                        <img src={reactIcon} alt="REACT" />
                        <img src={nodeIcon} alt="NODEJS" />
                    </div>
                    <div>
                        <img src={angularIcon} alt="ANGULAR" />
                        <img src={bootstrapIcon} alt="BOOTSTRAP" />  
                    </div>      
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