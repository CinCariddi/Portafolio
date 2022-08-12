import '../Style/Home.css'
import Projects from './Projects';
import AboutMe from './AboutMe'
import Footer from './Footer';
import Habilidades from './Habilidades';
import Contact from './Contact';
import { Button } from "./Style";
import 'animate.css'
import '../App.css'

export default function Home() {
    return (
        <div className='home'>
            <div className='datos'>
                <AboutMe />
            </div>
            <div className='proyecto'>
                <Projects />
                <div className='botones'>
                    <div>
                        <a href='/clubdeportivo'>
                            <Button className='btn'>Club Deportivo</Button>
                        </a>
                    </div>
                    <div>
                        <a href='/pokemon'>
                            <Button className='btn'>Poke App</Button>
                        </a>
                    </div>
                    <div>
                        <a href='/perros'>
                            <Button className='btn'>Dog App</Button>
                        </a>
                    </div>
                </div>
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
