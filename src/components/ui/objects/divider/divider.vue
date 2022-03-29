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
  .divider {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: var(--text-color);

    &--horizontal {
      display: block;
      clear: both;
      width: 100%;
      min-width: 100%;
      height: 1px;
      margin: 0;
    }

    &--vertical {
      display: inline-block;
      width: 1px;
      margin: 0 0.5rem;
    }
  }
</style>
