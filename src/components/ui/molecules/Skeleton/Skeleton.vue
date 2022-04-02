<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Skeleton',
  });
</script>

<template>
  <div class="card">
    <div class="card__skeleton">
      <span class="card__skeleton__title" />
      <div class="card__skeleton__image" />
      <div class="card__skeleton__info" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use './src/assets/styles/settings/variables.scss';
  @use './src/assets/styles/tools/mixins';

  @keyframes pulse-bg {
    0% {
      background-color: #ddd;
    }

    50% {
      background-color: #d0d0d0;
    }

    100% {
      background-color: #ddd;
    }
  }

  .card {
    display: flex;
    width: 22rem;
    height: 27rem;
    overflow: hidden;
    border: variables.$space-2 solid mixins.color(black, 500);
    border-radius: variables.$space-16;

    &__skeleton {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      text-align: left;

      &__title {
        width: 80%;
        padding-top: 10%;
        margin-top: 1rem;
        background-color: mixins.color(white, 900);
        animation: pulse-bg 1s infinite;
      }

      &__image {
        width: 80%;
        height: 60%;
        padding-top: 10%;
        margin-top: 1rem;
        background-color: mixins.color(white, 900);
        animation: pulse-bg 1s infinite;
      }

      &__info {
        width: 80%;
        padding-top: 10%;
        margin-top: 1rem;
        background-color: mixins.color(white, 900);
        animation: pulse-bg 1s infinite;
      }
    }
  }
</style>
