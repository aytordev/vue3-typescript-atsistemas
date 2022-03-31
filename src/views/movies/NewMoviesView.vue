<script lang="ts">
  import { defineComponent } from 'vue';
  import Container from '@/components/ui/objects/Container/Container.vue';

  export default defineComponent({
    name: 'NewMoviesView',
    components: {
      Container,
    },
    setup() {
      return {};
    },
  });
</script>

<template>
  <Container>New</Container>
</template>

<style lang="scss" scoped></style>
