
const movies = [
  {
    title: 'The Shawshank Redemption',
    year: 1994,
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    score: 9.3
  },
  {
    title: 'The Godfather',
    year: 1972,
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    score: 9.2
  },
  {
    title: 'The Godfather: Part II',
    year: 1974,
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    score: 9
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    director: 'Christopher Nolan',
    duration: '2h 32min',
    genre: ['Action', 'Crime', 'Drama', 'Thriller'],
    score: 9
  },
  {
    title: '12 Angry Men',
    year: 1957,
    director: 'Sidney Lumet',
    duration: '1h 36min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  },
  {
    title: 'Schindler"s List',
    year: 1993,
    director: 'Steven Spielberg',
    duration: '3h 15min',
    genre: ['Biography', 'Drama', 'History'],
    score: 8.9
  },
  {
    title: 'Pulp Fiction',
    year: 1994,
    director: 'Quentin Tarantino',
    duration: '2h 34min',
    genre: ['Crime', 'Drama'],
    score: 8.9
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
    director: 'Peter Jackson',
    duration: '3h 21min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    score: 8.9
  },
  {
    title: 'Il buono, il brutto, il cattivo',
    year: 1966,
    director: 'Sergio Leone',
    duration: '3h 2min',
    genre: ['Western'],
    score: 8.9
  },
  {
    title: 'Fight Club',
    year: 1999,
    director: 'David Fincher',
    duration: '2h 19min',
    genre: ['Drama'],
    score: 8.8
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    director: 'Peter Jackson',
    duration: '2h 58min',
    genre: ['Adventure', 'Drama', 'Fantasy'],
    score: 8.8
  },
  {
    title: 'Forrest Gump',
    year: 1994,
    director: 'Robert Zemeckis',
    duration: '2h 22min',
    genre: ['Comedy', 'Drama', 'Romance'],
    score: 8.8
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
    director: 'Irvin Kershner',
    duration: '2h 4min',
    genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    score: 8.8
  }
]


console.log(`original arr length: ${movies.length}`);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  // Use `.map()` to create a new array containing only director names
  const directorsArr = moviesArray.map((movie) => movie.director)

  return directorsArr;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
      eachMovie =>
        eachMovie.director === 'Steven Spielberg' &&
        eachMovie.genre.includes('Drama')
    ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  // return !moviesArray.length? 0 : Number((moviesArray.reduce((a,b) => b.score? a + b.score : a, 0)/moviesArray.length).toFixed(2));
  // this is the one line version

  if (!moviesArray.length) {
    return 0;
  }

  let total = moviesArray.reduce((a, b) => {
    if (b.score) {
      return a + b.score;
    } else {
      return a;
    }
  }, 0);

  // you can use Number(), parseInt() or simply plus +
  return Number((total / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let drMovies = moviesArray.filter(eachMovie =>
      eachMovie.genre.includes('Drama')
    );
    return scoresAverage(drMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArray = [...moviesArray];
  // spread operator is to make sure not to mutate the original array because .sort() does change/mutate the original array so always make sure you create a safe copy before sorting
  newArray.sort((a, b) => {

    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
      return 0;
    }

  });
  
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return [...moviesArray]
  .sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  })
  .map(eachMovie => eachMovie.title)
  .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function convertDurationToNumberOfMinutes (durationAsString) {
  const minutes = durationAsString.split(' ').reduce((accumulator, currValue) => {

    // console.log(`type: ${typeof currValue} => ${currValue}`)
    if (currValue.includes('h')) {
      return accumulator + parseInt(currValue) * 60;
    } else {
      return accumulator + parseInt(currValue);
    }
    // let number = parseInt(value);
    // if (value.includes('h')) number *= 60;
    // return accumulator + number;
  }, 0);
  
  return minutes;
};

function turnHoursToMinutes(moviesArray) {
  let updatedMoviesArray = moviesArray.map(oneMovie => {
      // let newMovie = {};
      // newMovie.title = oneMovie.title;
      // newMovie.year = oneMovie.year;
      // newMovie.director = oneMovie.director;
      // newMovie.duration = `${convertDurationToNumberOfMinutes(oneMovie.duration)}min`;
      // newMovie.genre = oneMovie.genre;
      // newMovie.score = oneMovie.score;
  
      let newMovie = {
        ...oneMovie, 
        duration: convertDurationToNumberOfMinutes(oneMovie.duration)
      };
  
      
      return newMovie;
    });
  
    return updatedMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
      // If the array is empty, return null
      if (!moviesArray.length) {
        return null;
    }
    
    // Create an empty dictionary object to store movies by year
    const dictionary = {};
    
    // Loop through each movie object in the array and add it to the dictionary object, grouped by year
    moviesArray.forEach((movie) => {
        if (!dictionary[movie.year]) {
            // If the year does not yet exist in the dictionary, create a new array for it and add the current movie
            dictionary[movie.year] = [];
            dictionary[movie.year].push(movie);
        } else {
            // If the year already exists in the dictionary, simply add the current movie to its array
            dictionary[movie.year].push(movie);
        }
    });
    
    // Loop through each year in the dictionary object and find the year with the highest average score
    let bestAvgScore = 0;
    let bestYear;
    for (const year in dictionary) {
        // Calculate the average score for the current year's movies
        const currentYearAverage = scoresAverage(dictionary[year]);
        
        // If the current year's average score is higher than the previous bestAvgScore, update the bestAvgScore and bestYear variables
        if (currentYearAverage > bestAvgScore) {
            bestAvgScore = currentYearAverage;
            bestYear = year;
        } 
    }
    
    // Return a string stating the best year and its average score
    return `The best year was ${bestYear} with an average score of ${bestAvgScore}`;
}

