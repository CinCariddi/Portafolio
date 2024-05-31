import './Proyects.css'

const urls = {
  'Club Deportivo': '/clubdeportivo',
  'Poke App': '/pokemon',
  "50 Projects 50 Days": "/50projects50days",
  "Estudio Juridico": "/estudiojuridico"
}

export const ProjectCard = ({ title, subtitle, description, imgUrl }) => {
  return (
    <div size={12} className="projectCard" >
      <div className="proj-imgbx" >
        <img src={imgUrl} alt="image not found" className='imgProject'/>
        <a className="proj-txtx withoutDefaultClasses" target='_blank' rel="noreferrer" href={urls[title]}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <span>{description}</span>
        </a>
      </div>
    </div>
  )
}