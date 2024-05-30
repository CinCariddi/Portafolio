import './DetailProject.css'

const urls = {
  'Club Deportivo': '/clubdeportivo',
  'Poke App': '/pokemon',
  'Dog App': '/perros'
}

export const ProjectCard = ({ title, subtitle, description, imgUrl }) => {
  return (
    <div size={12} className="projectCard" >
      <div className="proj-imgbx" >
        <img src={imgUrl} alt="image not found" className='imgProyecto'/>
        <a className="proj-txtx withoutDefaultClasses" target='_blank' href={urls[title]}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <span className="">{description}</span>
        </a>
      </div>
    </div>
  )
}