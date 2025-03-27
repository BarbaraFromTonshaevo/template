<template>
  <div ref="wrap" class="slider-base__wrap">
    <SliderTop :title="title" class="slider-base__top" />
    <div ref="slider" class="swiper slider-base">
      <div class="swiper-wrapper slider-base__wrapper">
        <div
          v-for="(slide, index) in slides"
          :key="'slide' + index"
          class="swiper-slide slider-base__slide"
        >
          <a
            :href="slide.raw"
            data-fancybox="gallery"
            class="slider-base__fancybox style-picture-img"
            v-html="slide.markup"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "swiper/css";
import { ref, onMounted, onBeforeUnmount } from "vue";
const { isMobile } = useDevice();
defineProps({
  slides: {
    type: Array,
    required: true,
    default: () => [],
  },
  title: {
    type: String,
    required: false,
    default: "Фотогалерея",
  },
  isLocalImages: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const slider = ref(null),
  wrap = ref(null),
  swiper = ref(),
  prevBtn = ref(),
  nextBtn = ref();

function updateSliderWidth() {
  if (slider.value) {
    slider.value.style.width = "0px";
    setTimeout(() => {
      slider.value.style.width = wrap.value.clientWidth + "px";
    }, 0);
    // здесь можно добавить любой дополнительный код для пересчета ширины слайдера
  }
}

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateSliderWidth);
});

onMounted(() => {
  // на тот случай, если слайдер находится внутри flex и grid
  const containerGap =
    (wrap.value.clientWidth -
      wrap.value.querySelector(".slider-base__top").clientWidth) /
    2;
  window.addEventListener("resize", updateSliderWidth);
  slider.value.style.width = wrap.value.clientWidth + "px";
  prevBtn.value = wrap.value.querySelector(".slider__btn--prev");
  nextBtn.value = wrap.value.querySelector(".slider__btn--next");
  swiper.value = new Swiper(slider.value, {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
      nextEl: nextBtn.value,
      prevEl: prevBtn.value,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      481: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1641: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  Fancybox.bind("[data-fancybox]", {});
});
</script>

<style lang="scss">
.slider-base {
  & {
    width: 0;
  }
  &__wrap {
    width: 100%;
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 70px;
  }
  &__slide {
    display: flex;
    width: 350px;
    aspect-ratio: 410/367;
  }
  &__fancybox {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    picture{
        display: flex;
        width: 100%;
        height: 100%;
    }
    img {
      display: flex;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--time);
    }
  }
  &__control {
    &--adaptive {
      margin: 40px auto 0;
    }
  }
}
@include hover {
  .slider-base__fancybox:hover {
    img {
      transform: scale(1.2);
    }
  }
}
@include tablet-s {
  .slider-base {
    &__top {
      margin-bottom: 50px;
    }
    &__slide {
      width: 300px;
    }
  }
}
@include mobile {
  .slider-base {
    &__slide {
      width: calc(100vw - 40px);
    }
  }
}
</style>
