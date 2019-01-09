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
  return [...drivers, name]
}

function prependDriver(name) {
  return [name, ...drivers]
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
