<template>
  <button
    class="btn-arrow"
    :class="['btn-arrow--' + name, 'btn-arrow--' + direction]"
  />
</template>

<script setup>
defineProps({
  name: {
    type: String,
    default: 'primary',
    validator: value => ['primary', 'secondary', 'tertiary'].includes(value),
  },
  direction: {
    type: String,
    default: 'left',
    validator: value => ['left', 'right', 'bottom', 'top'].includes(value),
  },
})
</script>

<style lang="scss" scoped>
.btn-arrow {
  --bg-color: var(--bg-primary);
  --arrow-color: var(--icon-tertiary);
  --bg-color-hover: var(--bg-primary);
  --arrow-color-hover: var(--icon-tertiary);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  background-color: var(--bg-color);
  transition: background-color var(--time);

  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    mask-image: url(/icons/chevron.svg);
    background-color: var(--arrow-color);
    transition: background-color var(--time);
  }
  &:hover {
    background-color: var(--bg-color-hover);
    &::before {
      background-color: var(--arrow-color-hover);
    }
  }

  &--primary {
    --bg-color: var(--bg-primary);
    --arrow-color: var(--icon-tertiary);
    --bg-color-hover: var(--bg-secondary);
    --arrow-color-hover: var(--icon-tertiary);
    box-shadow: 0 0 20px rgba(0,0,0,0.05);
  }
  &--secondary {
    --bg-color: var(--bg-accent-t10);
    --arrow-color: var(--icon-tertiary);
    --bg-color-hover: var(--bg-accent-t10-hover);
    --arrow-color-hover: var(--icon-tertiary);
  }
  &--tertiary {
    --bg-color: var(--bg-tertiary-t20);
    --arrow-color: var(--icon-primary);
    --bg-color-hover: var(--bg-tertiary-t20);
    --arrow-color-hover: var(--icon-primary);
  }

  &--bottom {
    transform: rotate(0deg);
  }
  &--top {
    transform: rotate(180deg);
  }
  &--right {
    transform: rotate(-90deg);
  }
  &--left {
    transform: rotate(90deg);
  }
  &:disabled {
    background-color: var(--bg-secondary-dark);
    pointer-events: none;
    box-shadow: none;
    &::before {
      background-color: var(--icon-tertiary-t30);
    }
  }
}
</style>
