<template>
  <button class="btn-show-more">
    Показать еще
    <span class="btn-show-more__icon" />
  </button>
</template>

<style lang="scss" scoped>
.btn-show-more{
    display: flex;
    align-items: center;
    gap: 4px;
    font: 500 15px/1 var(--font);
    color: var(--text-tertiary);
    transition: color var(--time);
    &__icon{
        width: 20px;
        height: 20px;
        mask-repeat: no-repeat;
        mask-position: center;
        mask-size: contain;
        mask-image: url(/icons/load-more.svg);
        background-color: var(--icon-tertiary);
        transition: background-color var(--time);
    }
}
@include hover{
    .btn-show-more{
        &:hover{
            color: var(--text-primary);
        }
        &:hover &__icon{
            background-color: var(--icon-primary);
        }
    }
}
</style>
