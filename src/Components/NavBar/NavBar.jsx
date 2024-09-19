import './NavBar.css'
import { useState } from 'react';
import { Switch } from '../../Modules/Switch';
import { useTheme } from '../../Modules/ThemeContext';

export default function NavBar() {
    const { dark } = useTheme(); 
    const [navActive, setNavActive] = useState(false)
    
    function handleNavbarState() {
        if(navActive === false){
            setNavActive(true)
        } else {
            setNavActive(false)
        }
    }

    return (
        <div className={`content-navBar ${dark ? 'dark-navBar' : 'light-navBar'}`}>
            <div className='content-title'>
                <h2>Cintia Cariddi</h2>
                <Switch />
            </div>
            <nav className='navBar'>
                <ul className='navBar-ul'>
                    <li className='navBar-ul-li'>
                        <a href="/" className='navBar-ul-a'>Inicio</a>
                        <div className='line'></div>
                    </li>
                    <li className='navBar-ul-li'>
                        <a href="#" className='navBar-ul-a'>Proyectos</a>
                        <div className='line'></div>
                    </li>
                    <li className='navBar-ul-li'>
                        <a href="#" className='navBar-ul-a'>Habilidades</a>
                        <div className='line'></div>
                    </li>
                    <li className='navBar-ul-li'>
                        <a href="#" className='navBar-ul-a'>Contacto</a>
                        <div className='line'></div>
                    </li>
                </ul>
            </nav>
            <nav className={`navBar-min ${navActive ?'navBar-min active' : ''}`} id="nav">
            <button className="icon" id="toggle" onClick={handleNavbarState} onMouseOutCapture={() => navActive === true ? handleNavbarState() : null}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                </button>
                <ul>
                    <li>
                        <a  className='navBar-ul-li-a-min' href="/">Inicio</a>
                    </li>
                    <li>
                        <a className='navBar-ul-li-a-min' href="#">Proyectos</a>
                    </li>
                    <li>
                        <a className='navBar-ul-li-a-min' href="#">Habilidades</a>
                    </li>
                    <li>
                        <a className='navBar-ul-li-a-min' href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

