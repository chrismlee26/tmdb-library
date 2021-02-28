const linkMovies = "https://api.themoviedb.org/3/search/movie?";
const linkPoster = 'https://image.tmdb.org/t/p/w500';
const youTubeSearch = "https://www.youtube.com/embed/";


async function getMovie(moviePath) {
  try {
    const res = await fetch(moviePath);
    const json = await res.json();
    // console.log(json)
    // console.log(typeof(json))
    const jsonArray = json.results
    // console.log(jsonArray)

    for (var i = 0; i < jsonArray.length; i++) {
      const returnedArray = jsonArray[i]
      console.log(returnedArray)
      // const notNull = returnedArray.includes('poster_path')
      // console.log(notNull)
      return returnedArray.filter(function (el) {
        console.log(el != null)
      })
    }





    const movieData = {
      title: json.results[0].original_title,
      date: json.results[0].release_date,
      overview: json.results[0].overview,
      poster: json.results[0].poster_path,
      vote: json.results[0].vote_average,
    };
    return movieData
  } catch (err) {
    return err;
  }
}



function getMovieByQuery(tmdbKey, query) {
  const moviePath = `${linkMovies}api_key=${tmdbKey}&query=${query}`;
  return getMovie(moviePath);
}

// function getMoviePoster() { 
//   const 
//   return `${linkPoster}${poster}`;
// }

// function getYouTubeTrailer(VIDEO_ID, autoplay=1) {
//   const playTrailer = `${youTubeSearch}${VIDEO_ID}?${autoplay}`;
//   return playTrailer
// }







// function searchYouTube() {

// }

export {
  getMovieByQuery,
  getMovie,
};