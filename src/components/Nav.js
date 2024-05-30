import React from "react"
import { NavLink } from "react-router-dom"
// import css
// Why is Nav.js greyed out in components folder?

function Nav() {
    return (
        <>
            <header>
                <h1>⏰ HallWize</h1>
            </header>
            <nav>
                <NavLink to="/">Home</NavLink> 
                {/* Add className="" after to for styling */}
                <NavLink to="/studentsummary">Student Summary</NavLink>
                <NavLink to="/about">About</NavLink> 
            </nav>
        </>
    )
  }
  
  export default Nav
