import { Col } from "react-bootstrap";
import 'animate.css'

export const SkillCard = ({ name, img }) => {
  return (
    <Col md={3}>
      <div className="hability animate__animated animate__pulse animate__infinite">
        <img src={img} height='100px' width='100px'/>
        <div>
          <h2>{name}</h2>
        </div>
      </div>
    </Col>
  )
}