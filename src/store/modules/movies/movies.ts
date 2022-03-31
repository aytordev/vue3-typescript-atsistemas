import { Movies } from '@/models/types/movies';
import { defineStore } from 'pinia';

type MoviesState = {
  movies: null | Movies[];
};

export const useMoviesStore = defineStore('movies', {
  state: (): MoviesState => ({
    movies: null,
  }),

  actions: {
    setMoviesState(moviesFromDatabase: Movies[]) {
      this.movies = moviesFromDatabase;
    },
  },
});
