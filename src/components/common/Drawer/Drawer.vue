<script lang="ts">
  import { Positions } from '@/models/enums/positions';
  import { defineComponent, computed } from 'vue';

  export default defineComponent({
    name: 'Drawer',
    props: {
      modelValue: { type: Boolean, default: false },
      width: { type: String, default: '50vw' },
      closableMask: { type: Boolean, default: true },
      hideMask: Boolean,
      placement: {
        type: String,
        default: Positions.R,
        validator: (value: Positions) =>
          [Positions.L, Positions.R].includes(value),
      },
    },
    setup(props, { emit }) {
      const classes = computed(() => [
        {
          'drawer__body--left': props.placement?.includes(Positions.L),
          'drawer__body--right': props.placement?.includes(Positions.R),
        },
      ]);

      function maskClick() {
        if (props.closableMask) {
          close();
        }
      }

      function close() {
        emit('update:modelValue', false);
      }

      return {
        maskClick,
        classes,
      };
    },
  });
</script>

<template>
  <teleport to="body">
    <aside class="drawer" aria-label="navigation drawer">
      <div
        v-show="modelValue && !hideMask"
        aria-label="mask"
        class="drawer__mask"
        tabindex="0"
        :style="{ cursor: closableMask ? 'pointer' : 'default' }"
        @click.self="maskClick"
      ></div>
      <div
        v-show="modelValue"
        class="drawer__body"
        aria-label="body"
        :class="`drawer__body--${placement}`"
        :style="{ width }"
      >
        <div class="drawer__body__menu">
          <span>Menu</span>
        </div>
        <div class="drawer__body__options" aria-label="linkslist">
          <router-link
            class="drawer__body__options__option"
            to="/movies"
            @click.self="maskClick"
            >Películas</router-link
          >
          <router-link
            class="drawer__body__options__option"
            to="/movies/details"
            @click.self="maskClick"
            >Actores</router-link
          >
          <router-link
            class="drawer__body__options__option"
            to="/"
            @click.self="maskClick"
            >Estudios</router-link
          >
        </div>
      </div>
    </aside>
  </teleport>
</template>

<style lang="scss" scoped>
  @use './src/assets/styles/settings/variables';
  @use './src/assets/styles/tools/mixins';

  .drawer {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    &__mask {
      position: fixed;
      top: 0;
      left: 0;
      z-index: variables.$z-drawer;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: rgba(mixins.color(black, 500), 0.45);
    }

    &__body {
      position: fixed;
      z-index: variables.$z-drawer;
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: auto;
      cursor: default;
      background-color: mixins.color(white, 500);
      box-shadow: 0 variables.$space-3 variables.$space-6
        rgba(mixins.color(black, 500), 0.07) 0 variables.$space-8
        variables.$space-16 rgba(mixins.color(black, 500), 0.1) 0 0 0
        variables.$space-1 rgba(mixins.color(black, 500), 0.05);
      transition: transform 0.2s ease-in-out;
      transition-delay: 1s;

      &__menu {
        display: flex;
        align-items: center;
        height: 8vh;
        margin-left: variables.$space-16;
        font-size: 1.5rem;
      }

      &__options {
        display: flex;
        flex-direction: column;
        text-align: left;
        margin-left: variables.$space-16;

        &__option {
          margin: variables.$space-16 0;
        }
      }

      &--right {
        top: 0;
        right: 0;
      }

      &--left {
        top: 0;
        left: 0;
      }
    }
  }
</style>
