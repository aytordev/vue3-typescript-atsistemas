<script lang="ts">
  import { defineComponent, h } from 'vue';

  export default defineComponent({
    props: {
      horizontal: {
        type: Boolean,
        default: false,
      },
    },
    setup(props, context) {
      return () =>
        h(
          'ul',
          {
            class: [
              'list',
              props.horizontal && 'list--horizontal',
              !props.horizontal && 'list--vertical',
            ],
          },
          context.slots
        );
    },
  });
</script>
<style lang="scss">
  @use '@/assets/styles/settings/variables';

  .list {
    padding: variables.$margin-0;
    margin: variables.$padding-0;
    list-style: none;

    &--horizontal {
      display: flex;
      flex-wrap: nowrap;
      gap: 1rem;
      align-items: center;
    }

    &--vertical {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      align-items: center;
      justify-content: center;
    }
  }
</style>
