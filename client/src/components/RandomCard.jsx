import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const RandomCard = ({ generated, handleAddFavFromGen }) => {
  const [addedFav, setAddedFav] = useState(false);
  const addToFav = (e) => {
    if (!addedFav) {
      handleAddFavFromGen(e);
      setAddedFav(true);
    }
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={generated.thumbnail} />
      <Card.Title>{generated.title}</Card.Title>
      <Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item variant="info" action onClick={() => window.open(generated.freetogame_profile_url, '_blank')}>Play Now!</ListGroup.Item>
          <ListGroup.Item value={generated.id} variant="success" action onClick={addToFav}>{addedFav ? 'Added' : 'Add to Favorites'}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default RandomCard;
