<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import Container from '@/components/ui/objects/Container/Container.vue';
  import Divider from '@/components/ui/objects/divider/divider.vue';
  import { SCREEN_TYPE, useScreenType } from '@/composables/layout/screen-size';
  import Tag from '@/components/ui/atoms/Tag/Tag.vue';
  import Button from '@/components/ui/atoms/Button/Button.vue';
  import { Colors } from '@/models/enums/colors';
  import Input from '@/components/ui/atoms/Input/Input.vue';
  import { updateMovie } from '@/api/routes/movies';
  import { Movies } from '@/models/types/movies';
  import router from '@/router';

  export default defineComponent({
    name: 'EditMoviesView',
    components: {
      Container,
      Divider,
      Tag,
      Button,
      Input,
    },
    setup() {
      const route = useRoute();
      const screenType = useScreenType();
      const movie = reactive<Movies>(route.params);
      const loading = ref<boolean>(false);

      async function editMovie() {
        try {
          loading.value = true;
          await updateMovie(movie as unknown as Movies);
          loading.value = false;
          router.push({ name: 'movies' });
          console.log(router);
        } catch (error) {
          alert(error);
        }
      }

      return {
        route,
        movie,
        editMovie,
        screenType,
        SCREEN_TYPE,
        Colors,
        loading,
      };
    },
  });
</script>

<template>
  <Container
    class="wrapper"
    :class="
      screenType === SCREEN_TYPE.DESKTOP
        ? 'wrapper--desktop'
        : 'wrapper--mobile'
    "
  >
    <form @submit.prevent="editMovie">
      <div class="wrapper__row">
        <span>{{ $t('title') }}</span>
        <Divider class="wrapper__row__div" />
        <Input
          :model-value="movie.title"
          :message="movie.title ? '' : 'Este campo no puede estar vacío'"
          :status="movie.title.length === 0 ? Colors.DANGER : undefined"
          required
          aria-label="title"
          @input="(event) => (movie.title = event.target.value)"
        />
      </div>

      <div class="wrapper__row">
        <span>{{ $t('poster') }}</span>
        <Divider class="wrapper__row__div" />
        <Input
          :model-value="movie.poster"
          :message="movie.poster ? '' : 'Este campo no puede estar vacío'"
          :status="movie.poster.length === 0 ? Colors.DANGER : undefined"
          required
          aria-label="poster"
          @input="(event) => (movie.poster = event.target.value)"
        />
      </div>

      <div class="wrapper__row">
        <span>{{ $t('genre') }}</span>
        <Divider class="wrapper__row__div" />
        <Input @keyup.enter="(event) => movie.genre.push(event.target.value)" />

        <span v-for="gen in movie.genre" :key="gen">
          <Tag :type="Colors.SUCCESS" filled>{{ gen }}</Tag>
        </span>
      </div>

      <div class="wrapper__row">
        <span>{{ $t('actors') }}</span>
        <Divider class="wrapper__row__div" />
        <Input
          @keyup.enter="(event) => movie.actors.push(event.target.value)"
        />

        <span v-for="actor in movie.actors" :key="actor">
          <Tag :type="Colors.SUCCESS" filled>{{ actor }}</Tag>
        </span>
      </div>

      <div class="wrapper__row">
        <span>{{ $t('year') }}</span>
        <Divider class="wrapper__row__div" />
        <Input
          :model-value="movie.year"
          type="number"
          :message="movie.year ? '' : 'Este campo no puede estar vacío'"
          :status="!movie.year ? Colors.DANGER : undefined"
          required
          aria-label="year"
          @input="(event) => (movie.year = event.target.value)"
        />
      </div>

      <div class="wrapper__row">
        <span>{{ $t('duration') }}</span>
        <Divider class="wrapper__row__div" />
        <Input
          :model-value="movie.duration"
          type="number"
          :message="movie.duration ? '' : 'Este campo no puede estar vacío'"
          :status="!movie.duration ? Colors.DANGER : undefined"
          required
          aria-label="duration"
          @input="(event) => (movie.duration = event.target.value)"
        />
      </div>

      <div class="wrapper__row">
        <span>{{ $t('score') }}</span>
        <Divider class="wrapper__row__div" />
        <Input
          :model-value="movie.imdbRating"
          :message="movie.imdbRating ? '' : 'Este campo no puede estar vacío'"
          :status="!movie.imdbRating ? Colors.DANGER : undefined"
          required
          type="number"
          step="any"
          min="0"
          aria-label="score"
          @input="(event) => (movie.imdbRating = event.target.value)"
        />
      </div>

      <Button :type="Colors.PRIMARY" aria-label="edit" :loading="loading"
        >Editar</Button
      >
    </form>
  </Container>
</template>

<style lang="scss" scoped>
  @use './src/assets/styles/settings/variables.scss';
  @use './src/assets/styles/tools/mixins';

  .wrapper {
    &--mobile {
      width: inherit;
    }

    &--desktop {
      width: 30rem;
    }

    &__image {
      width: 30rem;
      height: 20rem;
    }

    &__info {
      display: flex;
      justify-content: space-between;
      margin: variables.$margin-8 0;
    }

    &__row {
      margin: variables.$margin-8 0;
      text-align: left;

      &__div {
        margin: variables.$margin-4 0;
      }
    }
  }

  .actions {
    position: absolute;
    right: 0;
    bottom: 0;
    margin: variables.$margin-16;
  }
</style>
