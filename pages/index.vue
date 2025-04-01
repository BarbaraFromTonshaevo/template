<template>
  <main class="main">
    <div class="container">
      <h1 class="title-h1">
        Main
      </h1>
      <ButtonBase
        name="primary"
        mode="button"
        @click="appStateStore.makeThanksActive()"
      >
        open
      </ButtonBase>
      <ContainerContent>
        <h3>hehe</h3>
        <ul>
          <li>
            hehe
          </li>
          <li>hehe</li>
        </ul>
        <ol>
          <li>
            hehe
          </li>
          <li>hehe</li>
        </ol>
      </ContainerContent>
    </div>
    <DialogThanks />
  </main>
</template>

<script setup>
import { useAppStateStore } from '@/stores/appState'

const appStateStore = useAppStateStore()
</script>
