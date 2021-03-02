const linkMovies = "https://api.themoviedb.org/3/search/movie?";
// const youTubeSearch = "https://www.youtube.com/embed/";
// const posterLink = 'https://image.tmdb.org/t/p/w500';

async function getMovie(moviePath) {
  try {
    const res = await fetch(moviePath);
    const json = await res.json();

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

async function getMovieByQuery(tmdbKey, query) {
  const moviePath = `${linkMovies}api_key=${tmdbKey}&query=${query}`;
  return await getMovie(moviePath);
}

// async function getPoster(poster) {
//   const res = await fetch(moviePath);
//   const json = await res.json();
//   const posterPath = `${posterLink}${poster}`;
//   return posterPath;
// }

// This is  stretch goal now let's skip for now
// Check the returned array for images to display

// for (var i = 0; i < movieData.length; i++) {
//   const posterArray = movieData[i].poster_path
//     // remove null results from images
//     if (posterArray !== null) {
//       // return good results
//       console.log(posterArray)
//       // return posterArray
//     }
// }


// YouTube auto searcher 
// Take the title element
// const newVariable = title element + "trailer" 
// use newVariable as {VIDEO_ID} in youtube link
// run function that operates youtube 
// display into HTML.


// function getYouTubeTrailer(VIDEO_ID, autoplay=1) {
//   const playTrailer = `${youTubeSearch}${VIDEO_ID}?${autoplay}`;
//   return playTrailer
// }


export {
  getMovieByQuery,
  // getPoster,
  // getYouTubeTrailer,
};