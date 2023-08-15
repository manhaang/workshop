import React from 'react';
import {BrowserRouter as Router ,Switch,Route,Link} from "react-router-dom"

import './App.css';

export default function App() {
  return (
      <Router>
            <nav>
              <ul>
                  <li>
                      <Link to ="/">Home</Link>
                  </li>
                  <li>
                      <Link to ="/About">About</Link>
                  </li>
                  <li>
                      <Link to ="/Topic">Topic</Link>
                  </li>

              </ul>


            </nav>
                <Switch>
                    <Route path='/About'>
                            <About />
                    </Route>
                    <Route path='/Topic'>
                            <Topic />
                    </Route>
                    <Route path='/'>
                            <Home />
                    </Route>


                </Switch>

      </Router>
  );
}

function Home() {
  return (
    <h1>HomePage</h1>
    
  )
}
function About() {
  return (
    <h1>About</h1>
    
  )
}
function Topic() {
  return (
    <h1>Topic</h1>
    
  )
}