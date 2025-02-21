// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const getDirectors = moviesArray.map((movies) => movies.director);
    return getDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredMovies = moviesArray.filter(movies => movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'));
    return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
    return 0;
  }
    const scores = moviesArray.map(movie => movie.score);
  const sum = scores.reduce((accumulator, currentValue) => accumulator + currentValue);
  const average = sum / moviesArray.length;
  
  return +average.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const filterDrama = moviesArray.filter(movies => movies.genre.includes('Drama'));

    if (filterDrama.length === 0) {
    return 0;
  }
    const scores = filterDrama.map(movies => movies.score);
    const sum = scores.reduce((accumulator, currentValue) => accumulator + currentValue);
  const average = sum / filterDrama.length;
  
  return +average.toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = [...moviesArray].sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const titles = sortedMovies.map(movie => movie.title);
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
