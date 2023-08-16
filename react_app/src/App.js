import React from 'react';
import { Switch, Route, Link,Routes } from "react-router-dom"
import Home from './Home';
import About from './About';
import Topic from './Topic';

import './App.css';


export default function App() {
  return (
    <div className='app'>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topic">Topic</Link>
          </li>

        </ul>


      </nav>


      <Routes>
        <Route path="/about" element={<About />} /> 
        <Route path="/Topic" element={<Topic />} />
        <Route path="/home" element={<Home />} />
      </Routes>


    </div>
  );
}

