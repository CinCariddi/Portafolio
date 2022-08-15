import colores from '../Style';
import mail from '../../Imagenes/Iconos/mail.png'
import gitbub from '../../Imagenes/Iconos/github.png'
import linkedin from '../../Imagenes/Iconos/linkedin.png'
import './Footer.css'

export default function Footer() {
  return (
  <nav id="footer">
    <div className="container">
      <div className="pull-left fnav">
        <p>ALL RIGHTS RESERVED. COPYRIGHT © 2022. Designed by Cintia Cariddi and Coded by Cintia Cariddi</p>
      </div>
      <div className="pull-right nav">
        <ul className="footer-social">
          <li><a href='https://github.com/CinCariddi' target='_blank' className="d-flex align-items-center p-0 text-light"><img src={gitbub}  alt='This is a Image'/></a></li>
          <li><a href='https://www.linkedin.com/in/cintiacariddi/' target='_blank' className="d-flex align-items-center p-0 text-light"><img src={linkedin}  alt='This is a Image'/></a></li>
          <li><a href='mailto:cintiacariddi@gmail.com' className="d-flex align-items-center p-0 text-light"><img src={mail}  alt='This is a Image'/></a></li>
        </ul>
      </div>
    </div>
  </nav>
)};