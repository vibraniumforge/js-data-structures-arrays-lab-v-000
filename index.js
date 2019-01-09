// Write your solution here!
const drivers =["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name;
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  return [name, ...drivers]
}

function prependDriver(name) {
  newDrivers=drivers.slice()
  newDrivers.unshift(name);
  return newDrivers;
}

function removeLastDriver() {
  newDrivers=drivers.slice()
  newDrivers.pop(name);
  return newDrivers;
}

function removeFirstDriver() {
  newDrivers=drivers.slice()
  newDrivers.shift(name);
  return newDrivers;
}
