import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import GameCard from './GameCard.jsx';
import FavoritesList from './FavoritesList.jsx';
import RandomGeneratedList from './RandomGeneratedList.jsx';
import sampleData from '../sampleData';
import './styles.css';

const App = () => {
  const [game, setGame] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [generated, setGenerated] = useState([]);
  const [addedFav, setAddedFav] = useState(false);

  const handleGameClick = () => {
    const randomIndex = Math.floor(Math.random() * 131);
    setGame(sampleData.data[randomIndex]);
    setGenerated([sampleData.data[randomIndex], ...generated]);
    setAddedFav(false);
  };
  const handleAddFavorite = () => {
    axios.post('/favorites', game)
      .then(() => {
        setFavorites([...favorites, game]);
      })
      .catch((err) => {
        console.error(err.stack);
      });
  };

  const handleAddFavFromGen = (e) => {
    for (let i = 0; i < generated.length; i++) {
      if (generated[i].id.toString() === e.target.value) {
        console.log('here?');
        const genGame = generated[i];
        axios.post('/favorites', genGame)
          .then(() => {
            setFavorites([...favorites, genGame]);
          })
          .catch((err) => {
            console.error(err.stack);
          });
      }
    }
  };

  const handleRemoveFav = (e) => {
    const deleteFav = { id: e.target.value };
    axios({
      method: 'delete',
      url: '/favorites',
      data: deleteFav,
    })
      .then(() => {
        axios.get('/favorites')
          .then((res) => {
            setFavorites(res.data);
          })
          .catch((err) => {
            Promise.reject(err);
          });
      })
      .catch((err) => {
        Promise.reject(err);
      });
  };

  useEffect(() => {
    axios.get('/favorites')
      .then((res) => {
        setFavorites(res.data);
      })
      .catch((err) => {
        Promise.reject(err);
      });
  }, []);

  if (!game.title) {
    return (
      <div className="app">
        <h2 className="title">Random Games</h2>
        <div className="genButton">
          <Button className="genButton" variant="primary" size="lg" onClick={handleGameClick}>Generate A Game!</Button>
        </div>
        <FavoritesList favorites={favorites} handleRemoveFav={handleRemoveFav} />
      </div>
    );
  }
  return (
    <div className="app">
      <h2 className="title">Random Games</h2>
      <div className="genButton">
        <Button variant="primary" size="lg" onClick={handleGameClick}>Generate A Game!</Button>
      </div>
      <div className="genCard">
        <GameCard
          game={game}
          handleFavorite={handleAddFavorite}
          addedFav={addedFav}
          setAddedFav={setAddedFav}
        />
      </div>
      <Tabs defaultActiveKey="favorites" className="mb-3">
        <Tab eventKey="favorites" title="Favorites">
          <FavoritesList favorites={favorites} handleRemoveFav={handleRemoveFav} />
        </Tab>
        <Tab eventKey="random" title="Recently Generated">
          <RandomGeneratedList generated={generated} handleAddFavFromGen={handleAddFavFromGen} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default App;
