import { get, del } from '@/api/http-client';

export const fetchMovies = async (): Promise<any> => {
  const response = await get('/movies');
  return response.data;
};

export const delMovies = async (id: string): Promise<any> => {
  return await del(`/movies/${id}`);
};
