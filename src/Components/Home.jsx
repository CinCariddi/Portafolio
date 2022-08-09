import '../Style/Home.css'
import Projects from './Projects';
import AboutMe from './AboutMe'
import Footer from './Footer';
import Habilidades from './Habilidades';
import Contact from './Contact';
import styled from 'styled-components';
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
                <a href='/projectos'>
                    <Button className='btn'>Ver mas</Button>
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

const Button = styled.div`
    background-color: #9575cd;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 1%;
    height: 5vh;
    display: flex;
    width: 10vw;
    align-items: center;
    justify-content: center;
    font-family: 'Amatic SC', cursive
`