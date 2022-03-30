<script lang="ts">
  import Navbar from '@/components/common/Navbar/Navbar.vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App',
    components: {
      Navbar,
    },
  });
</script>

<template>
  <Navbar />
  <router-view style="min-height: 100%; padding-top: 3rem"></router-view>
</template>

<style lang="scss">
  @use './src/assets/styles/settings/variables.scss';

  #app {
    height: calc(variables.$height-100 - 3rem);
  }
</style>
