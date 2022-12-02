import './App.css';
import { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import axios from 'axios';

function App() {
  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character`)
.then(response=>{console.log(response.data.results[0].image)})
.catch(err=>{console.log(err)})
  },[])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<About/>} path='/about'/>
        <Route path="/" element={<HomePage/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;