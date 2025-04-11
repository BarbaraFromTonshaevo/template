<template>
  <button
    class="burger"
    :class="{ 'burger--closed': isClosed }"
    aria-label="Открыть меню"
  >
    <span class="burger__line" />
  </button>
</template>

<script setup>
defineProps({
  isClosed: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.burger {
  position: relative;
  width: 23px;
  height: 18px;
  &__line,
  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--icon-tertiary);
    transition: background-color var(--time), transform var(--time),
      opacity var(--time), top var(--time);
    transform-origin: left center;
  }
  &::before {
    top: 0;
  }
  &::after {
    top: calc(100% - 2px);
  }
  &__line {
    top: calc(50% - 1px);
  }
  &--closed {
    .burger__line {
      opacity: 0;
    }
    &::after {
      top: calc(100% - 1px);
      transform: rotate(-45deg);
    }
    &::before {
      top: 1px;
      transform: rotate(45deg);
    }
  }
}
@include hover {
  .burger:hover {
    .burger__line,
    &::after,
    &::before {
      background-color: var(--icons-accent);
    }
  }
}
</style>
