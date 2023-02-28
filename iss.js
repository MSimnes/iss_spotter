const request = require('request');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

// commented out for testing but working
// const fetchMyIP = function(callback) {
//   // use request to fetch IP address from JSON API
//   request('https://api.ipify.org/?format=json', (error, response, body) => {
//     if (error) {
//       return callback(error, null);
//     }
//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     } else {
//       const ip = JSON.parse(body).ip;
//       callback(null, ip);
//     }
//   });
// };


// // commented out for testing but working
// const fetchCoordsByIp = function(ip, callback) {
//   request(`http://ipwho.is/${ip}`, (error, response, body) => {
//     if (error) {
//       callback(error, null);
//       return;
//     }
//     const parsedBody = JSON.parse(body);
//     if (!parsedBody.success) {
//       const msg = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message}         when fetching for IP ${parsedBody.ip}`;
//       callback(Error(msg), null);
//       return;
//     }
   
//     const { latitude, longitude } = parsedBody;
//     callback(null, { latitude, longitude });
//   });
// };

// module.exports = { fetchMyIP };
// module.exports = { fetchCoordsByIp };