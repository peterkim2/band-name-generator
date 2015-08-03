'use strict';

$(function() {

  $("#name").click(function() {
    $.get("adjective", function(response) { //"adjective" is path/route to get from.
      var adjective = response.word; //places response.word property into adjective variable
      $("#adjective").text(adjective); //puts new adjective variable into adjective elemtent(span) in html
    });
    $.get("verb", function(response) { //"verb" is path/route to get from.
      var verb = response.word; //places response.word property into verb variable
      $("#verb").text(verb); //puts new verb variable into noun elemtent(span) in html
    });
    $.get("noun", function(response) { //"noun" is path/route to get from.
      var noun = response.word; //places response.word property into noun variable
      $("#noun").text(noun); //puts new noun variable into noun elemtent(span) in html
    });
  });
//make an event handler that when the button is clicked 
//sends a POST request to our server
  $('#submitAdjective').on('submit', function(e) { //from input type from form
    e.preventDefault(); //prevents jquery to refresh the page

    //get the text entered in the text box and save to a variable
    var adjective = $('input[name=adjective]').val(); //give you value of that selector
    var adjectivePost;

    if (adjective) {
      adjectivePost = {word: adjective}; //word: adjective is object
      $.post('adjective', adjectivePost, function(response) { // post request 'adjective' is route, adjectivePost is the object to send
        var adjectiveRes = response.message;
        $('#adjectiveRes').text(adjectiveRes);
      });
    }
  console.log(adjective); //check to see if value is showing up.
  });
});
  $('#submitVerb').on('submit', function(e) { //from input type from form
    e.preventDefault(); //prevents jquery to refresh the page

    var verb = $('input[name=verb]').val(); //give you value of that selector
    var verbPost;

    if (verb) {
      verbPost = {word: verb}; //word: verb is object
      $.post('verb', verbPost, function(response) { // post request 'verb' is route, verbPost is the object to send
        var verbRes = response.message;
        $('#verbRes').text(verbRes);
      });
    }
  console.log(verb); //check to see if value is showing up.
  });
  $('#submitNoun').on('submit', function(e) { //from input type from form
    e.preventDefault(); //prevents jquery to refresh the page

    var noun = $('input[name=noun]').val(); //give you value of that selector
    var nounPost;

    if (noun) {
      nounPost = {word: noun}; //word: verb is object
      $.post('noun', nounPost, function(response) { // post request 'verb' is route, verbPost is the object to send
        var nounRes = response.message;
        $('#nounRes').text(nounRes);
      });
    }
  console.log(noun); //check to see if value is showing up.
  });
