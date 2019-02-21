# liri-node-app
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

 liri.js can take in one of the following commands
  - Concert-This
  - Spotify-This-Song
  - Movie-This
  - Do-What-It-Says
 
 
 What each command does:
 
 1. Concert-This
    node liri.js concert-this <artist/band name here>
    
    This will search the Bands in Town Artist Events API 
    ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the 
    following information about each event to the terminal:
    
    If no song is provided then your program will default to "The Sign" by Ace of Base.
 
2. Spotify-This-Song
   node liri.js movie-this <movie name here>
   
   This will show the following information about the song in your terminal/bash window
   Artist(s)
   The song's name
   A preview link of the song from Spotify
   The album that the song is from
   
  If no song is provided then your program will default to "The Sign" by Ace of Base.
  
3. Movie-This
   node liri.js movie-this '<movie name here>'
  
   This will output the following information to your terminal/bash window:
           * Title of the movie.
           * Year the movie came out.
           * IMDB Rating of the movie.
           * Rotten Tomatoes Rating of the movie.
           * Country where the movie was produced.
           * Language of the movie.
           * Plot of the movie.
           * Actors in the movie.
           
   If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
   
 4. Do-What-It-Says
    node liri.js do-what-it-says
    
    LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
    
 !!!!BONUS!!!!
    In addition to logging the data to your terminal/bash window, out put data will stored in a .txt file called log.txt.


![spotify-this-song](https://user-images.githubusercontent.com/43711658/53138221-90d5d000-3553-11e9-8c68-569da55d0092.gif)

![movie-this](https://user-images.githubusercontent.com/43711658/53138248-ac40db00-3553-11e9-8b42-8a238c8810f2.gif)

![concertthis](https://user-images.githubusercontent.com/43711658/53138257-b531ac80-3553-11e9-8ce2-2ca90fc12d46.gif)

![concertthis](https://user-images.githubusercontent.com/43711658/53138263-bc58ba80-3553-11e9-9cdc-11bc4e9458e2.gif)
    
