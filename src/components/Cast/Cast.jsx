import { getMovieById } from 'components/services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledItem, StyledList, StyledTitle } from './Cast.styled';
import Container from 'components/Container/Container';

const Cast = () => {
  const [crew, setCrew] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const movieData = await getMovieById(movieId, '/credits');
      setCrew(movieData);
    };
    getMovie();
  }, [movieId]);

  return (
    <Container>
      <StyledTitle>Cast:</StyledTitle>
      <StyledList>
        {crew.cast?.map(actor => (
          <StyledItem key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${actor?.profile_path}`}
              alt={actor.name}
            />
            <StyledTitle>{actor.name}</StyledTitle>
          </StyledItem>
        ))}
      </StyledList>
    </Container>
  );
};

export default Cast;
