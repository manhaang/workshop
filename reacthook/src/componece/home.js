import React,{ useContext } from "react";
import Context,{Context2} from "../Context";
import logo from '../logo.svg';
const Home = ()=>{
console.log
return (


    <Context.Consumer>
            {({state, setState}) => (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.js</code> and save to load 
                                    <span>{state.content}</span>                      
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="blank"
                            rel = "noopener noreferrer"

                        >
                           Leaen React 
                        </a>


                        
                    </header>


                </div>
            )}




    </Context.Consumer>
)

            }
