import { get, del, put, post } from '@/api/http-client';
import { Movies } from '@/models/types/movies';

export const fetchMovies = async (): Promise<Movies[]> => {
  const response = await get<Movies[]>('/movies');
  return response.data;
};

export const delMovies = async (id: string): Promise<any> => {
  return await del(`/movies/${id}`);
};

export const updateMovie = async (movie: Movies): Promise<Movies> => {
  return await put(`/movies/${movie.id}`, movie);
};

export const createMovie = async (movie: Movies): Promise<any> => {
  return await post('/movies', movie);
};
