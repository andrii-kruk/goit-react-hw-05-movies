import { lazy, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchedMovies } from 'components/services/api';

const MovieList = lazy(() => import('../../components/MovieList/MovieList'));
const Container = lazy(() => import('../../components/Container/Container'));

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get('q');

    const getMovies = async () => {
      const moviesData = await getSearchedMovies(searchQuery);

      setMovies(moviesData);
    };
    getMovies();
  }, [searchParams]);

  const location = useLocation();
  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ q: query });

    setQuery('');
  };

  const handleInputChange = ({ target }) => {
    setQuery(target.value);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search movie"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} state={{ from: location }} />
    </Container>
  );
};

export default MoviesPage;
