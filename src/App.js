import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form'; // Import the form component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route to show the form */}
          <Route path="/" element={<Form />} />

          {/* Route to show the dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
