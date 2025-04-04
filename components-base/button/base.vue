<template>
  <NuxtLink
    v-if="mode === 'nuxt-link'"
    :to="link"
    :class="computedClasses"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
  <a
    v-else-if="mode === 'a'"
    :href="link"
    :class="computedClasses"
    v-bind="$attrs"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :class="computedClasses"
    :disabled="isDisabled ? true : false"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  mode: {
    type: String,
    default: 'button',
    validator: value => ['button', 'a', 'nuxt-link'].includes(value),
  },
  name: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'secondary', 'tertiary'].includes(value),
  },
  //   size: {
  //     type: String,
  //     default: 'middle',
  //     validator: value => ['middle', 'small', 'large'].includes(value),
  //   },
  link: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'button',
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
})

const computedClasses = computed(() => {
  return `btn btn--${props.name} ${props.isDisabled ? 'btn--disabled' : ''}`
  //   return `btn btn--${props.name} btn--${props.size} ${
  //     props.isDisabled ? 'btn--disabled' : ''
  //   }`
})
</script>

<style lang="scss" scoped>
$color: #0cf;

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-radius: 10px;
  color: var(--btn-text);
  font: 500 15px/1 var(--font);
  transition: all var(--time);
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--btn-bg);
    border-radius: 10px;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: var(--btn-bg-hover);
    transition: all var(--time);
    border-radius: 10px;
    z-index: -1;
  }
  &:disabled,
  &--disabled {
    color: var(--text-primary-t35);
    background-color: var(--bg-secondary-dark);
    pointer-events: none;
    box-shadow: none;
    &::after,
    &::before {
      opacity: 0;
    }
  }
  /*Primary button*/
  &--primary {
    --btn-bg: var(--bg-accent);
    --btn-bg-hover: var(--bg-accent-hover);
    --btn-text: white;
    --btn-text-hover: white;
  }

  /*Secondary button*/
  &--secondary {
    --btn-bg: var(--bg-secondary-dark);
    --btn-bg-hover: var(--bg-tertiary-t20);
    --btn-text: var(--text-tertiary);
    --btn-text-hover: var(--text-primary);
  }

  /*Tertiary button*/
  &--tertiary {
    --btn-bg: var(--bg-prim);
    --btn-bg-hover: var(--btn-tert-bg-hover);
    --btn-text: var(--text-accent);
    --btn-text-hover: var(--text-accent);
    box-shadow: 0 0 20px rgba(0,0,0,0.05);
  }
}
@include hover {
  .btn {
    &:hover {
      color: var(--btn-text-hover);
      &:before {
        width: 100%;
      }
    }
  }
}
</style>
