import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import FavCard from './FavCard.jsx';

const FavoritesList = ({ favorites, handleRemoveFav }) => (
  <>
    <h3>Favorites List</h3>
    <Accordion>
      {favorites.map((favorite, index) => (
        <Accordion.Item eventKey={`${index}`}>
          <Accordion.Header>{`${index + 1}. ${favorite.title}`}</Accordion.Header>
          <Accordion.Body>
            <FavCard game={favorite} handleRemoveFav={handleRemoveFav} />
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  </>
);

export default FavoritesList;
