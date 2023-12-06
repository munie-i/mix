import { configureStore } from '@reduxjs/toolkit'
import headerMoviesReducer from './headerMoviesReducer';
import selectedMovieReducer from './selectedMovieReducer';
import popularGenresReducer from './popularGenresReducer';
import topRatedGenresReducer from './topRatedGenresReducer';
import sortReducer from './sortReducer';
import pageReducer from './pageReducer';

export const store = configureStore({
  reducer: {
    headerMovies: headerMoviesReducer,
    selectedMovie: selectedMovieReducer,
    popularGenres: popularGenresReducer,
    topRatedGenres: topRatedGenresReducer,
    sort: sortReducer,
    page: pageReducer,
  },
})