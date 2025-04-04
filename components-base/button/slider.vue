<template>
  <button
    class="btn-slider"
    :class="['btn-slider--' + state, 'btn-slider--' + direction]"
  />
</template>

<script setup>
defineProps({
  state: {
    type: String,
    default: 'light',
    validator: value => ['light', 'dark'].includes(value),
  },
  direction: {
    type: String,
    default: 'left',
    validator: value => ['left', 'right'].includes(value),
  },
})
</script>

<style lang="scss" scoped>
.btn-slider{
    
}
</style>
