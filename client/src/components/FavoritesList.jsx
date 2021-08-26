import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import FavCard from './FavCard.jsx';

const FavoritesList = ({ favorites, handleRemoveFav }) => (
  <>
    <h3>Favorites List</h3>
    <div style={{ display: 'flex' }}>
      {favorites.map((favorite, index) => (
        <FavCard game={favorite} handleRemoveFav={handleRemoveFav} />
      ))}
    </div>
  </>
);

export default FavoritesList;
