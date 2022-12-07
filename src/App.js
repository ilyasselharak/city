import './App.css';
import Header from './components/Header';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Contact from './pages/Contact';
import About from './pages/About';
import HomePage from './pages/HomePage';
import axios from "axios"
import { useEffect,useState } from 'react';
function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route element={<Contact/>} path="/contact"/>
    <Route element={<About/>} path="/about"/>
    </Routes>
    <HomePage/>
    </BrowserRouter>
  );
}

export default App;
