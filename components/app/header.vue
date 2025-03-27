<template>
  <header
    class="header"
  >
    <div class="header__body">
      <div class="header__container container">
        <NuxtLink to="/" class="header__logo-link">
          <img src="/icons/webshop.svg" class="header__logo-img"/>
        </NuxtLink>
        <nav
          class="header__nav"
        >
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.header {
  & {
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--header-index);
    width: 100%;
    height: var(--header-height);
    transition: top var(--time);
  }

  &__body {
    height: var(--header-height);
    background-color: var(--bg-primary);
    border-bottom: 1px solid var(--stroke-primary);
  }
  &__container {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: auto;
    margin-bottom: auto;
  }
  &__logo-link {
    position: relative;
    width: 122px;
    aspect-ratio: 122/78;
  }
  &__logo-img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
@include hover {

}
@include desktop {

}
@include laptop {

}
@include tablet-s {

}
@include mobile {

}
</style>
