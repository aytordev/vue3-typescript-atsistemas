import { createRouter, createWebHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/movies/MoviesViewDetail.vue'
      ),
  },
  {
    path: '/movies',
    name: 'movies',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/movies/MoviesView.vue'),
  },
  {
    path: '/movies/details',
    name: 'movie-details',
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/movies/MoviesViewDetail.vue'
      ),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
