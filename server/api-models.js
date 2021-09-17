const axios = require('axios');

module.exports = {
  getRandomProducts: (id, cb) => {
    axios({
      method: 'get',
      url: 'https://www.freetogame.com/api/games?id=${id}',
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
