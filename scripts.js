const linkMovies = "https://api.themoviedb.org/3/search/movie?";
const linkPoster = 'https://image.tmdb.org/t/p/w500';
const youTubeSearch = "https://www.youtube.com/embed/";


async function getMovie(moviePath) {
  try {
    const res = await fetch(moviePath);
    const json = await res.json();
    const movieData = {
      title: json.results.original_title,
      date: json.results.release_date,
      overview: json.results.overview,
      poster: json.results.poster_path,
      vote: json.results.vote_average,
      

    }
    return movieData
  } catch (err) {
    return err;
  }
}

function getMovieByQuery(tmdbKey, query) {
  const moviePath = `${linkMovies}api_key=${tmdbKey}&query=${query}`;
  return getMovie(moviePath);
}

function getMoviePoster() { 
  return `${linkPoster}${poster}`;
}

function getYouTubeTrailer(VIDEO_ID, autoplay=1) {
  const playTrailer = `${youTubeSearch}${VIDEO_ID}?${autoplay}`;
  return playTrailer
}







function searchYouTube() {

}

export {
  getMovieByQuery,
};