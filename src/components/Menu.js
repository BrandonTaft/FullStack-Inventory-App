

import { NavLink } from "react-router-dom";
import './Menu.css'



function Menu() {
    return (
        <div id='container'>

            <NavLink to="/login" className='inactive'>Login</NavLink>
            <NavLink to="/" className='inactive' >Home</NavLink>
            <NavLink to="/AddGame" className='inactive'>Add A Game</NavLink>
                       
                



        </div>
    )
}

export default Menu