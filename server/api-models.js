const axios = require('axios');

module.exports = {
  getRandomProducts: (cb) => {
    axios({
      method: 'get',
      url: 'https://www.freetogame.com/api/games?id=452',
      transformResponse: [(data) => (
        JSON.stringify(data)
      )],
      responseType: 'json'
    }
    )
    .then((res) => {
      cb(null, res)
    })
    .catch((err) => {
      console.error('ERROR?', err)
    })
  }
}