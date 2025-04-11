<template>
  <header
    class="header"
    :class="{ 'header--menu-active': isMenuActive }"
  >
    <div class="header__container container">
      <div class="header__body">
        <div class="header__top">
          <NuxtLink
            to="/"
            class="header__logo-link"
          >
            <img
              src="/icons/logo-dark.svg"
              class="header__logo-img"
            >
            <img
              src="/icons/logo-dark-text.svg"
              class="header__logo-text"
            >
          </NuxtLink>
          <ButtonRegion
            region="г. Нижний Новгород"
            name="dark"
          />
          <ButtonBurger :is-closed="false" class="header__burger" />
        </div>
        <div class="header__bottom">
          <nav class="header__nav">
            <ul class="header__nav-list">
              <li
                class="header__nav-item header__nav-item--parent "
                :class="{ 'header__nav-item--active': isSubmenuActive }"
              >
                <button
                  to="/"
                  class="header__nav-btn"
                >
                  Бизнесу
                </button>
                <div class="header__submenu">
                  <button class="header__submenu-back">
                    Бизнесу
                  </button>
                  <ul class="header__submenu-list">
                    <li class="header__submenu-item">
                      <NuxtLink
                        to="#"
                        class="header__submenu-link"
                      >Доставка для ритейлеров</NuxtLink>
                    </li>
                    <li class="header__submenu-item">
                      <NuxtLink
                        to="#"
                        class="header__submenu-link"
                      >Доставка до складов маркетплейсов</NuxtLink>
                    </li>
                    <li class="header__submenu-item">
                      <NuxtLink
                        to="#"
                        class="header__submenu-link"
                      >Фулфилмент</NuxtLink>
                    </li>
                    <li class="header__submenu-item">
                      <NuxtLink
                        to="#"
                        class="header__submenu-link"
                      >Складская логистика</NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="header__nav-item">
                <NuxtLink
                  to="/"
                  class="header__nav-link"
                >Переезды</NuxtLink>
              </li>
              <li class="header__nav-item">
                <NuxtLink
                  to="/"
                  class="header__nav-link"
                >Акции</NuxtLink>
              </li>
              <li class="header__nav-item">
                <NuxtLink
                  to="/"
                  class="header__nav-link"
                >Документы</NuxtLink>
              </li>
              <li class="header__nav-item">
                <NuxtLink
                  to="/"
                  class="header__nav-link"
                >Автопарк</NuxtLink>
              </li>
              <li class="header__nav-item">
                <NuxtLink
                  to="/"
                  class="header__nav-link"
                >Вакансии</NuxtLink>
              </li>
              <li class="header__nav-item">
                <NuxtLink
                  to="/"
                  class="header__nav-link header__nav-link--accent"
                >Сервисный центр</NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuActive = ref(true)
const isSubmenuActive = ref(true)
</script>

