import { Col } from "react-bootstrap";
import 'animate.css'

export const SkillCard = ({ name, img }) => {
  return (
    <div md={3} >
      {/* <div className="hability animate__animated animate__pulse animate__infinite"> */}
      <div>
        <div >
          <img src={img} className='imgSkill' />
        </div>
        <div>
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  )
}