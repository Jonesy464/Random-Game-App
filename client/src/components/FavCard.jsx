import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const FavCard = ({ game, handleRemoveFav }) => (
  <Card>
    <Card.Img variant="top" src={game.thumbnail} style={{ width: '40rem', alignSelf: 'center' }} />
    <Card.Body>
      <Card.Title>{game.title}</Card.Title>
      <Card.Text>{game.short_description}</Card.Text>
    </Card.Body>
    <Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{`Genre: ${game.genre}`}</ListGroup.Item>
        <ListGroup.Item>{`Platform: ${game.platform}`}</ListGroup.Item>
        <ListGroup.Item variant="info" action onClick={() => window.open(game.freetogame_profile_url, '_blank')}>Play Now!</ListGroup.Item>
        <ListGroup.Item value={game.id} variant="success" action onClick={handleRemoveFav}>Remove from Favorites</ListGroup.Item>
      </ListGroup>
    </Card.Body>
    <footer className="blockquote-footer">
      <small className="text-muted">
        developer:
        {' '}
        <cite title="Source Title">{game.developer}</cite>
      </small>
    </footer>
  </Card>
);

export default FavCard;
