
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Home/Home'

import About from './pages/Home/About'
import Dashboard from './pages/Dashboard'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TermsAndConditions from './pages/Home/TermsAndConditions';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App

