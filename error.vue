<template>
  <NuxtLayout>
    <main class="main">
      <AppError404 v-if="error.statusCode == 404" />
      <AppErrorMessage v-else :message="error.message" />
    </main>
  </NuxtLayout>
</template>

<script setup>
const error = useError()
</script>
