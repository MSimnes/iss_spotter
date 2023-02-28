const request = require('request-promise-native');

const fetchMyIp = function() {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = function(body) {
  const parsedIP = JSON.parse(body).ip;
  return request(`http://ipwho.is/${parsedIP}`);
};


module.exports = {
  fetchMyIp,
  fetchCoordsByIP
};