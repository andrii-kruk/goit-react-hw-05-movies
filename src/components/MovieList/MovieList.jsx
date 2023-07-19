import MovieItem from './MovieItem/MovieItem';

const MovieList = ({ movies }) => {
  return (
    <>
      <h1>Daily Trends</h1>
      <ul>
        <MovieItem movies={movies} />
      </ul>
    </>
  );
};

export default MovieList;
