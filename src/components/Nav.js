import React from "react";
import { NavLink } from "react-router-dom";
// import css

function Nav() {
    return (
        <>
            <header>
                <h1>⏰ HallWize</h1>
            </header>
            <nav>
                <NavLink to="/">Home</NavLink> 
                {/* Add className="" after to for styling */}
                
                <NavLink to="/about">About</NavLink>
               
                <NavLink to="/studentsummary">Student Summary</NavLink>
            </nav>
        </>
    )
  }
  
  export default Nav
