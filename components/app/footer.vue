<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__body">
        <NuxtLink
          to="/"
          class="footer__logo-link"
        >
          <img
            src="/icons/webshop.svg"
            class="footer__logo-img"
          >
        </NuxtLink>
        <nav class="footer__nav" />
      </div>
      <div class="footer__bottom">
        <div class="footer__copyright">
          ©{{ currYear }} Template
        </div>
        <a
          class="footer__policy"
          href="#"
          target="_blank"
        >Политика конфиденциальности</a>
        <a
          class="footer__webshop"
          href="https://webshop.ru/"
          target="_blank"
        >
          Разработка сайта :
          <img src="/icons/webshop.svg">
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid var(--stroke-tertiary);
  background-color: var(--footer-bg);
  &__body {
    padding-top: 60px;
    padding-bottom: 60px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  &__logo-link {
    width: 160px;
    display: flex;
    margin-bottom: 48px;
  }
  &__logo-img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    gap: 15px;
  }
  &__copyright,
  &__policy,
  &__webshop {
    font-size: 16px;
    color: var(--text-footer);
    transition: color var(--time);
  }
  &__webshop-svg {
    width: 70px;
    height: 12px;
    fill: var(--icons-black);
    transition: fill var(--time);
  }
}
@include hover {

}
@include desktop {

}
@include tablet-s {

}
@include mobile {

}
</style>
