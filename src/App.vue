<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App',
  });
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
  @use './src/assets/styles/settings/variables.scss';
  #app {
    height: calc(variables.$height-100 - variables.$space-48);
  }
</style>
