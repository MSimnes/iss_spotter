const {fetchMyIp, fetchCoordsByIP } = require('./iss_promised');

fetchMyIp()
  .then(fetchCoordsByIP)
  .then((body) => console.log(body));