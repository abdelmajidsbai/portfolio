import { useState } from 'react'
import {BrowserRouter  as Router, Routes, Link, Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Formation from './components/formation';
import Projects from './components/projects';
import Contact from './components/contact';
import "./index.css";



function App() {
  return (
    <Router>

      <div className="app-container">
      <Navbar />  
      <div className="main-content">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="formation"><Formation /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>

   
    </Router>
  );
}

export default App;