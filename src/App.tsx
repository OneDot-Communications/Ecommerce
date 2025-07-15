
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Home/Home'
import Profile from './pages/Home/Profile'
import './App.css'
import Signup from './pages/Home/signup'
import About from './pages/Home/About'
import Dashboard from './pages/Dashboard'
import './App.css'
import TermsAndConditions from './pages/Home/TermsAndConditions';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/About" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App

