import { useEffect, useState } from 'react';
import { getWeeklyTrends } from 'components/services/api';
import MovieList from 'components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const weeklyTrends = await getWeeklyTrends();
      setMovies(weeklyTrends);
    };

    getMovies();
  }, []);
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
