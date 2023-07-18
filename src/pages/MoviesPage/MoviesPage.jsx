import { Link } from 'react-router-dom';

const MoviesPage = () => {
  return (
    <div>
      <h1>MoviesPage</h1>

      <ul>
        <li>
          <Link to="/movie">Movie: 1</Link>
        </li>
        <li>
          <Link to="/movie">Movie: 2</Link>
        </li>
        <li>
          <Link to="/movie">Movie: 3</Link>
        </li>
        <li>
          <Link to="/movie">Movie: 4</Link>
        </li>
        <li>
          <Link to="/movie">Movie: 5</Link>
        </li>
      </ul>
    </div>
  );
};

export default MoviesPage;
