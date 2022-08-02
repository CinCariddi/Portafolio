import '../Style/Home.css'
import Proyects from './Proyects';
import AboutMe from './AboutMe'

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
        </div>
    );
}