<template>
  <div>
    <AppHeader />
    <div>
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
// import { ref } from "vue";
import { useAppStateStore } from '~/stores/appState'

const appStateStore = useAppStateStore()
// const route = useRoute();

let lastScrollY = 0 // Для хранения предыдущей позиции прокрутки
const handleScroll = () => {
  const currentScrollY = window.scrollY // Текущая позиция прокрутки
  // Если мы прокручиваем вниз
  if (currentScrollY > lastScrollY) {
    appStateStore.makeHeaderHidden() // Скрыть шапку
  }
  else {
    appStateStore.makeHeaderVisible() // Показать шапку
  }
  lastScrollY = currentScrollY // Обновляем последнюю позицию прокрутки
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll) // Добавляем слушатель события
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll) // Удаляем слушатель события
})
</script>
