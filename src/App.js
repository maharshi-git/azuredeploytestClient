import React from 'react';
import LoginPage from './loginpage';
import RegisterPage from './Registerpage';
import FileUploaderMod from './fileUploader';
import TopToolbar from './topToolbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <TopToolbar></TopToolbar>
      <Router>
        <div className="App" style={{ backgroundImage: "url(./circle.jpg)" }}>

          <Routes>
            <Route exact path="/Login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/" element={<FileUploaderMod />} />

          </Routes>
        </div>

      </Router>
    </>

  );
};

export default App;