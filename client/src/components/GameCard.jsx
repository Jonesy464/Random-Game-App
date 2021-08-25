import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

const GameCard = ({ game, handleFavorite, addedFav }) => (
<Card style={{ width: '40rem' }}>
  <Card.Img variant="top" src={game.thumbnail} />
  <Card.Body>
  <Card.Title>{game.title}</Card.Title>
  <Card.Text>{game.short_description}</Card.Text>
  </Card.Body>
  <Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroup.Item>{`Genre: ${game.genre}`}</ListGroup.Item>
    <ListGroup.Item>{`Platform: ${game.platform}`}</ListGroup.Item>
    <ListGroup.Item variant="info" action href={game.freetogame_profile_url}>Play Now!</ListGroup.Item>
    <ListGroup.Item value={game.id} variant="success" action onClick={handleFavorite}>{addedFav ? 'Remove from Favorites' : 'Add to Favorites'}</ListGroup.Item>
  </ListGroup>
  </Card.Body>
  <footer className="blockquote-footer">
        <small className="text-muted">
          developer: <cite title="Source Title">{game.developer}</cite>
        </small>
      </footer>
  </Card>
);

export default GameCard;