'use strict';

//'{"prop":"string", "prop1":2, "propAgain":true}'
var express = require('express'); //express module
var bodyparser = require('body-parser'); //body-parser module
var app = express();
var port = process.env.PORT || 3000;
var Adjective = require('./lib/adjective.js'); //check to see is works.
var getRandomWord = require('./lib/getRandomWord.js');

app.use(express.static(__dirname + '/app/'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true})); //a setting in bodyparser module

// make an adjective constructor function
// var Adjective = function() {
//   this.happy = true;
//   this.sad = true;
//   this.hairy = true;
//   this.insane = true;
//   this.flat = true;
//   this.pathetic = true;
//   this.stinky = true;
// } moved to own file 'adjective.js' in lib
var Verb = function() {
  this.run = true;
  this.sit = true;
  this.stand = true;
  this.lift = true;
  this.drop = true;
  this.flee = true;
}
var Noun = function() {
  this.dog = true;
  this.kitty = true;
  this.muffin = true;
  this.sneaker = true;
  this.sloth = true;
  this.peach = true;
}
// make an instance of that adjective object
var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();

// // make that word retieval function
// function getRandomWord(object) {
//   //get all of those properties into an array
//   var propArray = Object.keys(object);  //puts all Adjective properties into an array
//   //pick random word from array
//   var randomProp = propArray[Math.floor(Math.random() *
//     propArray.length)];
//   //return that word in an object
//   return {word: randomProp};
// }moved to own file 'getRandomWord.js' in lib

function postRandomWord(word, wordObject) {
  //check if the word is on the object (word, wordObject)
  if (!wordObject.hasOwnProperty(word)) {
    //if it's NOT on the object, add it and send a message that we added it.
    wordObject[word] = true;
    return {message: 'Thanks! We added your fabulous word, '
     + word + ', to our list.'}; //'message' is property from script.js
  }
  //if it IS on the object, send a polite message saying we have it
  return {message: 'We already have your word, '
   + word + ', in our list.'};
  //those messages will be the 'return' value of this function
}

app.get('/', function(req, res) { // "/" is the route.
  res.sendFile('index.html');
});

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective)); //call function from adjective object
});

app.post('/adjective', function(req, res) {
  console.log(req.body);                    //check in postman. select "POST", Headers "Content-Type" Value "application/json", "raw"       
  res.json(postRandomWord(req.body.word, adjective));  
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb)); //call function from adjective object
});
app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun)); //call function from adjective object
});
app.listen(port, function() {
  console.log('server started on port ' + port);
});
