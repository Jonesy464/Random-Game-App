const express = require('express');
const apiModels = require('./api-models.js')

const app = express();
const port = 3090;

app.use(express.json());

app.use(express.static('client/dist'));


app.get('/randomGames', (req, res) => {
  apiModels.getRandomProducts((err, data) => {
    if (err) {
      res.sendStatus(500).end('could not get game from model', err.stack);
    }
    console.log('did we get data?', data);
    res.sendStatus(200).end(data);
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});