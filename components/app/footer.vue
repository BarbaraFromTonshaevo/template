<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__body">
        <div class="footer__left">
          <NuxtLink
            to="/"
            class="footer__logo-link"
          >
            <img
              src="/icons/logo-light.svg"
              class="footer__logo-img"
              alt="Логотип"
            >
            <img
              src="/icons/logo-light-text.svg"
              class="footer__logo-text"
              alt="gthtdjpjd 24"
            >
          </NuxtLink>
          <p class="footer__descr">
            Логистическая компания.<br> Перевозим больше 10 лет
          </p>
        </div>
        <nav class="footer__nav">
          <div class="footer__nav-left">
            <div class="footer__subtitle text-m">
              Для всех
            </div>
            <ul class="footer__nav-list">
              <li class="footer__nav-item">
                <NuxtLink class="footer__nav-link">Переезды</NuxtLink>
              </li>
              <li class="footer__nav-item">
                <NuxtLink class="footer__nav-link">Акции</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="footer__nav-right">
            <div class="footer__subtitle text-m">
              Бизнесу
            </div>
            <ul class="footer__nav-list">
              <li class="footer__nav-item">
                <NuxtLink class="footer__nav-link">Доставка для ритейлеров</NuxtLink>
              </li>
              <li class="footer__nav-item">
                <NuxtLink class="footer__nav-link">Доставка до складов маркетплейсов</NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
        <UiSwitcherRegion/>
      </div>
      <div class="footer__bottom">
        <a
          class="footer__policy"
          href="#"
          target="_blank"
        >Политика конфиденциальности</a>
        <div class="footer__copyright">
          ©Перевозов 24
        </div>
        <div class="footer__development">
          <a
            class="footer__webshop"
            href="https://webshop.ru/"
            target="_blank"
          >
            Разработка сайта :
            <img src="/icons/webshop.svg">
          </a>
          <a
            class="footer__design"
            href=""
            target="_blank"
          >
            Дизайн иллюстраций: Евгений Гогин
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer {
  margin-top: -40px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: var(--footer-bg);
  color: var(--text-secondary);

  &__container{
    max-width: 1320px;
  }

  &__body {
    padding-top: 84px;
    padding-bottom: 48px;
    display: flex;
    gap: 30px;
  }

  &__logo-link {
    width: 160px;
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  &__logo-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__logo-text{
    width: 139px;
    height: 20px;
  }

  &__right{
    max-width: 350px;
  }

  &__descr{
    font-size: 14px;
    width: 100%;
  }

  &__nav{
    display: flex;
    gap: 64px;
  }

  &__nav-list{
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__nav-link{
    font-size: 16px;
    line-height: 1.1;
    letter-spacing: 0.01;
  }

  &__subtitle{
    margin-bottom: 32px;
    font-weight: 500;
  }

  &__bottom {
    color: var(--text-secondary-t50);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 48px 0;
    gap: 15px;
    border-top: 1px solid var(--stroke-secondary);
  }

  &__design,
  &__copyright,
  &__policy,
  &__webshop {
    font-size: 16px;
    transition: color var(--time);
  }

  &__webshop-svg {
    width: 70px;
    height: 12px;
  }

  &__development{
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 8px;
  }
}
@include hover {
    .footer__design:hover,
    .footer__policy:hover,
    .footer__webshop:hover{
        color: var(--text-secondary);
    }
}
@include desktop {
}
@include tablet-s {
}
@include mobile {
}
</style>
