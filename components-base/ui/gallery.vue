<template>
  <div class="ui-gallery">
    <ul class="ui-gallery__list">
      <li
        v-for="item, index of list"
        :key="'gallery'-index"
        class="ui-gallery__item"
      >
        <a
          :href="item"
          data-fancybox="gallery"
          class="ui-gallery__link"
        >
          <img :src="item" class="ui-gallery__img">
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { onMounted } from 'vue'

defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})

onMounted(() => {
  Fancybox.bind('[data-fancybox]', {})
})
</script>

<style lang="scss" scoped>
.ui-gallery{
    &__list{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 16px;
    }
    &__item{
        width: 100%;
        aspect-ratio: 1;
    }
    &__link{
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: 3.8%;
        transition: border-radius var(--time);
    }
    &__img{
        display: flex;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
@include hover{
    .ui-gallery{
        &__link:hover{
            border-radius: 15%;
        }
    }
}
@include laptop{
    .ui-gallery{
        &__list{
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
}
@include tablet-s{
    .ui-gallery{
        &__list{
            grid-template-columns: 1fr 1fr;
        }
    }
}
@include mobile{
    .ui-gallery{
        &__list{
            grid-template-columns: 1fr;
        }
    }
}
</style>
