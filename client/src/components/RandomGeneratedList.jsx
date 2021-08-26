import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import RandomCard from './RandomCard.jsx';

const RandomGeneratedList = ({ generated, handleAddFavFromGen }) => (
  <>
    <h3>Recently Generated</h3>
    {generated.map((generated) => (
      <RandomCard generated={generated} handleAddFavFromGen={handleAddFavFromGen} />
    ))}
  </>
);

export default RandomGeneratedList;
