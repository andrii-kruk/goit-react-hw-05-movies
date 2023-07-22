import { StyledItem, StyledImg, StyledCard, Overlay } from './MovieItem.styled';

const MovieItem = ({ movies = [], state }) => {
  if (movies.length === 0) return;
  return (
    <>
      {movies.map(({ id, title, name, poster_path }) => (
        <StyledItem key={id}>
          <Overlay>
            <StyledCard to={`/movie/${id}`} state={state}>
              <StyledImg
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title || name}
              />
            </StyledCard>
          </Overlay>
        </StyledItem>
      ))}
    </>
  );
};

export default MovieItem;
