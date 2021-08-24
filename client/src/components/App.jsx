import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import GameCard from './GameCard.jsx';
import sampleData from '../sampleData.js'

const App = () => {
  const [game, setGame] = useState({});

  const handleGameClick = () => {
    const randomIndex = Math.floor(Math.random() * 131);
    setGame(sampleData.data[randomIndex]);
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
      <GameCard game={game}/>
      </div>
    )
  }
};

export default App;