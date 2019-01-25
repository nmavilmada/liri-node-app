// add code to read and set any environment variables with the dotenv package:
require("dotenv").config();
// add the code required to import the keys.js file and store it in a variable.
var keys = require("./keys.js");
// You should then be able to access your keys information like so
// other variables
var fs = require("fs");
var Spotify = require("node-spotify-api");
var spot = new Spotify(keys.spotify)
var axios = require("axios");
var moment = require("moment");
//  create node argument array 
var liriCommand = process.argv[2];
var nodeArgument = process.argv.slice(3).join(" ");

var divider = "\n------------------------------------------------------------\n\n";

// Make it so liri.js can take in one of the following commands:
switch (liriCommand) {
  case "Concert-This":
    concertThis();
    break;

  case "Spotify-This-Song":
    if (!nodeArgument) {
      nodeArgument = "The Sign";
    }
    spotifyThisSong();
    if (!nodeArgument) {
    }
    break;

  case "Do-What-It-Says":
    doWhatItSays();
    break;

  case "Movie-This":
    if (!nodeArgument) {
      nodeArgument = "batman";
    }
    movieThis();
    break;
}

// BANDS IN TOWN 
function concertThis() {

  // send a API request to bandsintown website 
  var queryUrl = "https://rest.bandsintown.com/artists/" + nodeArgument + "/events?app_id=codingbootcamp";

  axios.get(queryUrl).then(
    function (response) {
      var data = response.data[0]
      var venue = data.venue;
      
      var bandInfo =[
        "Name of Venue: " + venue.name,
        "Name of City: "  + venue.city,
        "Date of Event: " + moment(data.datetime).format("MM/DD/YYYY")
      ].join("\n\n");
      console.log(bandInfo);

      fs.appendFile("log.txt", divider + bandInfo + divider, function (err) {
        if (err) {
          console.log(err)
        }
        else console.log("content added")
      // console.log("Name of Venue: %s \nCity: %s\nDate: %s ", venue.name, venue.city, moment(data.datetime).format("MM/DD/YYYY"))
    });
  });
}

// MOVIE THIS

function movieThis() {
  // Then run a request with axios to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + nodeArgument + "&y=&plot=short&apikey=trilogy";

  axios.get(queryUrl).then(
    function (response) {
      // console.log(JSON.stringify(response));

      var movieInfo = [
        "Movie Title: " + response.data.Title,
        "Movie Release Date: " + response.data.Released,
        "IMDB Rating: " + response.data.Title,
        "Movie Year: " + response.data.Year,
        "Movie Ratings: " + response.data.Ratings[0].Value,
        "Movie Actors: " + response.data.Actors
      ].join("\n\n");

      console.log(movieInfo);

      fs.appendFile("log.txt", divider + movieInfo + divider, function (err) {
        if (err) {
          console.log(err)
        }
        else console.log("content added")
      });

    }
  );
}

function spotifyThisSong() {

  spot.search({ type: 'track', query: nodeArgument }, function (err, data) {

    if (err) {
      return console.log('Error occurred: ' + err);
    }
    else {
      var songInfo = [
        "Song Name: " + nodeArgument,
        "Album Name: " + data.tracks.items[0].album.name,
        "Artist Name: " + data.tracks.items[0].album.artists[0].name,
        "Preview Link: " + data.tracks.items[0].album.external_urls.spotify,
      ].join("\n\n");
      console.log(songInfo);

      fs.appendFile("log.txt", divider + songInfo + divider, function (err) {
        if (err) {
          console.log(err)
        }
        else console.log("content added")
      });
    }

  });
}

function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    else {
      data = data.split(",");
      data2 = data[1];
      nodeArgument = data2;
      spotifyThisSong();
    }
    fs.appendFile("log.txt", nodeArgument, function (err) {
      if (err) {
        console.log(err)
      }
      else console.log("content added")
    });

  });
};


