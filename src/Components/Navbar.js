import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import * as Icon from 'react-bootstrap-icons';

const Navbar = () => {
  return (
       <>
       <Router>
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:'#030e21', zIndex:'10', position:'sticky', top: '0'}}>
      <Link className="navbar-brand" style={{marginLeft: '1rem'}} to='/'>
        <Icon.Gear />&nbsp;&nbsp;Ron Owens - Solutions
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
            <i className="bi bi-gear"></i> Home <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Resume">
              Resume
            </Link>
          </li>
          {/* <li  className="nav-item">
            <link className="nav-link" to="/Contact">
              Contact
            </link>
          </li> */}
        </ul>
      </div>
    </nav>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Resume" element={<Resume />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
    </Routes>
    </Router>
    </>
  );
};

export default Navbar;