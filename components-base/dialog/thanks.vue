<template>
  <Teleport to="#teleports">
    <DialogBase
      :is-open="appStateStore.dialogThanksActive"
      @close-dialog="appStateStore.makeThanksInactive()"
    >
      <h2 class="dialog__title">
        Спасибо
      </h2>
      <p class="dialog__subtitle">
        Спасибо за заявку. Мы свяжемся с вами в ближайшее время.
      </p>
    </DialogBase>
  </Teleport>
</template>

<script setup>
import { useAppStateStore } from '@/stores/appState'

const appStateStore = useAppStateStore()
</script>
