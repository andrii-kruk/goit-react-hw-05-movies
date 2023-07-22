import { lazy } from 'react';
import { StyledList } from './MovieList.styled';

const MovieItem = lazy(() => import('./MovieItem/MovieItem'));

const MovieList = ({ movies, state }) => {
  return (
    <>
      <StyledList>
        <MovieItem movies={movies} state={state} />
      </StyledList>
    </>
  );
};

export default MovieList;
