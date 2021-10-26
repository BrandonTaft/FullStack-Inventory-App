import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import Navbar from "./Navbar";
import AddGame from "./AddGame";
import Footer from "./Footer";

function BaseLayout(props) {
    return (
        <div>
           <Menu /> 
           <Navbar />
            {props.children}
            <Footer />
          
          
           
        </div>
    )
}



export default BaseLayout