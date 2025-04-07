<template>
  <ul
    ref="accordion"
    class="accordion"
  >
    <li
      v-for="item of data"
      :key="item.title"
      class="accordion__item"
    >
      <button
        class="accordion__head"
        @click="toggleHead($event)"
      >
        <div class="accordion__title">
          {{ item.title }}
        </div>
        <span class="accordion__icon" />
      </button>
      <div class="accordion__body">
        <ContainerContent class="accordion__inner">
          <div v-html="item.body" />
        </ContainerContent>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// data: [{
//     title: 'String',
//     body: 'String'
// }]
const props = defineProps({
  data: {
    type: Array,
    default: () => {},
  },
  initial: {
    type: Number,
    default: -1,
  },
})
const accordion = ref(null)

onMounted(() => {
  if (props.initial > 0) {
    const elements = accordion.value.querySelectorAll('.accordion__item')
    const activeElem = elements[props.initial]
    const activeBody = activeElem.querySelector('.accordion__body')
    activeElem.classList.add('accordion__item--active')
    activeBody.style.height = 'auto'
    const height = activeBody.clientHeight
    activeBody.style.height = height + 'px'
  }
})

function toggleHead($event) {
  const parent = $event.currentTarget.parentNode
  const body = parent.querySelector('.accordion__body')

  accordion.value.querySelectorAll('.accordion__item--active').forEach((el) => {
    if (parent !== el) {
      el.classList.remove('accordion__item--active')
      el.querySelector('.accordion__body').style.height = '0px'
    }
  })

  if (parent.classList.contains('accordion__item--active')) {
    // если активная и нужно закрыть
    parent.classList.remove('accordion__item--active')
    setTimeout(() => {
      body.style.height = '0px'
    }, 0)
  }
  else {
    // если неактиная и нужно открыть
    parent.classList.add('accordion__item--active')
    body.style.height = 'auto'
    const height = body.clientHeight
    body.style.height = '0px'
    setTimeout(() => {
      body.style.height = height + 'px'
    }, 0)
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  font-family: var(--font);
  display: flex;
  flex-direction: column;
  gap: 9px;
  &__item {
    background-color: var(--bg-primary);
    border-radius: 10px;
    &--active {
      .accordion__body {
        visibility: visible;
      }
      .accordion__title {
        color: var(--text-accent);
      }
      .accordion__icon {
        transform: rotate(45deg);
        fill: var(--icons-grey);
      }
    }
  }
  &__head {
    font-family: inherit;
    width: 100%;
    cursor: pointer;
    padding: 24px;
    display: grid;
    grid-template-columns: 1fr 20px;
    align-items: center;
    text-align: start;
    grid-gap: 20px;
    transition: background-color var(--time);
  }
  &__title {
    font-weight: 700;
    font-size: 17px;
    line-height: 1.4;
    color: var(--text-primary);
  }
  &__icon {
    width: 20px;
    height: 20px;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    mask-image: url(/icons/plus.svg);
    background-color: var(--icon-tertiary-t30);
    transition: background-color var(--time), transform var(--time);
  }
  &__body {
    height: 0;
    overflow: hidden;
    visibility: hidden;
    transition: height var(--time), visibility var(--time);
  }
  &__inner {
    padding: 0px 24px 24px;
    color: var(--text-default);
    max-width: 700px;
  }
}
@include hover {
  .accordion {
    &__head:hover &__icon {
      background-color: var(--icon-tertiary);
    }
  }
}
@include laptop {
  .accordion {
    &__title {
      font-size: 18px;
    }
  }
}
@include tablet-s {
  .accordion {
    &__head {
      padding: 20px 0;
      grid-template-columns: 1fr 30px;
    }
    &__title {
      font-size: 16px;
    }
    &__icon {
      width: 30px;
      height: 30px;
    }
    &__inner {
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
    }
  }
}
</style>
