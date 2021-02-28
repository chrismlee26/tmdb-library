import { getMovieByQuery, getYouTubeTrailer } from './scripts.js';
import { tmdbKey, youTubeKey } from './config.js';

// Get Element References from DOM
const titleElement = document.getElementById('title');
const yearElement = document.getElementById('year');
const descElement = document.getElementById('desc');
const ratingElement = document.getElementById('rating');
const posterElement = document.getElementById('poster')
const formElement = document.getElementById('form');
const inputElement = document.getElementById('input-field');
const posterLink = 'https://image.tmdb.org/t/p/w500';

formElement.addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = inputElement.value;
  // const data = await getMovieByQuery(tmdbKey, input);
  // const posterPath = await getMoviePoster(poster);

  getMovieByQuery(tmdbKey, input)
  .then((data) => {
    titleElement.innerHTML = data.title;
    yearElement.innerHTML = data.date;
    descElement.innerHTML = `<i>${data.overview}</i>`;
    ratingElement.innerHTML = `Rating: ${data.vote}`;
    posterElement.innerHTML = `<img id='poster-load' src=${posterLink}${data.poster}></img>`;
  }).catch((err) => console.log(err.message));
});

// Is there a way to grab the entire array of results and display all of the posters on the screen?
// User inputs.
// json returns array.
// entire array is shown on screen (images + titles + year), equal spacing. 
// user clicks image of which movie they wanted.
// screen changes to single poster + youtube trailer link
// 
