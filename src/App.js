import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skill from './Components/Skill/Skill';
import Contact from './Components/Contact/Contact';
import EstudioJuridico from './Components/Projects/EstudioJuridico';
import ProyectosEn50Dias from './Components/Projects/50Proyectos50Dias';
import ClubDeportivo from './Components/Projects/ClubDeportivo';
import Pokemon from './Components/Projects/Pokemon';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='proyectos' element={<Projects />}/>
          <Route path='habilidades' element={<Skill />}/>
          <Route path='contacto' element={<Contact />}/>
          <Route path='estudiojuridico' element={<EstudioJuridico />}/>
          <Route path='50proyectos50dias' element={<ProyectosEn50Dias />}/>
          <Route path='clubdeportivo' element={<ClubDeportivo />}/>
          <Route path='pokemon' element={<Pokemon />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;