<template>
  <NuxtLayout :name="layout">
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />
    <NuxtErrorBoundary>
      <NuxtPage />
      <template #error="{ error }">
        <main class="main">
          <div class="container">
            <h1 class="title-h1">
              Ошибка
            </h1>
            <p>
              <code>{{ error }}</code>
            </p>
          </div>
        </main>
      </template>
    </NuxtErrorBoundary>
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'

const device = useDevice()
const layout = ref(device.isDesktop === true ? 'scroller' : 'default')
// const layout = ref('default')

onMounted(() => {

  // Добавляем наблюдатель на изменение состояния
//   watch(() => appStateStore.bodyNoScroll, (newVal) => {
//     if (newVal) {
//       document.body.classList.add('no-scroll');
//     } else {
//       document.body.classList.remove('no-scroll');
//     }
//   });
})

// аналитика
// useHead({
//   script: [],
//   noscript: [],
// });
</script>

<style lang="scss">
@use "assets/style/utils/reset";

@use "assets/style/utils/fonts";
@use "assets/style/utils/variables";
@use "assets/style/utils/common";

@use "assets/style/components/container";
@use "assets/style/components/title";
@use "assets/style/components/text";
@use "assets/style/components/section";
@use "assets/style/components/image";

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

*::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
*::-webkit-scrollbar-thumb {
  cursor: pointer;
  background-color: var(--stroke-primary);
  border-radius: 3px;
  &:hover {
    background-color: var(--stroke-secondary);
  }
}
.main {
  min-height: 100vh;
  padding-top: calc(var(--header-height) + var(--header-main-gap));
}
</style>
