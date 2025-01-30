import React from 'react'; // Add this line at the top
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import WelcomePage from './pages/WelcomePage';

function App() {
  const some = 'some';
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
