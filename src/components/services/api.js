import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '41b8f9437bf3f899281f8a3f9bdc0891';

const getTrendingsInst = axios.create({
  baseURL: API_URL,
  params: { language: 'en-US', page: '1', api_key: API_KEY },
});

export const getWeeklyTrends = async () => {
  const url = 'trending/all/day';
  const { data } = await getTrendingsInst.get(url);
  // console.log('response.data.results: ', response.data.results);
  return data.results;
};

const getByQuerryInst = axios.create({
  baseURL: API_URL,
  params: { language: 'en-US', page: '1', query: '', api_key: API_KEY },
  // headers: { Authorization: `Bearer ${API_BAERER}` },
});

export const getSearchedMovies = async (query = '') => {
  const url = '/search/movie';
  const { data } = await getByQuerryInst.get(url, { params: { query } });
  // console.log('data.results: ', data.results);
  return data.results;
};

const getById = axios.create({
  baseURL: API_URL,
  params: { language: 'en-US', page: '1', query: '', api_key: API_KEY },
  // headers: { Authorization: `Bearer ${API_BAERER}` },
});

export async function getMovieById(movieId, setUrl = '') {
  const url = `movie/${movieId}${setUrl}`;
  const { data } = await getById.get(url);
  // console.log('data: ', data);
  return data;
}
