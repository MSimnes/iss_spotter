const request = require('request-promise-native');

const fetchMyIp = function() {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = function(body) {
  const parsedIP = JSON.parse(body).ip;
  return request(`http://ipwho.is/${parsedIP}`);
};

const fetchISSFlyOverTimes = function(body) {
  const {latitude, longitude} = JSON.parse(body);
  const URL = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(URL);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIp()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };