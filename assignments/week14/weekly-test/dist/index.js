"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

var _person = _interopRequireDefault(require("./person"));

var _module = require("./module");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var personOne = new _person["default"]("Ratan", 35, "ratan@gmail.com");
var personTwo = new _person["default"]("Tata", 37, "tata@gmail.com");
console.log(personOne.sayHello());
console.log(personTwo.sayHello());
var arrayOne = [2, 5, 6, 23, 48, 39, 71];
var arrayTwo = [{
  name: "Neelam Bailey",
  age: 21
}, {
  name: "Anniyah Clemons",
  age: 34
}, {
  name: "Fatma Saunders",
  age: 41
}, {
  name: "Orla Carroll",
  age: 22
}, {
  name: "Delores Castro",
  age: 24
}, {
  name: "Anushka Marsh",
  age: 38
}, {
  name: "Isabelle Downes",
  age: 24
}, {
  name: "Beverly Weir",
  age: 27
}]; // Sort array

console.log((0, _module.sortArray)(arrayOne)); // Filter array

console.log((0, _module.filterArray)(arrayTwo)); // Reduce and avg

console.log((0, _module.avgAge)(arrayTwo)); // Now with lodash

console.log("With Lodash");

var filteredArray = _lodash["default"].filter(arrayTwo, function (item) {
  return item.age < 30;
});

console.log(filteredArray);

var avAge = _lodash["default"].meanBy(arrayTwo, function (item) {
  return item.age;
}).toFixed(2);

console.log(avAge); // Counter

var clickCounter = function () {
  var times = 0;
  return function () {
    times++;
    console.log(times);
  };
}();

console.log("Click Counter");
clickCounter();
clickCounter();
clickCounter();
clickCounter();
clickCounter();
clickCounter();