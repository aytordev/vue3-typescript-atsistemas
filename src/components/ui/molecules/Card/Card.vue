<script lang="ts">
  import { Movies } from '@/models/types/movies';
  import { computed, defineComponent, PropType } from 'vue';
  import Tag from '@/components/ui/atoms/Tag/Tag.vue';
  import { Colors } from '@/models/enums/colors';

  export default defineComponent({
    name: 'Card',
    components: {
      Tag,
    },
    props: {
      item: { type: Object as PropType<Movies>, required: true },
    },
    setup(props, { emit }) {
      const title = computed(() => {
        if (props.item.title) {
          return props.item.title;
        }

        return 'El título no esta disponible';
      });

      const image = computed(() => {
        if (props.item.poster) {
          return props.item.poster;
        }

        return 'La imagen no esta disponible';
      });

      const genre = computed(() => {
        if (props.item.genre) {
          return props.item.genre;
        }

        return 'No hay generos disponibles';
      });
      return {
        title,
        image,
        genre,
        Colors,
      };
    },
  });
</script>

<template>
  <div class="card">
    <div class="card__thumbnail">
      <span class="card__thumbnail__title">{{ title }}</span>
      <img :src="image" class="card__thumbnail__image" alt="thumbnail image" />
      <div class="card__thumbnail__genres">
        <div v-for="gen in genre" :key="gen">
          <Tag :type="Colors.PRIMARY" filled>{{ gen }}</Tag>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use './src/assets/styles/settings/variables.scss';
  @use './src/assets/styles/tools/mixins';

  .card {
    display: flex;
    overflow: hidden;
    border: variables.$space-2 solid mixins.color(black, 500);
    border-radius: variables.$space-16;
    width: 22rem;
    height: 40rem;

    &__thumbnail {
      display: flex;
      text-align: left;
      flex-direction: column;
      align-items: center;
      width: 100%;

      &__title {
        align-self: auto;
        font-size: 1.5rem;
        width: 20rem;
        overflow: hidden;
        line-height: 1;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 1rem 1rem 1rem 1rem;
      }

      &__image {
        border-radius: variables.$space-16;
        margin-bottom: 1rem;
        width: 90%;
        height: 75%;
      }

      &__genres {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        width: inherit;
        margin: 0 1rem;
      }
    }
  }
</style>
