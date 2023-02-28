// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIp } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');

// currently commented out but working
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


// currently commented out but working
// fetchCoordsByIp(ip, (error, coords) => {
//   if (error) {
//     console.log("It didn't work: ", error);
//     return;
//   }
//   console.log("It worked! Returned location coordinates :", coords);
// });

// currently commented out but working
// fetchISSFlyOverTimes(coords, (error, times) => {
//   if (error) {
//     console.log("It didn't work: ", error);
//     return;
//   }
//   console.log("It worked! Returned flyover times :", times);
// });