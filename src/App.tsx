
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Home/Home'
import About from './pages/Home/About'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App

