<template>
  <span
    :class="['tag', type && `tag--${type}`, filled && `tag--${type}--filled`]"
  >
    <slot></slot>
    <img
      v-if="closable"
      :src="src"
      name="clear"
      class="tag-close"
      @click="close"
    />
  </span>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Colors } from '@/models/enums/colors';
  export default defineComponent({
    name: 'Tag',
    props: {
      type: {
        default: Colors.NEUTRAL,
        validator: (value: Colors) =>
          [
            Colors.PRIMARY,
            Colors.SUCCESS,
            Colors.DANGER,
            Colors.WARNING,
            Colors.BLACK,
            Colors.NEUTRAL,
          ].includes(value),
      },
      closable: { type: Boolean },
      filled: { type: Boolean },
      src: { type: String },
    },
    emits: ['close'],
    setup(props, { emit }) {
      function close() {
        if (!props.closable) {
          return;
        }
        emit('close');
      }
      return { close };
    },
  });
</script>

<style lang="scss" scoped>
  @use '@/assets/styles/settings/variables';
  @use '@/assets/styles/tools/mixins';

  @mixin setTagType($color) {
    border: variables.$space-1 solid $color;

    > .tag-close {
      color: inherit;
    }

    &--filled {
      color: #fff;
      background-color: $color;
    }
  }

  .tag {
    position: relative;
    box-sizing: border-box;
    display: inline-flex;
    padding: variables.$padding-4 variables.$padding-8;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    color: black;
    vertical-align: middle;
    background-color: #fff;
    border: variables.$space-1 solid black;
    border-radius: variables.$space-8;

    &-close {
      margin-left: variables.$margin-4;
      font-size: inherit;
      vertical-align: middle;
      cursor: pointer;
      user-select: none;
    }

    &--primary {
      @include setTagType(mixins.color(blue, 500));
    }

    &--success {
      @include setTagType(mixins.color(green, 500));
    }

    &--warning {
      @include setTagType(mixins.color(yellow, 500));
    }

    &--danger {
      @include setTagType(mixins.color(red, 500));
    }

    &--black {
      @include setTagType(mixins.color(black, 500));
    }
  }
</style>
