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
  font-size: 17px;
  font-family: "Inter";
  font-weight: 400;
  letter-spacing: 0em;
  line-height: 139.9999976158142%;
  color: var(--text-tertiary);

  :deep(p),
  :deep(a),
  :deep(ol),
  :deep(ul),
  :deep(li) {
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: inherit;
  }

  :deep(p + p),
  :deep(* + p),
  :deep(* + ul),
  :deep(* + ol),
  :deep(* + table),
  :deep(* + .table-wrap),
  :deep(* + picture),
  :deep(* + img),
  :deep(* + iframe) {
    margin-top: 24px;
  }
  // Заголовки
  :deep(h1) {
    font-size: 44px;
    font-family: "Open Sans";
    font-weight: 700;
    letter-spacing: 0em;
    line-height: 110.00000238418579%;
    color: var(--text-primary);
  }

  :deep(h2) {
    font-size: 36px;
    font-family: "Inter";
    font-weight: 500;
    letter-spacing: 0em;
    line-height: 120.00000476837158%;
    color: var(--text-primary);
  }

  :deep(h3) {
    font-size: 24px;
    font-family: "Inter";
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 125%;
    color: var(--text-primary);
  }

  :deep(h4) {
    font-size: 20px;
    font-family: "Inter";
    font-weight: 400;
    letter-spacing: 0.005em;
    line-height: 139.9999976158142%;
    color: var(--text-primary);
  }

  :deep(h5) {
    font-size: 20px;
    font-family: "Inter";
    font-weight: 400;
    letter-spacing: 0.005em;
    line-height: 139.9999976158142%;
    color: var(--text-primary);
  }

  :deep(h6) {
    font-size: 20px;
    font-family: "Inter";
    font-weight: 400;
    letter-spacing: 0.005em;
    line-height: 139.9999976158142%;
    color: var(--text-primary);
  }

  :deep(h1),
  :deep(h2) {
    margin-bottom: 32px;
  }

  :deep(h3),
  :deep(h4),
  :deep(h5),
  :deep(h6) {
    margin-bottom: 28px;
  }

  :deep(* + h1),
  :deep(* + h2) {
    margin-top: 60px;
  }

  :deep(* + h3),
  :deep(* + h4),
  :deep(* + h5),
  :deep(* + h6) {
    margin-top: 54px;
  }

  //   Списки
  :deep(ol),
  :deep(ul) {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  //   Нумерованный список
  :deep(ol) {
    counter-reset: num;
  }
  :deep(ol li) {
    list-style: decimal;
    list-style-position: outside;
    margin-left: 18px;
    &::marker {
      color: var(--icon-tertiary-t30);
    }
  }

  //   Ненумерованный список
  :deep(ul li) {
    position: relative;
    padding-left: 18px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 7px;
      width: 6px;
      aspect-ratio: 1;
      background-color: var(--icon-tertiary-t30);
      border-radius: 50%;
    }
  }

  //  Таблица
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
    padding: 12px 10px;
  }

  :deep(th) {
    font-weight: 400;
    font-size: 14px;
    color: var(--text-tertiary);
    background-color: var(--bg-secondary);
    text-align: left;
    text-transform: uppercase;
  }

  :deep(td) {
    color: var(--text-primary);
    font-size: 17px;
    line-height: 1.4;
    border-bottom: 1px solid var(--stroke-tertiary-t5);
  }

  // Изображения
  :deep(img) {
    max-width: 100%;
    border-radius: var(--br-xs);
    height: auto;
  }

  :deep(.align-left) {
    margin: 38px 40px 38px 0;
    float: left;
  }

  :deep(.align-right) {
    margin: 30px 0 30px 40px;
    float: right;
  }

  :deep(iframe) {
    max-width: 100%;
    height: auto;
  }

  // Ссылки
  :deep(a) {
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color 0.3s ease;
    &:visited {
      color: var(--text-visited);
    }
    @include hover {
      &:hover {
        color: var(--text-accent-2);
      }
    }
  }
}
@include laptop {
  .content-container {
  }
}

@include mobile {
  .content-container {
    font-size: 16px;

    :deep(h1),
    :deep(h2),
    :deep(h3),
    :deep(h4),
    :deep(h5),
    :deep(h6) {
      margin-bottom: 24px;
    }
    :deep(* + h1),
    :deep(* + h2),
    :deep(* + h3),
    :deep(* + h4),
    :deep(* + h5),
    :deep(* + h6) {
      margin-top: 40px;
    }

    // Заголовки
    :deep(h1) {
      font-size: 34px;
    }

    :deep(h2) {
      font-size: 28px;
    }

    :deep(h3) {
      font-size: 20px;
    }

    :deep(h4) {
      font-size: 18px;
    }

    :deep(h5) {
      font-size: 18px;
    }

    :deep(h6) {
      font-size: 18px;
    }

    :deep(p + p),
    :deep(* + p),
    :deep(* + ul),
    :deep(* + ol),
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
