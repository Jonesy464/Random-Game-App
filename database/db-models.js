const path = require('path');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'racheljones',
  host: 'localhost',
  database: 'mvp',
  port: 5432,
})

const getAllFavorites = (cb) => {
  const query = 'SELECT * FROM games.favorites';
  pool.query(query, null, (err, results) => {
    if (err) {
    cb(err);
    }
    cb(null, results.rows);
  })
}

const postFavorite = (fav, cb) => {
  const query = 'INSERT INTO games.favorites(game_id, title, genre, platform, \
    thumbnail, short_description, freetogame_profile_url, developer) \
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
    const values = [
      fav.id,
      fav.title,
      fav.genre,
      fav.platform,
      fav.thumbnail,
      fav.short_description,
      fav.freetogame_profile_url,
      fav.developer
    ]
  pool.query(query, values, (err, results) => {
    if (err) {
    cb(err);
    }
    cb(null, 200);
  })
}

const removeFavorite = (fav, cb) => {
  const query = `DELETE FROM games.favorites WHERE game_id=${fav.game_id}`
  pool.query(query, null, (err, results) => {
    if (err) {
    cb(err);
    }
    cb(null, 200);
  })
}

module.exports = {
  getAllFavorites,
  postFavorite,
  removeFavorite,
}