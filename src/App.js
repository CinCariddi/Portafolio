import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Barra from './Components/NavBar';
import Proyects from './Components/Proyects';
import Studies from './Components/Studies';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Barra />}>
            <Route index element={<Home />}/>
            <Route path='sobre' element={<AboutMe />}/>
            <Route path='proyectos' element={<Proyects />}/>
            <Route path='estudio' element={<Studies />}/>
            <Route path='contacto' element={<Contact />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
