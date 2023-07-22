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

{
  /* <li class="card-item item" data-id="${id}">
            <img class="film-poster" src="${imageSrc}" alt="${
          original_title || original_name
        } poster" />
            <div class="overlay">
              <div class="film-info">
                <p class="film-title">${original_title || original_name}</p>
                <div class="film-details">
                  <span class="film-description">${genres} | ${
          new Date(release_date).getFullYear() ||
          new Date(first_air_date).getFullYear()
        }</span>
                  <div class="stars-container">${starsRating({
                    voteAverage: vote_average,
                    isHero: false,
                  })}</div>
                </div>
              </div>
            </div>
          </li> */
}
