import { getMovieByQuery } from './scripts.js';
import { tmdbKey, youTubeKey } from './config.js';

// Get Element References from DOM
const titleElement = document.getElementById('title');
const yearElement = document.getElementById('year');
const descElement = document.getElementById('desc');
const ratingElement = document.getElementById('rating');
const formElement = document.getElementById('form');
const inputElement = document.getElementById('input-field');

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = inputElement.value;
  

  getMovieByQuery(tmdbKey, input)
  .then((data) => {
    titleElement.innerHTML = data.title;
    yearElement.innerHTML = data.date;
    descElement.innerHTML = data.overview;
    ratingElement.innerHTML = `Rating: ${data.vote}`;
  }).catch((err) => console.log(err.message));
})