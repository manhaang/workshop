import React from 'react';
import { Switch, Route, Link,Routes } from "react-router-dom"
import Home from './Page/Home';
import About from './Page/About';
import Topic from './Page/Topic';
import Nav from './components/Nav';
import Notfound from './Page/Notfound';

import './App.css';


export default function App() {
  return (
    <div className='app'>
   

      <Nav/>
      <Routes>
        <Route path="/about" element={<About />} /> 
        <Route path="/Topic" element={<Topic />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>


    </div>
  );
}

