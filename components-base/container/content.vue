<template>
  <div
    ref="contentBody"
    class="content-container"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const contentBody = ref(null)
onMounted(() => {
  // добавление внешней обертки для таблиц
  contentBody.value.querySelectorAll('table').forEach((table) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('table-wrap')

    table.parentNode.insertBefore(wrapper, table)
    wrapper.appendChild(table)
  })
})
</script>

<style lang="scss" scoped>
.content-container {
  color: var(--text-primary);

  :deep(.align-left) {
    margin: 38px 40px 38px 0;
    float: left;
  }

  :deep(.align-right) {
    margin: 30px 0 30px 40px;
    float: right;
  }

  :deep(h1),
  :deep(h2),
  :deep(h3),
  :deep(h4),
  :deep(h5),
  :deep(h6) {
    font-family: var(--font-title);
    font-style: normal;
    font-weight: 400;
    color: var(--text-primary);
  }

  :deep(h1),
  :deep(h2) {
    margin-bottom: 40px;
  }

  :deep(h3),
  :deep(h4),
  :deep(h5),
  :deep(h6) {
    margin-bottom: 24px;
  }

  :deep(h1) {
    font-size: 78px;
    line-height: 100%;
  }

  :deep(h2) {
    font-size: 60px;
    line-height: 115%;
  }

  :deep(h3) {
    font-size: 46px;
    line-height: 110%;
  }

  :deep(h4) {
    font-size: 36px;
    line-height: 115%;
  }

  :deep(h5) {
    font-size: 30px;
    line-height: 110%;
  }

  :deep(h6) {
    font-size: 22px;
    line-height: 110%;
  }

  :deep(* + h1),
  :deep(* + h2) {
    margin-top: 60px;
  }

  :deep(p + p),
  :deep(* + p),
  :deep(* + ul),
  :deep(* + ol),
  :deep(* + table),
  :deep(* + .table-wrap),
  :deep(* + picture),
  :deep(* + img),
  :deep(* + iframe),
  :deep(* + h3),
  :deep(* + h4),
  :deep(* + h5),
  :deep(* + h6) {
    margin-top: 24px;
  }

  :deep(ol),
  :deep(ul) {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  :deep(ol) {
    counter-reset: num;
  }
  :deep(ol li) {
    counter-increment: num;

    &::before {
      content: counter(num) ")";
      margin-right: 10px;
      color: var(--marker);
    }
  }

  :deep(ul li) {
    position: relative;
    padding-left: 18px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 7px;
      width: 8px;
      aspect-ratio: 1;
      background-color: var(--marker);
      border-radius: 50%;
    }
  }

  :deep(* + table) {
    margin-top: 60px;
  }

  :deep(table) {
    width: 100%;
    border-spacing: 0;
    // border: 1px solid var(--stroke-primary);
    border-collapse: unset;
  }

  :deep(th),
  :deep(td) {
    padding: 24px;
  }

  :deep(th) {
    font-weight: 500;
    font-size: 16px;
    color: var(--text-primary);
    background-color: var(--bg-secondary);
    text-align: left;
  }

  :deep(td) {
    color: #5b5b5b;
    font-size: 16px;
  }

  :deep(tr:not(:last-child) td) {
    border-bottom: 1px solid #f5f5f5;
  }

  :deep(img) {
    max-width: 100%;
    border-radius: var(--br-xs);
    height: auto;
  }

  :deep(iframe) {
    max-width: 100%;
    height: auto;
  }

  :deep(a) {
    color: var(--btn-primary);
    text-decoration: underline;
    text-underline-offset: 1px;
    transition: color 0.3s ease;

    @include hover {
      &:hover {
        color: var(--btn-primary-hover);
      }
    }
  }
}
@include laptop {
    .content-container{
        :deep(h2) {
    font-size: 46px;
    line-height: 115%;
  }

  :deep(h3) {
    font-size: 36px;
    line-height: 110%;
  }

  :deep(h4) {
    font-size: 30px;
    line-height: 115%;
  }

  :deep(h5) {
    font-size: 22px;
    line-height: 110%;
  }

  :deep(h6) {
    font-size: 20px;
    line-height: 110%;
  }
    }

}

@include tablet {
  .content-container {
    :deep(h1),
    :deep(h2),
    :deep(h3),
    :deep(h4),
    :deep(h5),
    :deep(h6) {
      hyphens: auto;
    }

    :deep(h1) {
      font-size: 38px;
    }

    :deep(h2) {
      font-size: 26px;
    }

    :deep(h3) {
      font-size: 22px;
    }

    :deep(h4) {
      font-size: 20px;
    }

    :deep(h5) {
      font-size: 18px;
    }
    :deep(h6) {
      font-size: 16px;
    }

    :deep(h1),
    :deep(h2) {
      margin-bottom: 24px;
    }

    :deep(* + h1),
    :deep(* + h2) {
      margin-top: 40px;
    }

    :deep(h3),
    :deep(h4),
    :deep(h5),
    :deep(h6) {
      margin-bottom: 18px;
    }

    :deep(p + p),
    :deep(* + p),
    :deep(* + ul),
    :deep(* + ol),
    :deep(* + h3),
    :deep(* + h4),
    :deep(* + h5),
    :deep(* + h6),
    :deep(* + .table-wrap) {
      margin-top: 16px;
    }

    :deep(* + img) {
      margin: 16px auto 0;
    }

    :deep(img) {
      float: none;
    }
  }
  :deep(.table-wrap) {
    overflow-x: auto;
    padding-right: 20px;
    margin-right: -20px;
  }
}
</style>
