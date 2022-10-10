import Home from './components/Home/Home'
import AbmSection from './components/AbmSection/AbmSection';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abm" element={<AbmSection />} /> 
      </Routes>
    </Router>
  );
}

export default App;
