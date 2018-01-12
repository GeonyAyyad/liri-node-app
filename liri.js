var dataKeys = require("./keys.js");
var fs = require('fs');
var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');



}

;var params = {
	screen_name: 'geonyayyadfake',
	limit: 20,
};

if (input1 === "my-tweets") {
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(" ");
    console.log(`These are my last 20 tweets`)
  }

}

 var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&r=json";

  request(urlHit, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = [];
      var jsonData = JSON.parse(body);

      data.push({
      'Title: ' : jsonData.Title,
      'Year: ' : jsonData.Year,
      'Rated: ' : jsonData.Rated,
      'IMDB Rating: ' : jsonData.imdbRating,
      'Country: ' : jsonData.Country,
      'Language: ' : jsonData.Language,
      'Plot: ' : jsonData.Plot,
      'Actors: ' : jsonData.Actors,
      'Rotten Tomatoes Rating: ' : jsonData.tomatoRating,
      'Rotton Tomatoes URL: ' : jsonData.tomatoURL,
  });
      console.log(data);
      writeToLog(data);
}
  });

}