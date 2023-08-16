import React from 'react';
import { Switch,Route,Link } from "react-router-dom"

import './App.css';


export default function App() {
  return (
    <div className ='app'>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topic">Topic</Link>
          </li>

        </ul>


      </nav>


      <Switch>

        <Route path="/about" component={About} />
          
        <Route path="/topic" component={Topic} />
        
        <Route path="/" component={Home} />
         

      </Switch>


      </div>
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