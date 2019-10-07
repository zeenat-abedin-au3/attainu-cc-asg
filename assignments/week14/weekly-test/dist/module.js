"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.avgAge = exports.filterArray = exports.sortArray = void 0;

var sortArray = function sortArray(arr) {
  return arr.sort(function (x, y) {
    return x - y;
  });
};

exports.sortArray = sortArray;

var filterArray = function filterArray(arr) {
  return arr.filter(function (item) {
    return item.age < 30;
  });
};

exports.filterArray = filterArray;

var avgAge = function avgAge(arr) {
  var length = arr.length;
  var avg = arr.reduce(function (sum, item) {
    return sum + item.age;
  }, 0) / length;
  return avg.toFixed(2);
};

exports.avgAge = avgAge;