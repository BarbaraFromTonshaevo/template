<template>
  <section>
    <div class="container">
      <h1 class="title-h1 ui-kit-mb--large">
        СТРАНИЦА UI-KIT
      </h1>
      <section class="ui-kit-mb--large">
        <h2 class="title-h2 ui-kit-mb">
          Кнопки
        </h2>
        <h3 class="title-h3 ui-kit-mb">
          Primary button
        </h3>
        <div class="ui-kit-flex">
          <ButtonBase
            name="primary"
            mode="button"
            class="ui-kit-mb"
          >
            Заказать
          </ButtonBase>

          <ButtonBase
            name="primary"
            mode="button"
            :is-disabled="true"
            class="ui-kit-mb"
          >
            Заказать
          </ButtonBase>

          <ButtonBase
            name="primary"
            mode="button"
            class="ui-kit-mb"
          >
            Заказать
            <UiSaveState
              :state="iconState"
              :color="iconColor"
            />
          </ButtonBase>

          <ButtonBase
            name="primary"
            mode="button"
            :is-disabled="true"
            class="ui-kit-mb"
          >
            Заказать
            <UiSaveState :state="iconState" />
          </ButtonBase>
        </div>

        <h3 class="title-h3 ui-kit-mb">
          Secondary button
        </h3>
        <div class="ui-kit-flex">
          <ButtonBase
            name="secondary"
            mode="button"
            class="ui-kit-mb"
          >
            Заказать
          </ButtonBase>

          <ButtonBase
            name="secondary"
            mode="button"
            :is-disabled="true"
            class="ui-kit-mb"
          >
            Заказать
          </ButtonBase>
        </div>

        <h3 class="title-h3 ui-kit-mb">
          Tertiary button
        </h3>
        <div class="ui-kit-flex">
          <ButtonBase
            name="tertiary"
            mode="button"
            class="ui-kit-mb"
          >
            Заказать
          </ButtonBase>

          <ButtonBase
            name="tertiary"
            mode="button"
            :is-disabled="true"
            class="ui-kit-mb"
          >
            Заказать
          </ButtonBase>
        </div>
        <h3 class="title-h3 ui-kit-mb">
          Show more button
        </h3>
        <ButtonShowMore />
      </section>

      <h2 class="title-h2">
        Поля
      </h2>
      <h2 class="title-h2">
        Аккордеон
      </h2>
      <h2 class="title-h2">
        Карточки
      </h2>
      <h2 class="title-h2 ui-kit-mb--large">
        Текстовая страница
      </h2>

      <div>
        <ContainerContent class="example-container">
          <h1>H1 Header</h1>
          <p>
            «Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>

          <h2>H2 Header</h2>
          <p>
            «Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>

          <h3>H3 Header</h3>
          <p>
            «Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>

          <h4>H4 Header</h4>
          <p>
            «Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>

          <h5>H5 Header</h5>
          <p>
            «Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>

          <h6>H6 Header</h6>
          <p>
            «Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </p>
          <h4><strong>Таблица</strong></h4>
          <table>
            <thead>
              <tr>
                <th>Услуга</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Фулфилмент</td>
                <td>100 000₽</td>
              </tr>
              <tr>
                <td>Переезд (домашний)</td>
                <td>2 000₽</td>
              </tr>
              <tr>
                <td>Переезд (офисный)</td>
                <td>5 000₽</td>
              </tr>
              <tr>
                <td>Кросс-докинг</td>
                <td>350 000₽</td>
              </tr>
            </tbody>
          </table>
          <h4><strong>Списки</strong></h4>
          <ol>
            <li>
              Доставка на наш склад. Заберём товары с вашего склада или от
              поставщиков по всей России и доставим на наш склад номенклатурного
              хранения
            </li>
            <li>
              Хранение. Примем и разместим ваши товары на складе, проведём учёт
              по номенклатуре, организуем инвентаризацию по графику. Предоставим
              отчёт о качестве и актуальных остатках товаров на склад
            </li>
            <li>
              Комплектация. Подготовим товары к продаже или отправке на склады
              маркетплейсов: промаркируем, упакуем. При необходимости используем
              ваши упаковочные и рекламные материалы
            </li>
          </ol>
          <ul>
            <li>
              Доставка на наш склад. Заберём товары с вашего склада или от
              поставщиков по всей России и доставим на наш склад номенклатурного
              хранения
            </li>
            <li>
              Хранение. Примем и разместим ваши товары на складе, проведём учёт
              по номенклатуре, организуем инвентаризацию по графику. Предоставим
              отчёт о качестве и актуальных остатках товаров на склад
            </li>
            <li>
              Комплектация. Подготовим товары к продаже или отправке на склады
              маркетплейсов: промаркируем, упакуем. При необходимости используем
              ваши упаковочные и рекламные материалы
            </li>
          </ul>
          <h4><strong>Ссылки</strong></h4>
          <p><a href="#">ссылка</a></p>
        </ContainerContent>
        <UiGallery :list="exampleList" />
      </div>
    </div>
  </section>
</template>

<script setup>
const exampleList = [
  '/images/example/example-1.jpg',
  '/images/example/example-2.jpg',
  '/images/example/example-3.jpg',
  '/images/example/example-4.jpg',
  '/images/example/example-5.jpg',
  '/images/example/example-6.jpg',
]
const iconState = ref('initial')
const iconColor = ref('var(--icon-tertiary)')
setTimeout(() => {
  iconState.value = 'loading'
  iconColor.value = 'var(--icon-primary)'
}, 2000)
setTimeout(() => {
  iconState.value = 'success'
  iconColor.value = 'var(--icon-accent)'
}, 4000)
</script>

<style lang="scss" scoped>
.example-container {
  max-width: 1097px;
}
.ui-kit-mb {
  margin-bottom: 20px;
  &--large{
    margin-bottom: 35px;
  }
}
.ui-kit-flex{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
</style>
