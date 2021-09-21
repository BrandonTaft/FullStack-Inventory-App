
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
                props.history.push('/')
                console.log(result)
            }
             
            else{
                window.alert('HMMM...ARE YOU SURE THIS IS YOUR ACCOUNT!!!!')
            }
        })
    }
         
    

    

    return (
        <div id = "boxes">
            <h1>Login Here</h1>
            <input className= "textbox" type = "text" name = "username" onChange = {handleLoginChange} placeholder = "User name" /><br></br>
            <input className= "textbox" type = "password" name = "password" onChange = {handleLoginChange} placeholder = "Password" /><br></br>
            <button className= "button" onClick= {handleLoginButton}>Login</button><br></br>
            Not A Member Yet?<NavLink to = "/register">Register Here</NavLink>
        </div>
    )
}

export default Login





    