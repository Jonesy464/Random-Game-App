import React from 'react';
import RandomCard from './RandomCard.jsx';

const RandomGeneratedList = ({ generated, handleAddFavFromGen }) => (
  <>
    <h3>Recently Generated</h3>
    <div className="randomCards" style={{ display: 'flex' }}>
      {generated.map((generate) => (
        <RandomCard generated={generate} handleAddFavFromGen={handleAddFavFromGen} />
      ))}
    </div>
  </>
);

export default RandomGeneratedList;
