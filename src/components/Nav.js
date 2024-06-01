import React from "react"
import { NavLink } from "react-router-dom"

function Nav() {
    return (
        <>
            <header>
                <h1>⏰ HallWize</h1>
            </header>
            <nav>
                <NavLink to="/">Home</NavLink> 

                <NavLink to="/studentsummary">Student Summary</NavLink>
                
                <NavLink to="/about">About</NavLink> 
            </nav>
        </>
    )
  }
  
  export default Nav
