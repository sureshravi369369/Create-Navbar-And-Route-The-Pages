import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from "react-icons/fa"
import "./Navbar.css"

function Navbar(){
    const[icons,setIcons]=useState(false)

    const handleClick=()=>{
        setIcons(!icons)
    }
    
    const closeNavMenu=()=>{
        setIcons(false)
    }
    return(
       <div className="navbar">
            <div className="logo">
                <h3>logo</h3>
            </div>
            <ul className={icons ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/" className="link" onClick={closeNavMenu}>Home</Link>
                </li>
                <li>
                    <Link to="/About" className="link" onClick={closeNavMenu}>About</Link>
                </li>
                <li>
                    <Link to="/Services" className="link" onClick={closeNavMenu}>Services</Link>
                </li>
                <li>
                    <Link to="/Products" className="link"onClick={closeNavMenu}>Products</Link>
                </li>
                <li>
                    <Link to="/Signup" className="link"onClick={closeNavMenu}>Signup</Link>
                </li>
            </ul>
            <div className="icons" onClick={handleClick}>
                {icons ? <FaTimes className="menu"/> : <FaBars className="close"/> }
            </div>
       </div>
    )
}

export default Navbar;