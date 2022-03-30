<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Container',
    props: {
      tag: {
        type: String,
        default: 'div',
      },
    },
  });
</script>

<template>
  <component :is="tag" class="container">
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/settings/variables';

  .container {
    max-width: variables.$width-100;
    padding: variables.$space-16 variables.$space-32;
    margin: 0 auto;
  }
</style>
