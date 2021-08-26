const express = require('express');
const apiModels = require('./api-models');
const db = require('../database/db-models');

const app = express();
const port = 3090;

app.use(express.json());

app.use(express.static('client/dist'));

app.get('/favorites', (req, res) => {
  db.getAllFavorites((err, data) => {
    if (err) {
      res.sendStatus(500).send('could not get favorites', err.stack);
    }
    res.send(data);
  });
});

app.post('/favorites', (req, res) => {
  db.postFavorite(req.body, (err) => {
    if (err) {
      res.sendStatus(500).send('could not add to favorites', err.stack);
    }
    res.sendStatus(200);
  });
});

app.delete('/favorites', (req, res) => {
  db.removeFavorite(req.body, (err) => {
    if (err) {
      res.status(500).send('could not delete favorite', err.stack);
    }
    res.sendStatus(200);
  });
});

app.get('/randomGames', (req, res) => {
  apiModels.getRandomProducts((err, data) => {
    if (err) {
      res.sendStatus(500).end('could not get game from model', err.stack);
    }
    console.log('did we get data?', data);
    res.sendStatus(200).end(data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});