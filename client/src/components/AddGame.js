import Navbar from './Navbar';
import Menu from './Menu';
import React, { useState } from 'react';
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


        fetch("http://localhost:8080/api/videogames", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(game)
        }).then(response => response.json())
            .then(result => {
                if (result.success) {
                    props.history.push('/home')
                }
            })
    }




    return (
        <div>
            <Menu />
            <Navbar />
            <div id="add-reg-boxes">
                <h3 id="addGame">ADD GAME</h3>
                <input className="add-textbox" type="text" name="title" onChange={handleAddGame} placeholder="Game Title" /><br></br>
                <input className="add-textbox" type="text" name="genre" onChange={handleAddGame} placeholder="Genre" /><br></br>
                <textarea id='add-description' className="textbox" type="text" name="description" onChange={handleAddGame} placeholder="Description" />
                <button className="add-button" onClick={postTODB}>SUBMIT</button>
            </div>
        </div>
    )


}



export default AddGame