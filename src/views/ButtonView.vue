<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2Button</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46Button</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: расширение стандартной Bootstrap-кнопки, упрощение
        синтаксиса
      </div>
      <div>
        Принимает строки типа кнопки, темы и размера (только "sm" и "lg"). Также
        принимает флаги блочности (ширина 100%), квадратности кнопки (ширина =
        высота, не касается закруглений кнопки). Принимает иконку в виде строки
        или объекта. Если icon передается в виде строки, то он передается далее
        в качестве имени иконки. Принимает объект пропа badge и строку
        дополнительных классов. Содержимое пробрасывается в слот. Если кнопка
        иконочная и квадратная, слот отключается
      </div>
      <div>
        Компонент содержит стили для иконочных и квадратных кнопок, добавляется
        левый отступ для элемента следующего за иконкой. Если в пропе
        additionalClasses передан один из следующих классов: .btn-square-sm,
        .btn-square-md, .btn-square-lg, .btn-square-xl, то на экранах шириной
        выше соответствующего порога кнопка становится квадратной. Для кнопки с
        бэйджем позиционирование становится относительным
      </div>
      <div>
        Используется в Компонентах
        <ul>
          <li>BS46CollapseButton</li>
          <li>BS46ModalButton</li>
          <li>BS46OffcanvasButton</li>
        </ul>
      </div>
      <pre>
props: {
  type: String,
  theme: String,
  size: String,
  block: Boolean,
  square: Boolean,
  icon: [Object, String],
  badge: Object,
  additionalClasses: String,
},</pre
      >
      <h3>Варианты использования</h3>
      <div>Без пропов</div>
      <vb-button>Простая</vb-button>
      <div>Типизированная</div>
      <vb-button type="submit">Submit</vb-button>
      <div>Тематическая</div>
      <vb-button theme="danger">Danger</vb-button>
      <div>С указанием размера (только "sm" и "lg")</div>
      <vb-button theme="secondary" size="sm" class="mr-3">Маленькая</vb-button>
      <vb-button theme="secondary" class="mr-3">Обычная</vb-button>
      <vb-button theme="secondary" size="lg">Большая</vb-button>
      <div>Блочная</div>
      <vb-button theme="primary" block>На всю ширину</vb-button>
      <div>С иконкой</div>
      <vb-button theme="primary" icon="star" size="sm" class="mr-3"
        >В избранное</vb-button
      >
      <vb-button theme="primary" icon="star" class="mr-3"
        >В избранное</vb-button
      >
      <vb-button theme="primary" icon="star" size="lg">В избранное</vb-button>
      <div>Квадратная</div>
      <vb-button theme="warning" square size="sm" class="mr-3">Ш</vb-button>
      <vb-button theme="warning" square class="mr-3">Ш</vb-button>
      <vb-button theme="warning" square size="lg">Ш</vb-button>
      <div>Квадратная с иконкой</div>
      <vb-button theme="danger" icon="favorite" square size="sm" class="mr-3" />
      <vb-button theme="danger" icon="favorite" square class="mr-3" />
      <vb-button theme="danger" icon="favorite" square size="lg" />
      <div>С бэйджем</div>
      <vb-button theme="secondary" size="sm" class="mr-3" :badge="defaultBadge"
        >Маленькая</vb-button
      >
      <vb-button theme="secondary" class="mr-3" :badge="defaultBadge"
        >Обычная</vb-button
      >
      <vb-button theme="secondary" size="lg" :badge="defaultBadge"
        >Большая</vb-button
      >
      <div>
        Кнопка с текстом и иконкой, на экранах шире 768px становящаяся
        квадратной кнопкой с иконкой
      </div>
      <vb-button theme="primary" icon="home" additional-classes="btn-square-md"
        >Button</vb-button
      >
      <h3>Действия компонента</h3>
      <div>Возвращает событие @click</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbButton from "../components/Bootstrap_4.6.2/BS46Button";
export default {
  name: "ButtonView",
  components: { VbButton, VbAlert },
  data() {
    return {
      defaultBadge: {
        theme: "danger",
        pill: false,
        notNullDisplay: true,
        value: 25,
        max: 99,
      },
    };
  },
};
</script>
