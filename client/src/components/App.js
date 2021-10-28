import './App.css';
import React, { useState, useEffect } from 'react';
import AllGames from './AllGames';
import history from "../History"


function App(props) {

  //useEffect is hook that allows component to use state
  //setGames is function that will update the state
  const [games, setGames] = useState([])

  //getAllGames will fetch json from api then puts it in the state
  //using it to try to clean up the useEffect hook/ looks better
  useEffect(() => {
    const getAllGames = () => {
      const token = localStorage.getItem('jsonwebtoken')

      fetch('http://localhost:8080/api/videogames', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

        .then(response => response.json())
        .then(games => {
          if (games.success === false) {
            history.push('/')
          } else {
            setGames(games)
          }
        })
    }
    getAllGames()
  }, [])


  return (
    <div>
      <AllGames games={games} />
    </div>
  )
}


export default App
