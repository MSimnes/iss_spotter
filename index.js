const { nextISSTimesForMyLocation } = require('./iss');

/**
 * Prints out the time and duration of each pass of the ISS.
 * @param {[Object]} passTimes - An array of objects representing each pass of the ISS.
 */
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
/**
 * Actual function to initiate chained callbacks
 */
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It did not work: ", error);
  }
  printPassTimes(passTimes);
});