import { Col } from "react-bootstrap";
import './DetailProject.css'

const urls = {
  'Club Deportivo': '/clubdeportivo',
  'Poke App': '/pokemon',
  'Dog App': '/perros'
}

export const ProjectCard = ({ title, subtitle, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx" >
        <img src={imgUrl} className='imgProyecto'/>
        <a className="proj-txtx withoutDefaultClasses" target='_blank' href={urls[title]}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <span className="">{description}</span>
        </a>
      </div>
    </Col>
  )
}