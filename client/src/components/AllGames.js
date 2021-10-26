
import { useEffect, useState } from 'react'
import './App.css'
import './Navbar.css'

function AllGames(props) {

    //const [list, updateList] = useState(games)

    const handleGameDelete = (game) => {
        fetch(`http://localhost:8080/api/videogames/${game.id}`, {
          method: 'DELETE'
        }).then(response => response.json())
        .then(result => { 
            if(result.success) {
                window.location.reload(false)
                
                }
       
        })
        
    }



    const gameItems = props.games.map(game => {
        return <ul key={game.id} id = "gameList">
            <h1>Title: {game.title}</h1>
            <h3>{game.genre}</h3>
            <p>Description: {game.description}</p>
            <h4>Game ID: {game.id}</h4>
            <button className = "button" onClick={() => handleGameDelete(game)}>Delete</button>
        </ul>

    })

        return (
      
        <div >
            {gameItems}
        </div>

    )

}

export default AllGames