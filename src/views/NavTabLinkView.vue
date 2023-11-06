<template>
  <div class="about">
    <h2>Кастомизированный Bootstrap компонент BS46NavTabLink</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: ссылка элемента навигации в виде вкладки</div>
      <div>
        Принимает строчный идентификатор (для возврата событий показа и скрытия
        панелей), строчный адрес ссылки на панель, флаги активности и
        отключенности. Выполнен на базе компонента BS46NavLink. Задает ему тип
        ссылки "a", остальные пропы пробрасывает. Содержимое пробрасывается в
        слот. Дополнительно устанавливаются атрибуты для таб-ссылки
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
      <vb-nav-tab-link href="#">Пустая ссылка</vb-nav-tab-link>
      <vb-nav-tabs id="nav-tab">
        <vb-nav-tab-link id="nav-link-01" href="nav-home" active
          >Первая</vb-nav-tab-link
        >
        <vb-nav-tab-link id="nav-link-02" href="nav-profile"
          >Вторая</vb-nav-tab-link
        >
        <vb-nav-tab-link id="nav-link-03" href="nav-contact"
          >Третья</vb-nav-tab-link
        >
      </vb-nav-tabs>
      <vb-tab-content id="nav-content">
        <vb-tab-pane id="nav-home" :active="true">Контент 1</vb-tab-pane>
        <vb-tab-pane id="nav-profile">Контент 2</vb-tab-pane>
        <vb-tab-pane id="nav-contact">Контент 3</vb-tab-pane>
      </vb-tab-content>
      <h3>Действия компонента</h3>
      <div>При выборе пункта вызывается событие @click без параметров</div>
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
};
</script>
