import { Col } from "react-bootstrap";
import '../Style/DetailProject.css'

export const ProjectCard = ({ title, subtitle, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} height='350px'/>
        <div className="proj-txtx">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}