import React from 'react'
import './Navbar.css'
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link> 
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/services">SERVICES</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
           <Link to="/contact">CONTACT</Link> 
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
    
  )
}

export default Navbar