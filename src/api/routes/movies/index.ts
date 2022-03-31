import { get } from '@/api/http-client';

export const fetchMovies = async (): Promise<any> => {
  const response = await get('/movies');
  return response.data;
};
