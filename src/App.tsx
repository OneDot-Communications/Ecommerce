import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from './pages/Home/Home'
import Profile from './pages/Home/Profile'
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default App