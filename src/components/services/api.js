import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '41b8f9437bf3f899281f8a3f9bdc0891';
const API_BAERER =
  'eyJhbGciOiJIUzI1NiJ9.eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODU0Y2RkODdhYTkwNTNjYTAwMjI5ZmVhNzNlNTkyNSIsInN1YiI6IjYxODZmYWFkZmU2MzE4MDA2NDgzZTdkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vm-UaTyMPJ2HhXiSRvz-VpPqqqKEF-3PBdhfYlg5v3g.LPvql0yzJtpHl2REM-0llI41VxeKkvz4iZ9HtwRIrOQ';

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
  params: { language: 'en-US', page: '1', query: '' },
  headers: { Authorization: `Bearer ${API_BAERER}` },
});

export const getSearchedMovies = async (query = '') => {
  const url = '/search/movie';
  const { data } = await getByQuerryInst.get(url, { params: { query } });
  return data;
};

const getById = axios.create({
  baseURL: API_URL,
  params: { language: 'en-US', page: '1', query: '', api_key: API_KEY },
  // headers: { Authorization: `Bearer ${API_BAERER}` },
});

export async function getMovieById(movieId, setUrl = '') {
  const url = `movie/${movieId}${setUrl}`;
  const { data } = await getById.get(url);
  // console.log('response.data: ', response.data);
  return data;
}
