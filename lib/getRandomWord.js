'use strict';

module.exports = function (object) {// make that word retieval function

  //get all of those properties into an array
  var propArray = Object.keys(object);  //puts all Adjective properties into an array
  //pick random word from array
  var randomProp = propArray[Math.floor(Math.random() *
    propArray.length)];
  //return that word in an object
  return {word: randomProp};
}