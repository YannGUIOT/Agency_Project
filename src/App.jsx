
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,   // Renommer généralement en Router (optionnel)
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projets from './pages/Projets';
import StudyCase from './components/StudyCase/StudyCase';

function App() {


  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Projets />} />
            <Route path="/works/:studyCaseSlug" element={<StudyCase />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
