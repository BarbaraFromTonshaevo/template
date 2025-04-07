<template>
  <button class="btn-up" aria-label="Отскролить к началу страницы" />
</template>

<script setup></script>

<style lang="scss" scoped>
.btn-up {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  transition: background-color var(--time);
  &::before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    mask-image: url(/icons/arrow-long.svg);
    background-color: var(--icon-tertiary);
    transition: background-color var(--time);
  }
  &:hover {
    background-color: var(--bg-primary);
  }
}
@include hover{
    .btn-up:hover::before{
        animation: btnUp infinite 1.5s ease;
    }
}
@keyframes btnUp{
    0%{
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100%{
        transform: translateY(0);
    }
}
</style>
