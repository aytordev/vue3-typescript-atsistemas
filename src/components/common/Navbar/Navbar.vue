<script lang="ts">
  import Container from '@/components/ui/objects/Container/Container.vue';
  import Button from '@/components/ui/atoms/Button/Button.vue';
  import Drawer from '@/components/common/Drawer/Drawer.vue';
  import { defineComponent, ref } from 'vue';
  import { Positions } from '@/models/enums/positions';
  import { useScreenType, SCREEN_TYPE } from '@/composables/layout/screen-size';

  export default defineComponent({
    name: 'Navbar',
    components: {
      Container,
      Button,
      Drawer,
    },
    setup() {
      // Thats why i'm doing this... https://vitejs.dev/guide/assets.html#the-public-directory
      const image = new URL(
        '../../../assets/resources/icons/hamburger.png',
        import.meta.url
      ).href;

      const drawer = ref(false);
      const screenType = useScreenType();

      return {
        drawer,
        image,
        Positions,
        screenType,
        SCREEN_TYPE,
      };
    },
  });
</script>

<template>
  <Drawer
    v-model="drawer"
    :placement="Positions.L"
    :width="screenType === SCREEN_TYPE.DESKTOP ? '450px' : '60vw'"
  ></Drawer>
  <header class="toolbar">
    <Container tag="nav" class="toolbar__nav">
      <Button
        :icon="image"
        aria-label="menu-button"
        @click="drawer = !drawer"
      />
    </Container>
  </header>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/settings/variables';
  @use '@/assets/styles/tools/_mixins.scss';

  .toolbar {
    position: fixed;
    top: 0;
    z-index: 1;
    width: variables.$width-100;
    overflow: hidden;
    background-color: mixins.color(white, 500);

    &__nav {
      @include mixins.display;

      padding: variables.$space-16 variables.$space-20;
      border-bottom: variables.$space-2 solid mixins.color(black, 500);
    }
  }
</style>
