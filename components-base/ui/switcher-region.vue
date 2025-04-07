<template>
  <div class="switcher-region">
    <button class="switcher-region__head">
      <div class="switcher-region__icon" />
      <div class="switcher-region__name">
        {{ activeRegion }}
      </div>
      <div class="switcher-region__arrow" />
    </button>
    <div class="switcher-region__body">
      <div class="switcher-region__inner">
        <div class="switcher-region__subtitle">
          Выберите ваш город
        </div>
        <div class="switcher-region__wrap">
          <ul class="switcher-region__list">
            <li class="switcher-region__item">
              <NuxtLink to="#">Нижний Новгород</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  state: {
    type: String,
    default: 'light',
    validator: value => ['light', 'dark'].includes(value),
  },
})
const activeRegion = ref('г. Нижний Новгород')
</script>

<style lang="scss" scoped>
.switcher-region{
    position: relative;
    height: fit-content;
    &__head{
        display: flex;
        align-items: center;
        gap: 8px;
    }
    &__icon{
        width: 24px;
        height: 24px;
        mask-repeat: no-repeat;
        mask-position: center;
        mask-size: contain;
        mask-image: url(/icons/pin.svg);
        background-color: var(--icon-accent);
    }
    &__name{
        font-family: var(--font);
        color: var(--text-secondary);
        font-size: 16px;
        letter-spacing: 0.01;
    }
    &__arrow{
        width: 24px;
        height: 24px;
        mask-repeat: no-repeat;
        mask-position: center;
        mask-size: contain;
        mask-image: url(/icons/chevron.svg);
        background-color: var(--icon-accent);
    }
    &__body{
        position: absolute;
        top: calc(100% + 24px);
        right: 0;
        max-width: 218px;
        color: var(--text-tertiary);
        opacity: 0;
        visibility: hidden;
        transition: opacity var(--time), visibility var(--time);
    }
    &__inner{
        background-color: var(--bg-light);
        padding: 24px;
        border-radius: 10px;
    }
    &__subtitle{
        font-weight: 600;
        font-style: 16px;
        letter-spacing: 0.01;
        margin-bottom: 24px;
    }
}
</style>
