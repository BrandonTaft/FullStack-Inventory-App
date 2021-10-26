
import './App.css';
import React, { useState, useEffect } from 'react';
import AllGames from './AllGames';
import Login from './Login';




function App() {

  //useEffect is hook that allows component to use state and must be imported
  //games will bevalue of state
  //setGames is function that will update the state
  const [games, setGames] = useState([])

  //getAllGames is a function that will fetch json from api then puts it in the state
  // it was made just to clean up the useEffect hook/ looks better
  useEffect(() => { getAllGames() }, [])

  const getAllGames = () => {
    fetch('http://localhost:8080/api/videogames')
      .then(response => response.json())
      .then(games => {
        console.log(games)
        setGames(games)
      })
  }



  return (
    <div>
      <AllGames games={games} />

    </div>
  )

}


export default App
