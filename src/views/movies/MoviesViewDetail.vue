<script lang="ts">
  import { defineComponent } from 'vue';
  import { useRoute } from 'vue-router';
  import Container from '@/components/ui/objects/Container/Container.vue';
  import List from '@/components/ui/objects/list/list.vue';
  import Divider from '@/components/ui/objects/divider/divider.vue';
  import { SCREEN_TYPE, useScreenType } from '@/composables/layout/screen-size';
  import Tag from '@/components/ui/atoms/Tag/Tag.vue';
  import Button from '@/components/ui/atoms/Button/Button.vue';
  import { Colors } from '@/models/enums/colors';
  import { delMovies } from '@/api/routes/movies';
  import router from '@/router';

  export default defineComponent({
    name: 'FilmsViewDetail',
    components: {
      Container,
      List,
      Divider,
      Tag,
      Button,
    },
    setup() {
      const route = useRoute();
      const screenType = useScreenType();

      async function deleteMovie(id: string) {
        try {
          await delMovies(id);
        } catch (error) {
          console.error(error);
        }
      }

      function redirectToEditMovie() {
        try {
          router.push({ name: 'edit-movie', params: route.params });
        } catch (error) {
          console.log(error);
        }
      }

      return {
        route,
        screenType,
        SCREEN_TYPE,
        Colors,
        deleteMovie,
        redirectToEditMovie,
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
    <List :horizontal="true" class="wrapper__info">
      <span>{{ route.params.title }}</span>
    </List>
    <img :src="(route.params.poster as string)" class="wrapper__image" />
    <List :horizontal="true" class="wrapper__info">
      <span>{{ $t('score') }}</span>
      <span>{{ $t('duration') }}</span>
    </List>

    <List :horizontal="true" class="wrapper__info">
      <span>{{ route.params.year }}</span>
      <span>{{ route.params.imdbRating }}</span>
    </List>

    <div class="wrapper__row">
      <span>{{ $t('actors') }}</span>
      <Divider class="wrapper__row__div" />
      <span v-for="actor in route.params.actors">
        <Tag :type="Colors.SUCCESS" filled>{{ actor }}</Tag>
      </span>
    </div>

    <div class="wrapper__row">
      <span>{{ $t('genres') }}</span>
      <Divider class="wrapper__row__div" />
      <span v-for="gen in route.params.genre">
        <Tag :type="Colors.SUCCESS" filled>{{ gen }}</Tag>
      </span>
    </div>
    <List horizontal class="actions">
      <Button
        :type="Colors.PRIMARY"
        aria-label="edit"
        @click="redirectToEditMovie"
        >{{ $t('edit') }}s</Button
      >
      <Button
        :type="Colors.WARNING"
        aria-label="delete"
        @click="deleteMovie(route.params.id as string)"
        >{{ $t('delete') }}</Button
      >
    </List>
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
      height: 20rem;
      width: 30rem;
    }

    &__info {
      display: flex;
      justify-content: space-between;
      margin: variables.$margin-4 0;
    }

    &__row {
      text-align: left;
      margin: variables.$margin-16 0;

      &__div {
        margin: variables.$margin-4 0;
      }
    }
  }

  .actions {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: variables.$margin-16;
  }
</style>
