
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './App.css';


function Login(props) {

    
    const [credentials, setCredentials] = useState({})
    

    const handleLoginChange = (e) => {
        setCredentials({
            
            ...credentials, 
            [e.target.name]: e.target.value
        })
    }

    const handleLoginButton = () => {
        fetch('http://localhost:8080/api/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }) .then(response => response.json())
        .then(result => {
            if(result.success == true) {
                localStorage.setItem('jsonwebtoken', result.token) 
                localStorage.setItem('username', result.username) 
                props.history.push('/home')
                console.log(result)
            }
             
            else{
                window.alert('HMMM...ARE YOU SURE YOU SHOULD BE HERE?')
            }
        })
    }
         
    

    

    return (
        <div id = "boxes">
            <h3 id="title">Login</h3>
            <input className= "textbox" type = "text" name = "username" onChange = {handleLoginChange} placeholder = "User name" /><br></br>
            <input className= "textbox" type = "password" name = "password" onChange = {handleLoginChange} placeholder = "Password" /><br></br>
            <button className= "button" onClick= {handleLoginButton}>Login</button>
           <NavLink id='regLink' to = "/register">Register</NavLink>
        </div>
    )
}

export default Login





    