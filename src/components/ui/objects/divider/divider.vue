<script lang="ts">
  import { computed, defineComponent } from 'vue';
  export default defineComponent({
    name: 'Divider',
    props: { vertical: { type: Boolean } },
    setup(props) {
      const classes = computed(() => [
        {
          'divider--horizontal': !props.vertical,
          'divider--vertical': props.vertical,
        },
      ]);
      return { classes };
    },
  });
</script>

<template>
  <div class="divider" :class="classes" role="separator" />
</template>

<style lang="scss" scoped>
  @use './src/assets/styles/tools/mixins';
  .divider {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    background-color: mixins.color(black, 500);

    &--horizontal {
      display: block;
      width: 100%;
      min-width: 100%;
      height: 1px;
      margin: 0;
      clear: both;
    }

    &--vertical {
      display: inline-block;
      width: 1px;
      margin: 0 0.5rem;
    }
  }
</style>
