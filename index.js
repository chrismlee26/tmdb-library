// import youTubeScript from 'https://apis.google.com/js/api.js';
import { getMovieByQuery } from './scripts.js'; //, getPoster, getYouTubeTrailer
import { tmdbKey } from './config.js';

// Get Element References from DOM
const titleElement = document.getElementById('title');
const yearElement = document.getElementById('year');
const descElement = document.getElementById('desc');
const ratingElement = document.getElementById('rating');
const posterElement = document.getElementById('poster')
const formElement = document.getElementById('form');
const inputElement = document.getElementById('input-field');

// Global variable for poster
const posterLink = 'https://image.tmdb.org/t/p/w500';

formElement.addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = inputElement.value;
  // const data = getMovieByQuery(tmdbKey, input);
  // const posterPath = await getMoviePoster(poster);

  // getMovieByQuery(tmdbKey, input)
  // .then(([movieData, entireArray]) => {
    // loop through entireArray
    // for item in entireArray
      // posterElement.innerHTML = `<img id='poster-load' src=${posterLink}${data.poster}></img>`;
      // Shove this all into some div className='cards'
      // into html cards (+ css)
      // add an event listener on each card, that onclick will take in the results[i].id #
        // search api using the #


  getMovieByQuery(tmdbKey, input)
  .then((data) => {
    console.log(data)
    titleElement.innerHTML = data.movieData.title;
    yearElement.innerHTML = data.movieData.date;
    descElement.innerHTML = `<i>${data.movieData.overview}</i>`;
    ratingElement.innerHTML = `Rating: ${data.movieData.vote}`;
    posterElement.innerHTML = `<img id='poster-load' src=${posterLink}${data.movieData.poster}></img>`;
    }).catch((err) => console.log(err.message)); 
});


// import script
// "https://apis.google.com/js/api.js"


//   function loadClient() {
//     gapi.client.setApiKey(youTubeKey);
//     return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
//         .then(function() { console.log("GAPI client loaded for API"); },
//               function(err) { console.error("Error loading GAPI client for API", err); });
//   }
//   // Make sure the client is loaded before calling this method.
//   function execute() {
//     return gapi.client.youtube.search.list({
//       "part": [
//         "snippet"
//       ],
//       "maxResults": 1,
//       "order": "relevance",
//       "q": "{data.title}",
//       "safeSearch": "none"
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//               },
//               function(err) { console.error("Execute error", err); });
//   }
//   gapi.load("client");

// button onclick="loadClient()">load</
// button onclick="execute()">execute</



// Is there a way to grab the entire array of results and display all of the posters on the screen?
// User inputs.
// json returns array.
// entire array is shown on screen (images + titles + year), equal spacing. 
// user clicks image of which movie they wanted.
// screen changes to single poster + youtube trailer link
// 


