import React, { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';

import Layout from './Layout/Layout';
import Movie from 'pages/Movie/Movie';
import Reviews from './Reviews/Reviews';
import Cast from './Cast/Cast';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movie/:movieId" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
