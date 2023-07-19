import { Link } from 'react-router-dom';

const MovieItem = ({ movies = [] }) => {
  if (movies.length === 0) return;
  return (
    <>
      {movies.map(({ id, title, original_title, name, orinal_name }) => (
        <li key={id}>
          <Link to={`movie/${id}`}>
            {title || original_title || name || orinal_name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default MovieItem;
