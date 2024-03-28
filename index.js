// Code your solution here

const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];


// Define a function findMatching that  takes an array of drivers' names and a string as arguments.
function findMatching(drivers, myString) {
  // // Use the filter method on the drivers array to create and return a new array.
    return drivers.filter(function(sameName) {
      return sameName.toLowerCase() === myString.toLowerCase();
    });
  }
  
const matchingNames = findMatching(drivers, 'bobby');
console.log(matchingNames); 

// define a function fuzzyMatch that takes an array of drivers' names and a string as arguments for querying the array.
function fuzzyMatch(drivers, driverString) {
  // Convert the string to lowercase 
  const lowerCaseDriverString = driverString.toLowerCase();
  
  return drivers.filter(function(driverName) {
    //  to ensure case-insensitive comparison convert driverName to lowercase in each iteration
    // Then compare the beginning of each name with the driverString
    return driverName.toLowerCase().slice(0, driverString.length) === lowerCaseDriverString;
  });
}


// define a function matchName that takes an array of driver objects and a string as arguments.

function matchName(drivers, searchString) {
  // utilize filter method on the array of driver objects.
  return drivers.filter(function(driver) {
      // The callback function checks if the name property of each driver object
      // matches the searchString argument, ignoring case sensitivity.
      return driver.name.toLowerCase() === searchString.toLowerCase();
  });
}
const matchingDrivers = matchName(drivers, 'Bobby');

console.log(matchingDrivers);