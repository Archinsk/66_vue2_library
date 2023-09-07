<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2NavTabLink</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46NavTabLink</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: ссылка элемента навигации в виде ссылки</div>
      <div>
        Принимает идетификатор (для возврата событий показа и скрытия панелей),
        адрес ссылки, флаги активности и отключенности. Выполнен на базе
        компонента BS46NavLink. Задает ему тип ссылки "a", остальные пропы
        пробрасывает. Содержимое пробрасывается в слот. Дополнительно
        устанавливаются атрибуты для таб-ссылки
      </div>
      <pre>
props: {
  id: String,
  href: String,
  active: Boolean,
  disabled: Boolean,
},</pre
      >
      <h3>Варианты использования</h3>
      <div>Обычная ссылка</div>
      <vb-nav-tab-link href="https://ya.ru">Яндекс</vb-nav-tab-link>
      <h3>Действия компонента</h3>
      <div>При выборе пункта вызывается событие @click без параметров</div>
      <vb-nav-tab-link href="#" @click="returnedEvent = 'click'"
        >Пустая ссылка</vb-nav-tab-link
      >
      <div>Сработавшее событие: {{ returnedEvent }}</div>
      <div>
        При открытии вкладки вызываются события @show-tab (начало открытия) и
        @shown-tab (окончание открытия, завершение анимации), при закрытии
        вызываются события @hide-tab (начало закрытия) и @hidden-tab (окончание
        закрытия, завершение анимации). События возвращаются с идентификатором
        пункта навигации. Для срабатывания событий вкладок требуется передать
        проп id в vb-nav-tab-link и подключение jquery
      </div>
      <vb-nav-tabs id="nav-tab">
        <vb-nav-tab-link
          id="nav-link-01"
          href="nav-home"
          active
          @show-tab="(selectEvent = 'show-tab'), (selectedId = $event)"
          @shown-tab="(selectEvent = 'shown-tab'), (selectedId = $event)"
          @hide-tab="(selectEvent = 'hide-tab'), (selectedId = $event)"
          @hidden-tab="(selectEvent = 'hidden-tab'), (selectedId = $event)"
          >Первая</vb-nav-tab-link
        >
        <vb-nav-tab-link
          id="nav-link-02"
          href="nav-profile"
          @show-tab="(selectEvent = 'show-tab'), (selectedId = $event)"
          @shown-tab="(selectEvent = 'shown-tab'), (selectedId = $event)"
          @hide-tab="(selectEvent = 'hide-tab'), (selectedId = $event)"
          @hidden-tab="(selectEvent = 'hidden-tab'), (selectedId = $event)"
          >Вторая</vb-nav-tab-link
        >
        <vb-nav-tab-link
          id="nav-link-03"
          href="nav-contact"
          @show-tab="(selectEvent = 'show-tab'), (selectedId = $event)"
          @shown-tab="(selectEvent = 'shown-tab'), (selectedId = $event)"
          @hide-tab="(selectEvent = 'hide-tab'), (selectedId = $event)"
          @hidden-tab="(selectEvent = 'hidden-tab'), (selectedId = $event)"
          >Третья</vb-nav-tab-link
        >
      </vb-nav-tabs>
      <vb-tab-content id="nav-content">
        <vb-tab-pane id="nav-home" :active="true">Контент 1</vb-tab-pane>
        <vb-tab-pane id="nav-profile">Контент 2</vb-tab-pane>
        <vb-tab-pane id="nav-contact">Контент 3</vb-tab-pane>
      </vb-tab-content>
      <div>
        Сработавшее событие: {{ selectEvent }} с идентификатором
        {{ selectedId }}
      </div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbNavTabLink from "../components/Bootstrap_4.6.2/BS46NavTabLink";
import VbNavTabs from "../components/Bootstrap_4.6.2/BS46NavTabs";
import VbTabContent from "../components/Bootstrap_4.6.2/BS46TabContent";
import VbTabPane from "../components/Bootstrap_4.6.2/BS46TabPane";
export default {
  name: "NavTabLinkView",
  components: { VbTabPane, VbTabContent, VbNavTabs, VbNavTabLink, VbAlert },
  data() {
    return {
      returnedEvent: null,
      selectEvent: null,
      selectedId: null,
    };
  },
};
</script>
