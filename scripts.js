const linkMovies = "https://api.themoviedb.org/3/search/movie?";


async function getMovie(moviePath) {
  try {
    const res = await fetch(moviePath);
    const json = await res.json();
    const jsonArray = json.results
    // console.log(jsonArray)

    const moviePosterArray = [];
    const entireArray = []


    //THIS RETURNS ALL POSSIBLE RESULTS FROM QUERY AND FORMATS INTO allMovieData Dictionary
    for (var i = 0; i < jsonArray.length; i++) {
        const allMovieData = {
          title: jsonArray[i].original_title,
          date: jsonArray[i].release_date,
          overview: jsonArray[i].overview,
          poster: jsonArray[i].poster_path,
          vote: jsonArray[i].vote_average,
          id: jsonArray[i].id,
        };
      // console.log(allMovieData, '$$$$$$$$$')
    }

    // THIS RETURNS THE FIRST RESULT ONLY  FROM QUERY
    const movieData = {
      title: jsonArray[0].original_title,
      date: jsonArray[0].release_date,
      overview: jsonArray[0].overview,
      poster: jsonArray[0].poster_path,
      vote: jsonArray[0].vote_average,
      id: jsonArray[0].id,
      
    };
    // console.log(movieData, '~~~~~~~~~~~~~~~~~')

    // Logging all the returned image links but removing null values.
    // THIS RETURNS A LIST OF ALL POSSIBLE MOVIE POSTERS FROM QUERY
    for (var i = 0; i < jsonArray.length; i++) {
      const returnedArray = jsonArray[i].poster_path
        // remove null results from images
        if (returnedArray !== null) {
          // return good results
          moviePosterArray.push(returnedArray)
        }
        
    }
    // console.log(moviePosterArray, '@@@@@@@@@@@@')   
    
    return { movieData: movieData, allMoviesData: entireArray, allMoviePosters: moviePosterArray}
  } catch (err) {
    return err;
  }
}

function getMovieByQuery(tmdbKey, query) {
  const moviePath = `${linkMovies}api_key=${tmdbKey}&query=${query}`;
  return getMovie(moviePath);
}

export {
  getMovieByQuery,
  // moviePosterArray,
  // entireArray,
};