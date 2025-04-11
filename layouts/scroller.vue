<template>
  <div>
    <div
      ref="scroller"
      class="scroller"
    >
      <AppHeader ref="headerAppElem" />
      <div>
        <slot />
      </div>
      <AppFooter />
    </div>
    <ButtonUp
      class="layout__btn-up"
      @click="scrollUp"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Scrollbar from 'smooth-scrollbar'
// import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
// import { useAppStateStore } from '~/stores/appState'

// const appStateStore = useAppStateStore()
const route = useRoute()
const headerAppElem = ref(null)
// сетап скроллера
const scroller = ref(null)
let bodyScrollBar

const { setScrollbar, scrollbar } = provideScrollbar()
function scrollUp() {
  bodyScrollBar.scrollTo(0, 0, 500)
}
onMounted(() => {
  console.log(headerAppElem.value)
  bodyScrollBar = Scrollbar.init(scroller.value, {
    damping: 0.1,
    delegateTo: scroller.value,
    alwaysShowTracks: true,
    renderByPixels: true,
    continuousScrolling: true,
    thumbMinSize: 20,
    syncCallbacks: true,
  })

  setScrollbar(bodyScrollBar)

  gsap.registerPlugin(ScrollTrigger)
  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 1000)

  ScrollTrigger.scrollerProxy(scroller.value, {
    scrollTop(value) {
      if (arguments.length > 0) {
        bodyScrollBar.scrollTop = value
      }
      return bodyScrollBar.scrollTop
    },
  })

  bodyScrollBar.addListener(ScrollTrigger.update)
  ScrollTrigger.defaults({ scroller: scroller.value })

  function setupScroller() {
    // скроллить страницу наверх при смене роута
    watch(
      () => route.path,
      () => {
        setTimeout(() => {
          bodyScrollBar.scrollTop = 0
        }, 200)
      },
    )
  }

  setupScroller()
})
onUnmounted(() => {
  if (scrollbar.value) {
    scrollbar.value.destroy()
  }
})
</script>

<style lang="scss" scoped>
.scroller {
  height: 100vh;
  overflow: hidden;
}
.layout__btn-up {
  position: fixed;
  bottom: 50px;
  right: 50px;
  // z-index: var(--header-index);
}
</style>

<style lang="scss">
.scrollbar-track-x {
  display: none !important;
}
.scrollbar-track {
  z-index: 2 !important;
  background-color: transparent;
}
</style>
