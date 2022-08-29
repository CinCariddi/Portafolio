import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Barra from './Components/NavBar/NavBar';
import ClubDeportivo from './Components/Proyectos/ClubDeportivo';
import PokemonApp from './Components/Proyectos/PokemonApp';
import DogApp from './Components/Proyectos/DogApp';
import Project from './Components/Proyectos/Projects';
import Habilidades from './Components/Skills/Habilidades';
import Contact from './Components/Contactos/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Barra />}>
            <Route index element={<Home />}/>
            <Route path='clubdeportivo' element={<ClubDeportivo />}/>
            <Route path='proyectos' element={<Project />}/>
            <Route path='habilidades' element={<Habilidades />}/>
            <Route path='contactos' element={<Contact />}/>
            <Route path='pokemon' element={<PokemonApp />}/>
            <Route path='perros' element={<DogApp />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
