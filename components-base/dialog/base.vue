<template>
  <dialog
    ref="dialog"
    class="dialog"
    @click="clickDialog($event)"
  >
    <div class="dialog__body">
      <button
        aria-label="Закрыть модальное окно"
        class="dialog__close"
        @click="emits('closeDialog')"
      >
        <img src="/icons/close.svg">
      </button>
      <slot />
    </div>
  </dialog>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['closeDialog'])
const dialog = ref(null)

function close() {
  dialog.value.classList.remove('dialog--open')
  setTimeout(() => {
    dialog.value.close()
  }, 500)
}
function clickDialog(event) {
  if (event.target == event.currentTarget) {
    emits('closeDialog')
  }
}
// следит за пропсом который отвечает за активность попапа

onMounted(() => {
  watch(
    () => props.isOpen,
    (newValue) => {
      if (newValue) {
        dialog.value.showModal()
        dialog.value.classList.add('dialog--open')
      }
      else {
        close()
      }
    },
    {
      immediate: true, // Запустить сразу при монтировании
    },
  )
})
</script>

<style lang="scss" scoped>
.dialog {
  margin: auto;
  border: none;
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: hidden;
  &__body {
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    padding: 50px 80px;
    background-color: white;
    opacity: 0;
    transform: translateY(-50px);
    transition: opacity 0.5s, transform 0.5s;
  }

  &__close {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  &::backdrop {
    background-color: var(--modal-bg);
    opacity: 0;
    transition: opacity 0.5s;
  }
  &[open] {
    visibility: visible;
  }

  &--open {
    &::backdrop {
      opacity: 0.6;
    }
    .dialog__body {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  :deep(.dialog__title){
    font-size: 40px;
  }
  :deep(.dialog__subtitle){
    font-size: 20px;
  }
}
</style>
