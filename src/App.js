import React from 'react';
import './App.scss';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import Homepage from './Homepage/Homepage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import PieChart from './Chart/PieChart';
import D3Chart from './Chart/D3Chart';


function App(){
  return (
    <Router>
     <Menu/>
     <Hero/>
     <div className = "mainContainer">

     <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Homepage />} />
      </Routes>

  <div>
     <PieChart/>
     <D3Chart/>
  </div>

     </div> 
     <Footer/>
    </Router>
  );
}

export default App;
