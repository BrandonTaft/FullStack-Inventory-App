import { NavLink } from "react-router-dom";


function Menu() {
    return (
        <div id='container'>

            <NavLink to="/logout" className='inactive'>Logout</NavLink>
            <NavLink to="/home" className='inactive' >Home</NavLink>
            <NavLink to="/addgame" className='inactive'>Add A Game</NavLink>

        </div>
    )
}

export default Menu