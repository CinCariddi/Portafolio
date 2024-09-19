import "./Footer.css"
import { useTheme } from '../../Modules/ThemeContext';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { ImMail } from "react-icons/im";

export default function Footer() {
    const { dark } = useTheme(); 
    return (
        <div className={`content-footer ${dark ? 'dark-footer' : 'light-footer'}`}>
            <div className="footer-icons">
                <a href='https://github.com/CinCariddi' target='_blank' rel="noreferrer" className="d-flex align-items-center p-0 text-light"><FaGithubSquare className="footerIcon"/></a>
                <a href='https://www.linkedin.com/in/cintiacariddi/' target='_blank' rel="noreferrer" className="d-flex align-items-center p-0 text-light"><FaLinkedin className="footerIcon"/></a>
                <a href='mailto:cintiacariddi@gmail.com' className="d-flex align-items-center p-0 text-light"><ImMail className="footerIcon"/></a>
            </div>
            <p className="footer-p">ALL RIGHTS RESERVED. COPYRIGHT © 2022. Designed by Cintia Cariddi and Coded by Cintia Cariddi</p>
        </div>
    )
}