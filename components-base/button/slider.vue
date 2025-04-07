<template>
  <button
    class="btn-slider"
    :class="['btn-slider--' + name, 'btn-slider--' + direction]"
  />
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: 'light',
    validator: value => ['light', 'dark'].includes(value),
  },
  direction: {
    type: String,
    default: 'left',
    validator: value => ['left', 'right', 'bottom', 'top'].includes(value),
  },
})
</script>

<style lang="scss" scoped>
.btn-slider {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background-color: var(--bg-primary);
  transition: background-color var(--time);
  &::before {
    content: "";
    display: block;
    width: 28px;
    height: 28px;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    mask-image: url(/icons/chevron.svg);
    background-color: var(--icon-tertiary);
    transition: background-color var(--time);
  }
  &:disabled{
    pointer-events: none;
  }
  &--bottom{
    transform: rotate(0deg);
  }
  &--top{
    transform: rotate(180deg);
  }
  &--right{
    transform: rotate(-90deg);
  }
  &--left{
    transform: rotate(90deg);
  }

  &--light {
    &:disabled {
      background-color: var(--bg-secondary-dark);
      &::before {
        background-color: var(--icon-tertiary-t30);
      }
    }
  }
  &--dark {
    background-color: var(--bg-accent-t10);
    &:disabled {
      background-color: var(--bg-tertiary-t20);
      &::before {
        background-color: var(--icon-tertiary-t30);
      }
    }
  }
}
@include hover {
  .btn-slider:hover {
    background-color: var(--bg-secondary-dark);
  }
  .btn-slider--dark:hover {
    background-color: var(--bg-accent-t10-hover);
  }
}
</style>
