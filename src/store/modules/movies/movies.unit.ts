import { Movies } from '@/models/types/movies';
import { setActivePinia, createPinia } from 'pinia';
import { useMoviesStore } from './movies';

describe('Movies store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  afterEach(() => {
    const cartStore = useMoviesStore();
    cartStore.$reset();
  });

  it('Update store when a cart is recieved', async () => {
    const moviesMock: Movies[] = [
      {
        id: 1,
        title: 'Dancing Lady',
        poster: 'http://dummyimage.com/400x600.png/cc0000/ffffff',
        genre: ['Comedy', 'Musical', 'Romance'],
        year: 2006,
        duration: 161,
        imdbRating: 8.27,
        actors: [4, 5, 6],
      },
    ];

    const cartStore = useMoviesStore();

    cartStore.setMoviesState(moviesMock);

    expect(cartStore.$state.movies?.length).toBe(1);
  });
});
