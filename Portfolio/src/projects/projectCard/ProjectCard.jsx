import Style from './ProjectCardStyles.module.css'



function ProjectCard({ImgSource, ProjectName, ProjectDescription, CodeSource, Demo}) {
  return (
    <div className={Style.projectCard}>
        <img className={Style.projectImg} src={ImgSource} alt={ProjectName} />
        <h3 className={Style.projectName}>{ProjectName}</h3>
        <p className={Style.projectDescription}>{ProjectDescription}</p>
        <a href={CodeSource}>
            <button className={Style.codeSource}>Code Source</button>
        </a>
        <a href={Demo}>
            <button className={Style.demo}>Demo</button>
        </a> 
    </div>
  )
}

export default ProjectCard