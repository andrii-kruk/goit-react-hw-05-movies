import Container from 'components/Container/Container';
import { getMovieById } from 'components/services/api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  StyledButton,
  StyledLink,
  StyledList,
  StyledPart,
  StyledSubtitle,
  StyledTitle,
  StyledWrapper,
} from './Movie.styled';

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const locationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovie = async () => {
      const movieData = await getMovieById(movieId);
      setMovie(movieData);
    };
    getMovie();
  }, [movieId]);

  if (!movie || !movie.title || !movie.backdrop_path) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <StyledButton to={locationRef.current}>Go Back</StyledButton>
      <StyledWrapper>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title || movie.name}
          />
        </div>
        <div>
          <StyledTitle>
            {movie.name || movie.title}(
            {new Date(movie.release_date).getFullYear()})
          </StyledTitle>
          <StyledSubtitle>Overview</StyledSubtitle>
          <StyledPart>{movie.overview}</StyledPart>
          <StyledSubtitle>Genres</StyledSubtitle>
          <StyledPart>
            Genre: {movie.genres?.map(movie => movie.name).join(', ')}
          </StyledPart>
        </div>
      </StyledWrapper>

      <div>
        <h4>Additional Information</h4>
        <StyledList>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </StyledList>
        <div>
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </Container>
  );
};

export default Movie;
