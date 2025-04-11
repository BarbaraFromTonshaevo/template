<template>
  <div>
    <AppHeader />
    <div>
      <slot />
    </div>
    <AppFooter />
    <ButtonUp
      class="layout__btn-up"
      @click="scrollUp"
    />
  </div>
</template>

<script setup>
function scrollUp() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
.layout__btn-up{
    position: fixed;
    bottom: 50px;
    right: var(--container-padding);
}
</style>
