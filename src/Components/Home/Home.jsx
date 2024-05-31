import './Home.css'
import Projects from '../Proyectos/Projects';
import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer';
import Habilidades from '../Skills/Habilidades';
import Contact from '../Contactos/Contact';
import 'animate.css'
import '../../App.css'

export default function Home() {
    return (
        <div className='home'>
            <div className='datos'>
                <AboutMe />
            </div>
            <div className='proyecto'>
                <Projects />
            </div>
            <div>
                <Habilidades />
            </div>
            <div>
                <Contact />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
