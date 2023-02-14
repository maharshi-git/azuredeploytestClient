import React from 'react';
import LoginPage from './loginpage';
import RegisterPage from './Registerpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App" style={{ backgroundImage: "url(./circle.jpg)" }}>
      
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route path="/Register" element={<RegisterPage/>} />
       
      </Routes>
    </div>
    
  </Router>
  );
};

export default App;