<style lang="scss" scoped>
.header {
  & {
    position: absolute;
    top: 0;
    left: 0;
    z-index: var(--header-index);
    width: 100%;
    height: var(--header-height);
    transition: top var(--time);
    margin-top: auto;
  }

  &__body {
    width: 100%;
    height: var(--header-height-body);
    display: flex;
    flex-direction: column;
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
    display: flex;
    align-items: center;
    gap: 8px;
  }
  &__logo-img{
    width: 57px;
    height: 32px;
    object-fit: contain;
  }
  &__logo-text{
    width: 139px;
    height: 20px;
  }
  &__burger{
    display: none;
  }
  &__top{
    padding: 12px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    background-color: var(--header-bg);
  }
  &__bottom{
    flex-grow: 1;
    display: flex;
    align-items: center;
    padding: 0px 24px;
    background-color: var(--bg-secondary-dark);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  &__nav-list{
    display: flex;
    gap: 32px;
  }
  &__nav-item{
    &--parent{
        position: relative;
    }
  }
  &__nav-btn{
    font-weight: 400;
    font-family: var(--font);
    font-size: inherit;
    letter-spacing: 0.01em;
    line-height: 1.1;
    color: inherit;
    transition: color var(--time);
    display: flex;
    align-items: center;
    &::after{
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        mask-repeat: no-repeat;
        mask-position: center;
        mask-size: contain;
        mask-image: url(/icons/chevron.svg);
        background-color: var(--icon-tertiary);
    }
  }
  &__nav-link{
    transition: color var(--time);
    letter-spacing: 0.01em;
    line-height: 1.1;
    &--accent{
        display: flex;
        height: fit-content;
        &::after{
            content: '';
            display: block;
            width: 16px;
            height: 16px;
            mask-repeat: no-repeat;
            mask-position: center;
            mask-size: contain;
            mask-image: url(/icons/arrow-transition.svg);
            background-color: var(--icon-tertiary);
            transition: background-color var(--time);
        }
    }
  }
  &__submenu{
    z-index: 1;
    position: absolute;
    top: calc(100% + 28px);
    left: -24px;
    width: 256px;
    padding: 8px 24px;
    border-radius: 10px;
    background-color: var(--bg-light);
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--time), visibility var(--time);
    .header__nav-item--active &{
        opacity: 1;
        visibility: visible;
    }
  }
  &__submenu-back{
    display: none;
  }
  &__submenu-item{
    padding: 16px 0;
    border-bottom: 1px solid var(--stroke-primary);
    &:last-child{
        border: none;
    }
  }
  &__submenu-link{
    color: var(--text-tertiary);
  }
}
@include hover {
    .header{
        &__nav-btn:hover{
            color: var(--text-accent);
        }
        &__nav-link:hover{
            color: var(--text-accent);
        }
        &__nav-link--accent:hover::after{
            background-color: var(--icon-accent);
        }
        &__submenu-link:hover{
            color: var(--text-accent);
        }
    }
}
@include tablet {
    .header{
        &__body{
            position: relative;
        }
        &__container{
            padding: 0;
        }
        &__burger{
            display: block;
            margin-left: auto;
        }
        &__logo-link{
            margin-right: 30px;
        }

        &__top{
            padding: 0 var(--container-padding);
            height: 100%;
            justify-content: start;
            border-radius: 0;
            border-bottom-right-radius: 20px;
            border-bottom-left-radius: 20px;
            transition: border-radius var(--time);
        }

        &__bottom{
            position: fixed;
            top: calc(var(--header-height-body));
            left: 0;
            right: 0;
            height: calc(100% - var(--header-height-body));
            border-radius: 0;
            background-color: var(--bg-primary);
            justify-content: start;
            align-items: start;
            padding-top: 20px;
            opacity: 0;
            visibility: hidden;
            transition: opacity var(--time), visibility var(--time);
        }

        &__nav-list{
            flex-direction: column;
        }

        &__nav-item{
            position: static;
        }

        &__submenu{
            width: 100%;
            height: 100%;
            top: 0;
        }

        &__nav{
            width: 100%;
        }

        &__nav-list{
            gap: 0;
        }
        &__nav-item{
            padding: 20px 0;
            border-bottom: 1px solid var(--stroke-tertiary-t5);
            &:last-child{
                border: none;
            }
        }
        &__nav-btn{
            width: 100%;
            &::after{
                transform: rotate(-90deg);
                transform-origin: center;
            }
        }
        &__submenu{
            left: 0;
            padding: var(--container-padding);
        }
        &__submenu-back{
            width: 100%;
            padding: 20px 0;
            display: flex;
            align-items: center;
            font-family: var(--font);
            font-size: 15px;
            letter-spacing: 0.01em;
            line-height: 1.1;
            color: var(--text-tertiary);
            border-bottom: 1px solid var(--stroke-tertiary-t5);
            &::before{
                content: '';
                display: block;
                width: 24px;
                height: 24px;
                mask-repeat: no-repeat;
                mask-position: center;
                mask-size: contain;
                mask-image: url(/icons/chevron.svg);
                background-color: var(--icon-tertiary);
                transform: rotate(90deg);
            }
        }
        &__submenu-item{
            padding: 20px 0;
            border-color: var(--stroke-tertiary-t5);
        }
    }
    .header--menu-active{
        .header__top{
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }
        .header__bottom{
            opacity: 1;
            visibility: visible;
        }
    }
}

@include mobile {
    .header{
        &__nav-item{
            padding: 16px 0;
        }
        &__submenu-back{
            padding: 16px 0;
        }
        &__submenu-item{
            padding: 16px 0;
        }
    }
}
</style>
