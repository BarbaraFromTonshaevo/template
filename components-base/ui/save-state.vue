<template>
  <div
    class="ui-save-state"
    :class="'ui-save-state--' + state"
  >
    <span
      class="ui-save-state__initial"
      :style="'background-color:' + color + ';'"
    />
    <span
      class="ui-save-state__loading"
      :style="'background-color:' + color + ';'"
    />
    <span
      class="ui-save-state__success"
      :style="'background-color:' + color + ';'"
    />
  </div>
</template>

<script setup>
defineProps({
  state: {
    type: String,
    default: 'initial',
    validator: value => ['initial', 'loading', 'success'].includes(value),
  },
  color: {
    type: String,
    default: '#ffffff',
  } })
</script>

<style lang="scss" scoped>
.ui-save-state{
    position: relative;
    width: 24px;
    aspect-ratio: 1;
    &__initial,
    &__loading,
    &__success{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        mask-repeat: no-repeat;
        mask-position: center;
        mask-size: contain;
        opacity: 0;
        transition: opacity var(--time), background-color var(--time);
    }
    &__initial{
        mask-image: url(/icons/save.svg);
        background-color: #fff;
    }
    &__loading{
        mask-image: url(/icons/loading.svg);
        background-color: #fff;
        animation: none;
    }
    &__success{
        mask-image: url(/icons/success.svg);
        background-color: #fff;
    }
    &--initial &__initial{
        opacity: 1;
    }
    &--loading &__loading{
        opacity: 1;
        animation: loop 1s linear infinite;
    }
    &--success &__success{
        opacity: 1;
    }
}
@keyframes loop{
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
