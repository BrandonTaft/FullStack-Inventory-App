
import React, { useState, useEffect } from 'react';
import './App.css';



function AddGame(props) {

    const [game, setGame] = useState({})

    const handleAddGame = (e) => {
        setGame({
           
            ...game,
             [e.target.name]: e.target.value
             
        })
    }

   
        
    const postTODB = () => {
        console.log(game)
        fetch("http://localhost:8080/api/videogames", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
                }, 
            body: JSON.stringify(game)
        }).then(response => response.json())
        .then(result => {
            if(result.success) {
                props.history.push('/home')
                }
        })
    }                                                         


            

    return (
            <div id = "boxes">
                <h1>ADD GAME HERE</h1>
                <input className= "textbox" type="text" name="title" onChange={handleAddGame} placeholder="Game Title" /><br></br>
                <input className= "textbox" type="text" name="genre" onChange={handleAddGame} placeholder="Genre" /><br></br>
                <textarea  id = 'description' className= "textbox" type="text" name="description" onChange={handleAddGame} placeholder="Description" /><br></br>
                <button className= "button" onClick={postTODB}>Add Game</button>
            </div>
        )
    

}



export default AddGame