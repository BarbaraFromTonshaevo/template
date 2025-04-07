<template>
  <div class="ui-kit">
    <div class="container">
      <h1 class="title-h1 ui-kit-mb--large">
        СТРАНИЦА UI-KIT
      </h1>
    </div>
    <section class="ui-kit__btns">
      <div class="container">
        <h2 class="title-h2 ui-kit-mb">
          Кнопки
        </h2>
        <div class="ui-kit__wrap">
          <h3 class="title-h3 ui-kit-mb">
            Primary button
          </h3>
          <div class="ui-kit__flex">
            <ButtonBase
              name="primary"
              mode="button"
            >
              Заказать
            </ButtonBase>

            <ButtonBase
              name="primary"
              mode="button"
              :is-disabled="true"
            >
              Заказать
            </ButtonBase>

            <ButtonBase
              name="primary"
              mode="button"
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
            >
              Заказать
              <UiSaveState :state="iconState" />
            </ButtonBase>
          </div>
        </div>

        <div class="ui-kit__wrap">
          <h3 class="title-h3 ui-kit-mb">
            Secondary button
          </h3>
          <div class="ui-kit__flex">
            <ButtonBase
              name="secondary"
              mode="button"
            >
              Заказать
            </ButtonBase>

            <ButtonBase
              name="secondary"
              mode="button"
              :is-disabled="true"
            >
              Заказать
            </ButtonBase>
          </div>
        </div>

        <div class="ui-kit__wrap">
          <h3 class="title-h3 ui-kit-mb">
            Tertiary button
          </h3>
          <div class="ui-kit__flex">
            <ButtonBase
              name="tertiary"
              mode="button"
            >
              Заказать
            </ButtonBase>

            <ButtonBase
              name="tertiary"
              mode="button"
              :is-disabled="true"
            >
              Заказать
            </ButtonBase>
          </div>
        </div>

        <div class="ui-kit__wrap">
          <h3 class="title-h3 ui-kit-mb">
            Show more button
          </h3>
          <div class="ui-kit__flex">
            <ButtonShowMore class="ui-kit-mb" />
          </div>
        </div>

        <div class="ui-kit__wrap">
          <h3 class="title-h3 ui-kit-mb">
            Slider button
          </h3>
          <p class="text-s ui-kit-mb">
            Для повышения показателей доступности рекоментдуется у данных компонент проставлятьатрибут aria-label
          </p>
          <div class="ui-kit__flex">
            <ButtonSlider
              name="light"
              direction="right"
              aria-label="Перейти к предыдущему слайду"
            />
            <ButtonSlider
              name="dark"
              direction="right"
              aria-label="Перейти к предыдущему слайду"
            />
            <ButtonSlider
              name="light"
              direction="left"
              disabled="true"
              aria-label="Перейти к следующему слайду"
            />
            <ButtonSlider
              name="dark"
              direction="left"
              disabled="true"
              aria-label="Перейти к следующему слайду"
            />
          </div>
        </div>

        <div class="ui-kit__wrap">
          <h3 class="title-h3 ui-kit-mb">
            Arrow button
          </h3>
          <p class="text-s ui-kit-mb">
            Для повышения показателей доступности рекоментдуется у данных компонент проставлятьатрибут aria-label
          </p>
          <div class="ui-kit__flex">
            <ButtonArrow
              name="primary"
              direction="left"
            />
            <ButtonArrow
              name="secondary"
              direction="right"
            />
            <ButtonArrow
              name="tertiary"
              direction="left"
            />

            <ButtonArrow
              name="primary"
              direction="top"
              :disabled="true"
            />
            <ButtonArrow
              name="secondary"
              direction="right"
              :disabled="true"
            />
            <ButtonArrow
              name="tertiary"
              direction="bottom"
              :disabled="true"
            />
          </div>
        </div>

        <div class="ui-kit__wrap">
          <h3 class="title-h3 ui-kit-mb">
            Up button
          </h3>
          <div class="ui-kit__flex">
            <ButtonUp />
          </div>
        </div>
      </div>
    </section>
    <section class="ui-kit__inputs">
      <div class="container">
        <h2 class="title-h2">
          Поля
        </h2>
        <FormFeedback />
      </div>
    </section>
    <section class="ui-kit__accordion">
      <div class="container">
        <h2 class="title-h2 ui-kit-mb">
          Аккордеон
        </h2>
        <UiAccordion
          :data="uiKitAccordionData"
          class="ui-kit__accordion-wrap"
        />
      </div>
    </section>

    <section class="ui-kit__text-page">
      <div class="container">
        <h2 class="title-h2 ui-kit-mb--large">
          Текстовая страница
        </h2>
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
        <UiGallery
          :list="exampleList"
          class="ui-kit__slider"
        />
      </div>
    </section>
  </div>
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
const uiKitAccordionData = [
  {
    title: 'Доставка на наш склад',
    body: 'Заберём товары с вашего склада или у поставщиков по всей России. Доставим на наш склад для надёжного хранения',
  },
  {
    title: 'Что такое склад класса B?',
    body: 'Склад класса B — это современное складское помещение, которое соответствует высоким стандартам качества. Оно предлагает оптимальное соотношение цены и качества, включая хорошую инфраструктуру, удобное расположение и базовые условия для хранения грузов',
  },
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
.ui-kit {
  &__btns,
  &__accordion {
    background-color: #d7d7d7;
    padding: 30px 0;
  }
  &__inputs,
  &__text-page{
    padding: 30px 0;
  }
  &__accordion-wrap{
    max-width: 500px;
  }
  &__slider{
    margin-top: 30px;
  }
  &-mb {
    margin-bottom: 20px;
    &--large {
      margin-bottom: 35px;
    }
  }
  &__flex {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  &__wrap{
    margin-bottom: 30px;
  }
}
</style>
