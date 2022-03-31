<script lang="ts">
  import { computed, defineComponent, onMounted, ref } from 'vue';
  import Card from '@/components/ui/molecules/Card/Card.vue';
  import { fetchMovies } from '@/api/routes/movies';
  import { useMoviesStore } from '@/store/modules/movies/movies';
  import { storeToRefs } from 'pinia';
  import { Movies } from '@/models/types/movies';
  import { SCREEN_TYPE, useScreenType } from '@/composables/layout/screen-size';
  import Container from '@/components/ui/objects/Container/Container.vue';
  import Skeleton from '@/components/ui/molecules/Skeleton/Skeleton.vue';

  export default defineComponent({
    name: 'FilmsView',
    components: {
      Card,
      Container,
      Skeleton,
    },
    setup() {
      const screenType = useScreenType();
      const store = useMoviesStore();

      const { movies } = storeToRefs(store);
      const { setMoviesState } = store;

      const movie = ref({});

      const listOfMovies = ref<Movies[]>([]);
      onMounted(async () => {
        listOfMovies.value = await fetchMovies();
        setMoviesState(listOfMovies.value);
      });
      return {
        movie,
        screenType,
        SCREEN_TYPE,
        movies: computed(() =>
          screenType.value === SCREEN_TYPE.MOBILE
            ? listOfMovies.value.slice(0, 4)
            : listOfMovies.value
        ),
      };
    },
  });
</script>

<template>
  <div v-if="movies.length > 0">
    <Container
      class="catalog"
      :style="
        screenType === SCREEN_TYPE.DESKTOP
          ? 'justify-content: center'
          : 'justify-content: space-evenly'
      "
      style="--columns: 6"
    >
      <Card v-for="movie in movies" :key="movie" :item="movie" />
    </Container>
  </div>
  <div v-else>
    <Container
      class="catalog"
      :style="
        screenType === SCREEN_TYPE.DESKTOP
          ? 'justify-content: center'
          : 'justify-content: space-evenly'
      "
      style="--columns: 6"
      ><Skeleton
    /></Container>
  </div>
</template>

<style lang="scss" scoped>
  .catalog {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    align-content: space-evenly;
    align-items: center;
    justify-items: center;
    max-width: calc(var(--columns) * (14rem + 3rem));
    margin: 1rem 0 1rem 0;
  }
</style>
