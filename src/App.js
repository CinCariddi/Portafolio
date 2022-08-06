import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Barra from './Components/NavBar';
import DetailProyect from './Components/DetailProyect';
import Studies from './Components/Studies';
import Contact from './Components/Contact';
import ClubDeportivo from './Components/ClubDeportivo';
import PokemonApp from './Components/PokemonApp';
import DogApp from './Components/DogApp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Barra />}>
            <Route index element={<Home />}/>
            <Route path='proyectos' element={<DetailProyect />}/>
            <Route path='clubdeportivo' element={<ClubDeportivo />}/>
            <Route path='pokemon' element={<PokemonApp />}/>
            <Route path='perros' element={<DogApp />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
