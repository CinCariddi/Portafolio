import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import './Footer.css'

export default function Footer() {
  return (
  <nav id="footer">
    <div className="footer-container">
      <p>ALL RIGHTS RESERVED. COPYRIGHT © 2022. Designed by Cintia Cariddi and Coded by Cintia Cariddi</p>
      <div className="footer-icons">
        <a href='https://github.com/CinCariddi' target='_blank' rel="noreferrer" className="d-flex align-items-center p-0 text-light"><FaGithub className="footerIcon"/></a>
        <a href='https://www.linkedin.com/in/cintiacariddi/' target='_blank' rel="noreferrer" className="d-flex align-items-center p-0 text-light"><FaLinkedin className="footerIcon"/></a>
        <a href='mailto:cintiacariddi@gmail.com' className="d-flex align-items-center p-0 text-light"><IoMail className="footerIcon"/></a>
      </div>
    </div>
  </nav>
)};