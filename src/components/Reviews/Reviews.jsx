import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'components/services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieData = async () => {
      const movieData = await getMovieById(movieId, '/reviews');
      setReviews(movieData.results);
    };

    getMovieData();
  }, [movieId]);

  if (reviews.length === 0) {
    return <div>There isn't reviews</div>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
