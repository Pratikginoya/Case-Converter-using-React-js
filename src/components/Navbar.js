import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  let location = useLocation();
  useEffect(()=>{

  },[location]);

  return (
    <nav className={`navbar navbar-expand-lg ${props.mode === "dark" ? `bg-${props.mode}` : ""}`} data-bs-theme={props.mode} style={{
      backgroundColor: props.mode === "light" ? "#eaf2f8" : ""
    }}>
        <div className="container-fluid">
          <Link className="navbar-brand mx-5" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">{props.nav_1}</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={props.toggleChange}  
                style={{
                        backgroundColor: props.mode === "dark" ? "#737373" : "",
                        borderColor: props.mode === "dark" ? "#737373" : ""
                      }}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'light' ? 'Enable ' : 'Disable'} Dark Mode</label>
            </div>
          </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    nav_1: PropTypes.string.isRequired
}

// Navbar.defaultProps = {
//     title: 'Default Title Here',
//     nav_1: 'Default Nav_1 Here',
// }
