import React, { useState } from "react"
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"



function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false)

    //change button from off to on at on click
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }


    return (
        <nav className="navBar">
          <div id= 'buttonBox'>  
            <button onClick={handleToggle}>{navbarOpen ? (
                <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />) : (
                <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
            )}</button>
            </div>
            <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                <NavLink to="/login" activeClassName="active-link" onClick={() => closeMenu()} exact>Login</NavLink>
                <NavLink to="/" activeClassName="active-link" onClick={() => closeMenu()} exact>AllGames</NavLink>
                <NavLink to="/AddGame" activeClassName="active-link" onClick={() => closeMenu()} exact>AddGames</NavLink>



            </ul>
        </nav>
    )
}

export default Navbar