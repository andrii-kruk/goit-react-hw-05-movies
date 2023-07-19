import { getMovieById } from 'components/services/api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const Movie = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const movieData = await getMovieById(movieId);
      setMovie(movieData);
    };
    getMovie();
  }, []);

  if (!movie || !movie.title || !movie.backdrop_path) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h2>{movie.name || movie.title}</h2>
        <p>Genre: {movie.genres?.map(movie => movie.name).join(', ')}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.title || movie.name}
        />
      </div>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Movie;
