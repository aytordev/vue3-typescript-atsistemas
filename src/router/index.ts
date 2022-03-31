import { createRouter, createWebHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Home.vue'),
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
  {
    path: '/movies/new',
    name: 'new-movie',
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/movies/NewMoviesView.vue'
      ),
  },
  {
    path: '/movies/details/edit',
    name: 'edit-movie',
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../views/movies/EditMoviesView.vue'
      ),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
