// Code your solution here

const drivers = [
  { name: 'Vuslat', hometown: 'Pittsburgh' },
  { name: 'Sena', hometown: 'New York' },
  { name: 'Emre', hometown: 'Cleveland' },
  { name: 'Dobby', hometown: 'Los Angeles' },
  { name: 'Harry', hometown: 'Tampa Bay' }
];

function findMatching(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(drivers, query) {
  return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}
