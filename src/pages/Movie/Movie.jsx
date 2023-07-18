import { Link, Outlet } from 'react-router-dom';

const Movie = () => {
  return (
    <div>
      <h2>It's choosen movie: id</h2>

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
