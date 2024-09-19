import AboutMe from '../AboutMe/AboutMe'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Projects from '../Projects/Projects'
import Skill from '../Skill/Skill'
import './Home.css'

export default function Home() {
    return (
        <div className='content-home relative'>
            <NavBar />
            <AboutMe />
            <Projects />
            <Skill />
            <Footer />
        </div>
    )
}