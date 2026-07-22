const movies = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    rating: 8.7
  }
];

const newMovie = {
  id: 2,
  title: "Inception",
  year: 2010,
  rating: 8.8
};

const updatedMovies = [...movies, newMovie];

const highRatedMovies = updatedMovies.filter(
  movie => movie.rating >= 8
);

console.log(highRatedMovies);

console.log(
  `${movies[0].title} (${movies[0].year}) - Rating: ${movies[0].rating}`
);
