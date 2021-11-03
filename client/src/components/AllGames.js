import Navbar from './Navbar';
import Menu from './Menu';
import './App.css'

function AllGames(props) {

    const handleGameDelete = (game) => {
        fetch(`http://localhost:8081/api/videogames/${game.id}`, {
            method: 'DELETE'
        }).then(response => response.json())
            .then(result => {
                if (result.success) {
                    window.location.reload(false)
                }
            })
    }


    const gameItems = props.games.map(game => {
        return <ul key={game.id} id="gameList">
            <h3> {game.title}</h3>
            <h5>{game.genre}</h5>
            <p>Description: {game.description}</p>
            <h4>Product ID: {game.id}</h4>
            <button className="button" onClick={() => handleGameDelete(game)}>Delete</button>
        </ul>

    })

    return (
        <div >
            <Menu />
            <Navbar />
            {gameItems}
        </div>
    )
}

export default AllGames