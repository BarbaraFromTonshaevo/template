<template>
  <button
    class="btn-region"
    :class="'btn-region--' + name"
  >
    {{ region }}
  </button>
</template>

<script setup>
defineProps({
  region: {
    type: String,
    default: 'г. Нижний Новгород',
  },
  name: {
    type: String,
    default: 'dark',
    validator: value => ['light', 'dark'].includes(value),
  },
})
</script>

<style lang="scss" scoped>
.btn-region {
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
  font: 400 16px/1 var(--font);
  transition: color var(--time);
  color: var(--text-tertiary);
  &::before {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    mask-image: url(/icons/pin.svg);
    background-color: var(--icon-accent);
  }
  &--light {
    color: var(--text-secondary);
    &::before{
        background-color: var(--icon-accent-2);
    }
  }
}
@include hover {
  .btn-region:hover {
    color: var(--text-accent);
  }
  .btn-region--light:hover {
    color: var(--icon-accent-2);
  }
}
</style>
