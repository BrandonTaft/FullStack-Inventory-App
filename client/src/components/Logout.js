import { Redirect } from "react-router-dom";


function Logout(props) {

    localStorage.clear();

    return (
        <Redirect to='/' />
    )
}

export default Logout