export default {
  path: '/movies',
  name: 'movies',
  component: () => import('@/views/movies/MoviesView.vue'),
  default: true,
};
