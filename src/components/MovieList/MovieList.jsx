import { lazy } from 'react';

const MovieItem = lazy(() => import('./MovieItem/MovieItem'));
import { StyledList } from './MovieList.styled';

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
