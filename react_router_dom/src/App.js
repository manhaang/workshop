import React from 'react';
import {BrowserRouter as Router  ,Switch,Route,Link ,Routes} from "react-router-dom"

import './App.css';
import Home from './Home';

export default function App() {
  return (
      <Router>
            <nav>
              <ul>
                  <li>
                      <Link to ="/">Home</Link>
                  </li>
                  <li>
                      <Link to ="/about">About</Link>
                  </li>
                  <li>
                      <Link to ="/Topic">Topic</Link>
                  </li>

              </ul>


            </nav>
           
               
                  <Routes>
                    <Route path="/about" element={<About />} />                  
                    <Route path="/Home" element={<Home />} />                  
                
                  
                        
                    

                    </Routes>

           

      </Router>
  );
}

// function Home() {
//   return (
//     <h1>HomePage</h1>
//   )  
  
// }
// function About() {
//   return (
//     <h1>About</h1>
//     )
  
// }
// function Topic() {
//   return (
//     <h1>Topic</h1>
//   )
  
// }