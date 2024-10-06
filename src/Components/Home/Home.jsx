import AboutMe from '../AboutMe/AboutMe'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Projects from '../Projects/Projects'
import Skill from '../Skill/Skill'
import './Home.css'

export default function Home() {
    return (
        <div className='content-home relative'>
            <AboutMe />
            <h2 className='home-title' id='proyectos'>PROYECTOS</h2>
            <Projects />
            <h2 className='home-title' id='habilidades'>HABILIDADES</h2>
            <Skill />
            <Contact id='contacto'/>
        </div>
    )
}