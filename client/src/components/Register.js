import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import './App.css';

function Register(props) {

    const [user, setUser] = useState({})

    const handleRegisterChange = (e) => {
        setUser({
            
            ...user, 
            [e.target.name]: e.target.value
        })
    }
    const handleRegisterButton = () => {
        fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }) .then(response => response.json())
        .then(result => {
            if(result.success) {
                props.history.push('/login')
            } 
            else{
                window.alert('THIS USER ALREADY EXISTS')
            }
        })
        
    }


    return (
        <div id = "boxes">
            <h1>Become A Member</h1>
            <input className= "textbox" type = "text" name = "username" onChange= {handleRegisterChange} placeholder = " Enter Desired User name" required/><br></br>
            <input className= "textbox" type = "password" name = "password" onChange= {handleRegisterChange} placeholder = "Enter Desired Password" required/><br></br>
            <input className= "textbox" type="text" name="firstName" onChange={handleRegisterChange} placeholder="First Name" /><br></br>
            <input className= "textbox" type="text" name="lastName" onChange={handleRegisterChange} placeholder="Last Name"  /><br></br>
            <button className= "button" onClick= {handleRegisterButton}>Login</button>
           
        </div>
    )
}

export default Register


