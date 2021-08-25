import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import GameCard from './GameCard.jsx';
import sampleData from '../sampleData.js';

const App = () => {
  const [game, setGame] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [addedFav, setAddedFav] = useState(false);

  const handleGameClick = () => {
    const randomIndex = Math.floor(Math.random() * 131);
    setGame(sampleData.data[randomIndex]);
  }
  const handleFavorite = (e) => {
    console.log(e.target.value)
      if(!addedFav){
      axios.post('/favorites', game)
      .then((res) => {
        setFavorites([game, ...favorites]);
        setAddedFav(true);
      })
      .catch(err => {
        console.error(err.stack)
      })
    } else {
      const deleteFav = {id: e.target.value}
      axios.delete('/favorites', deleteFav)
      .then(res => {

      })
      .catch(err => {
        console.error(err.stack)
      })
    }
  }
  if (!game.title) {
    return (
      <div>
      <h2>Random Games</h2>
      <Button variant="primary" onClick={handleGameClick}>Genorate A Game!</Button>
      </div>
    )
  } else {
    return (
      <div>
      <h2>Random Games</h2>
      <Button variant="primary" onClick={handleGameClick}>Genorate A Game!</Button>
      <GameCard game={game} handleFavorite={handleFavorite} addedFav={addedFav}/>
      </div>
    )
  }
};

export default App;