import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Barra from './Components/NavBar/NavBar';
import ClubDeportivo from './Components/Proyectos/ClubDeportivo';
import PokemonApp from './Components/Proyectos/PokemonApp';
import DogApp from './Components/Proyectos/DogApp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Barra />}>
            <Route index element={<Home />}/>
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
