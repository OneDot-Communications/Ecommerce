import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TermsAndConditions from './pages/Home/TermsAndConditions';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
