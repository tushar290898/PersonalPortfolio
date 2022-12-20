
import { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/projects' element={ <Projects/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      <Footer/>
     </div>
  );
}

export default App;
