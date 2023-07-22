import { useEffect, useState } from 'react';
import { getWeeklyTrends } from 'components/services/api';
import MovieList from 'components/MovieList/MovieList';
import Container from 'components/Container/Container';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const weeklyTrends = await getWeeklyTrends();
      setMovies(weeklyTrends);
    };

    getMovies();
  }, []);
  return <Container children={<MovieList movies={movies} />} />;
};

export default HomePage;
