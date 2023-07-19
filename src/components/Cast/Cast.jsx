import { getMovieById } from 'components/services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [crew, setCrew] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const movieData = await getMovieById(movieId, '/credits');
      setCrew(movieData);
    };
    getMovie();
  }, []);

  return (
    <div>
      <h3>Cast:</h3>
      {crew.cast?.map(actor => (
        <div key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w300${actor?.profile_path}`}
            alt={actor.name}
          />
          <h3>{actor.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Cast;
