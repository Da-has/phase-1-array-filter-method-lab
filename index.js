// 1. Case-insensitive exact match
function findMatching(drivers, query) {
  return drivers.filter(driver =>
    driver.toLowerCase() === query.toLowerCase()
  );
}

// 2. Match names that start with the given letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

// 3. Match by name property in an array of driver objects
function matchName(drivers, nameStr) {
  return drivers.filter(driver =>
    driver.name === nameStr
  );
}
