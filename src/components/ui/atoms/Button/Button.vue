<script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { Sizes } from '@/models/enums/sizes';
  import { Colors } from '@/models/enums/colors';

  export default defineComponent({
    name: 'Button',
    props: {
      type: {
        type: String,
        default: Colors.NEUTRAL,
        validator: (value: Colors) => Object.values(Colors).includes(value),
      },
      size: {
        type: String,
        default: Sizes.NORMAL,
        validator: (value: Sizes) => Object.values(Sizes).includes(value),
      },
      icon: { type: String, default: null },
      iconAfter: { type: Boolean, default: null },
      disabled: { type: Boolean },
      loading: { type: Boolean, default: false },
    },
    setup(props, { slots }) {
      const classes = computed(() => [
        {
          'button--empty': !slots.default,
          [`button--${props.size}`]: props.size,
          [`button--${props.type || 'neutral'}`]: props.type,
          ...(props.icon
            ? {
                [props.iconAfter
                  ? 'button__icon--right'
                  : 'button__icon--left']: true,
              }
            : null),
        },
      ]);
      return { classes };
    },
  });
</script>

<template>
  <button :disabled="disabled" class="button" :class="classes">
    <img v-if="icon" :src="icon" alt="icon" class="button__icon" />
    <span v-if="$slots.default && !loading" class="button__text">
      <slot />
    </span>
    <span v-if="loading"> Loading... </span>
  </button>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/settings/variables';
  @use '@/assets/styles/tools/mixins';
  @mixin setButtonType($color) {
    background-color: $color;
    border: variables.$space-1 solid $color;
    box-shadow: 0 variables.$space-2 variables.$space-4 fade($color, 40%);

    &:hover {
      background-color: lighten($color, 16%);
      border: variables.$space-1 solid lighten($color, 16%);
    }

    &:active {
      background-color: darken($color, 7%);
      border: variables.$space-1 solid darken($color, 7%);
      box-shadow: none;
    }

    &:focus {
      box-shadow: 0 variables.$space-1 variables.$space-2 fade-out($color, 0.8),
        0 0 0 variables.$space-2 fade-out($color, 0.8);
    }
  }

  .button {
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    padding: variables.$padding-6 variables.$padding-16;
    font-family: inherit;
    font-size: variables.$font-button;
    font-weight: variables.$font-weight-button;
    line-height: 1;
    color: mixins.color(white, 500);
    text-shadow: 0 variables.$space-1 0 rgba(mixins.color(black, 500), 0.07);
    cursor: pointer;
    user-select: none;
    border: 0;
    border-radius: variables.$space-8;
    outline: none;
    transition: all 0.2s;

    &-text,
    > i {
      vertical-align: middle;
    }

    &-text {
      display: flex;

      &:empty {
        display: none;
      }
    }

    &__icon {
      width: variables.$space-18;
      height: variables.$space-18;
      margin-top: -2px;
      font-size: variables.$font-button;

      &--left {
        .button__text {
          margin-left: variables.$margin-6;
        }
      }

      &--right {
        .button__icon {
          order: 2;
        }

        .button__text {
          order: 1;
          margin-right: variables.$margin-6;
        }
      }
    }

    &--white {
      @include setButtonType(mixins.color(white, 500));
    }

    &--black {
      @include setButtonType(mixins.color(black, 200));
    }

    &--primary {
      @include setButtonType(mixins.color(blue, 500));
    }

    &--success {
      @include setButtonType(mixins.color(green, 400));
    }

    &--warning {
      @include setButtonType(mixins.color(yellow, 400));
    }

    &--error {
      @include setButtonType(mixins.color(red, 500));
    }

    &--neutral {
      box-sizing: border-box;
      color: mixins.color(black, 500);
      text-shadow: none;
      background-color: mixins.color(white, 500);
      box-shadow: mixins.color(black, 100) 0 variables.$space-1
        variables.$space-1 0;

      &:focus {
        border: variables.$space-1 solid mixins.color(white, 700);
        box-shadow: mixins.color(black, 100) 0 variables.$space-1
            variables.$space-1 0,
          0 0 0 variables.$space-1 fade-out(mixins.color(white, 700), 0.8);
      }

      &:active {
        background-color: mixins.color(white, 500);
      }

      &.button__text {
        color: mixins.color(black, 500);
        text-shadow: none;
        background: transparent;
        border: none;
        box-shadow: none;
      }

      &.button__text:hover {
        background-color: fade-out(mixins.color(black, 500), 0.94);
      }

      &.button__text:focus {
        box-shadow: 0 0 0 variables.$space-3
          fade-out(mixins.color(white, 700), 0.8);
      }

      &.button__text:active {
        background-color: fade-out(mixins.color(black, 500), 0.8);
        box-shadow: none;
      }
    }

    &:disabled,
    &:disabled:hover,
    &:disabled:active {
      top: 0;
      color: mixins.color(white, 500);
      text-shadow: none;
      cursor: not-allowed;
      background-color: mixins.color(white, 700);
      border: variables.$space-1 solid mixins.color(white, 700);
      box-shadow: none;
    }

    &--big {
      padding: variables.$space-16 variables.$space-32;
    }

    &--small {
      padding: variables.$space-6 variables.$space-16;
    }

    &--empty {
      padding: variables.$space-8;
    }
  }
</style>
