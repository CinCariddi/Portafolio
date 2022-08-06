import '../Style/Home.css'
import Proyects from './Proyects';
import AboutMe from './AboutMe'
import Footer from './Footer';
import Habilidades from './Habilidades';
import Contact from './Contact';

export default function Home() {
    return (
        <div className='home'>
            <div className='datos'>
                <div className='nombre'>
                    <h1>Cintia Cariddi</h1>
                </div>
                <div className='sobreMi'>
                    <AboutMe />
                </div>
            </div>
            <div className='proyecto'>
                <h3>Proyectos</h3>
                <Proyects />
                <a href='/proyectos'>
                    <button>Ver más</button>
                </a>
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