'use strict';

$(function() {

  $("#name").click(function() {
    $.get("adjective", function(response) { //"adjective" is path/route to get from.
      var adjective = response.word; //places response.word property into adjective variable
      $("#adjective").text(adjective); //puts new adjective variable into adjective elemtent(span) in html
    });
    $.get("verb", function(response) { //"adjective" is path/route to get from.
      var verb = response.word; //places response.word property into adjective variable
      $("#verb").text(verb); //puts new adjective variable into adjective elemtent(span) in html
    });
    $.get("noun", function(response) { //"adjective" is path/route to get from.
      var noun = response.word; //places response.word property into adjective variable
      $("#noun").text(noun); //puts new adjective variable into adjective elemtent(span) in html
    });
  });
//make an event handler that when the button is clicked 
//sends a POST request to our server
  $('#submitWords').on('submit', function(e) { //from input type from form
    e.preventDefault(); //prevents jquery to refresh the page

    //get the text entered int the text box and save to a variable
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