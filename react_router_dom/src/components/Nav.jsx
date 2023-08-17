import React from 'react'
import { Link } from 'react-router-dom'
 

function Nav() {
    return (
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
                <li>
                    <Link to="/Geeeting">Greeting</Link>
                </li>

            </ul>


        </nav>
    )


}
export default Nav