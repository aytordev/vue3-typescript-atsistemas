<script lang="ts">
  import { Colors } from '@/models/enums/colors';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'Input',
    inheritAttrs: false,
    props: {
      status: {
        type: String,
        validator: (value: Colors) =>
          [Colors.SUCCESS, Colors.WARNING, Colors.ERROR].includes(value),
      },
      type: {
        type: String,
        default: 'text',
      },
      placeholder: String,
      label: String,
      message: String,
      disabled: Boolean,
      modelValue: [String, Number],
    },
    setup(props, { emit }) {
      const focus = ref(false);

      function input(e: Event) {
        emit('update:modelValue', (e.target as HTMLInputElement).value);
      }
      return { input, focus };
    },
  });
</script>

<template>
  <div>
    <span v-if="label" class="label" aria-label="input label">{{ label }}</span>
    <div
      class="wrapper"
      :class="[status && `wrapper--${status}`, disabled && `wrapper--disabled`]"
      aria-label="input"
    >
      <input
        v-bind="$attrs"
        :type="type"
        class="input"
        :disabled="disabled"
        :value="modelValue"
        :placeholder="placeholder"
        @input="input"
        @focus="focus = true"
        @blur="focus = false"
      />
    </div>
    <transition name="fade-bottom">
      <span
        v-if="message"
        class="message"
        :class="[
          status && `message--${status}`,
          disabled && `message--disabled`,
        ]"
        aria-label="input message"
      >
        {{ message }}
      </span>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/settings/variables';
  @use '@/assets/styles/tools/mixins';

  .input {
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: variables.$space-8 variables.$space-4;
    font-size: variables.$font-input;
    background: transparent;
    border: none;
    outline: none;
    -webkit-font-smoothing: antialiased;

    &::placeholder {
      color: mixins.color(white, 700);
      text-indent: 0;
      transition: text-indent 0.27s ease;
    }

    &:focus::placeholder {
      text-indent: variables.$space-2;
    }
  }

  .label {
    display: block;
    margin-bottom: variables.$space-8;
    font-size: variables.$font-input-label;
    color: var(--text-color);
    text-align: left;
  }

  .message {
    display: block;
    padding: variables.$space-4 variables.$space-16;
    font-size: variables.$font-input-message;
    text-align: left;

    &--success {
      color: mixins.color(green, 400);
    }

    &--warning {
      color: mixins.color(yellow, 400);
    }

    &--danger {
      color: mixins.color(red, 500);
    }

    &--disabled {
      color: mixins.color(white, 700);
    }
  }

  .wrapper {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 2rem;
    overflow: hidden;
    color: var(--text-color);
    background-color: mixins.color(white, 500);
    border: 1px solid mixins.color(white, 700);
    border-radius: variables.$space-4;
    box-shadow: 0 1px 1px rgb(211 218 230 / 30%);
    transition: all 0.2s;

    &:hover {
      border-color: darken(mixins.color(black, 100), 10%);
    }

    &:focus-within {
      border: 1px solid mixins.color(blue, 500);
      box-shadow: 0 2px 4px fade(mixins.color(blue, 500), 40%),
        0 0 0 3px fade(mixins.color(blue, 500), 20%);

      &:hover {
        border-color: mixins.color(blue, 500);
      }
    }

    &--disabled,
    &--disabled:hover {
      cursor: not-allowed;
      background: mixins.color(white, 700);
      border-color: mixins.color(blue, 300) !important;

      .input:disabled {
        color: mixins.color(blue, 300);
        cursor: not-allowed;
      }
    }

    &--success {
      border-color: mixins.color(green, 400);
    }

    &--warning {
      border-color: mixins.color(yellow, 400);
    }

    &--danger {
      border-color: mixins.color(red, 500);
    }
  }
</style>
