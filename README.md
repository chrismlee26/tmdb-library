# TMDB & Youtube API Search Library

![GitHub language count](https://img.shields.io/github/languages/count/chrismlee26/tmdb-library)
![GitHub top language](https://img.shields.io/github/languages/top/chrismlee26/tmdb-library)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/chrismlee26/tmdb-library)

For FEW2.1 (Writing Javascript Libraries) at Make School. Assignment #4

## Welcome

This project is a JS library that searches TMDB API & Returns Movie Data.

v1.0.1

## TMDB Library

scripts.js contains a library that could be used by anyone looking to search for movie data from TMDB API and return it into a JSON format.

The functions take input through a single input field and resolve to a promise that returns the movie title, year, description, rating and a movie poster into HTML elements. The movie title is then used to search YouTube for a trailer video.

1. The first function getMovieByQuery searches for movie data through query. It is advised to use movie titles specifically as only the first result will be displayed.

2. a library that takes the json return from TMDB to perform a YouTube search for "movie title + trailer". Which will be auto-played after the data loads.

## Operation

1.

## Run

1. Insert your TMDB and YouTube API Keys into the `tmdbKey` 0variable.

2. Run the HTML page in live server.

3. Type any movie title into the input box, press submit and enjoy.

## Updates

1. Added README.md
