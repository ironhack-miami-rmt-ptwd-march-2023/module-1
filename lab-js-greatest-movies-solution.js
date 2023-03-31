
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

  const uniqArrOfDirectors = [];

  
    const directorsOnly = moviesArray
      .map(movie => {
        return movie.director;
      })
      .forEach(el => {
        
        if(!uniqArrOfDirectors.includes(el)){
          uniqArrOfDirectors.push(el);
        }
    })
    
  return uniqArrOfDirectors;

  // return directorsOnly
}

console.log(getAllDirectors(movies))