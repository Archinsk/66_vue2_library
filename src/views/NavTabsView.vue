<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2NavTabs</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46NavTabs</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает исправно. Используется в проектах 61, 62. Компонент обновлен,
        в проектах используется в старом виде</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: навигация в виде вкладок</div>
      <div>
        Принимает идентификатор, флаг отображения в виде кнопок, позицию
        (center, end, левое - без указания пропа), флаг вертикального
        расположения, флаг заполнения пунктами всей ширины, флаг равной ширины
        кнопок. В структуре данных должна быть строка дополнительных классов
        (для адаптивности на эранах разной ширины), которые вешаются на обертку
        пунктов навигации. Все пункы пробрасываются в слот. В слот должны
        пробрасываться компоненты в цикле. Компонент выполнен на базе компонента
        BS46Nav. По флагу pills определяется тип пунктов и передается в vb-nav,
        идентификатор присваивается vb-nav. Остальные пропы пробрасываются
        дальше.
      </div>
      <pre>
props: {
  id: String,
  pills: Boolean,
  position: String,
  vertical: Boolean,
  fill: Boolean,
  justified: Boolean,
}</pre
      >
      <h3>Варианты использования</h3>
      <div>В виде табов</div>
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
      <div>В виде кнопок</div>
      <vb-nav-tabs id="nav-tab-02" pills>
        <vb-nav-tab-link id="nav-link-04" href="nav-home-02" active
          >Первая</vb-nav-tab-link
        >
        <vb-nav-tab-link id="nav-link-05" href="nav-profile-02"
          >Вторая</vb-nav-tab-link
        >
        <vb-nav-tab-link id="nav-link-06" href="nav-contact-02"
          >Третья</vb-nav-tab-link
        >
      </vb-nav-tabs>
      <vb-tab-content id="nav-content-02">
        <vb-tab-pane id="nav-home-02" :active="true">Контент 4</vb-tab-pane>
        <vb-tab-pane id="nav-profile-02">Контент 5</vb-tab-pane>
        <vb-tab-pane id="nav-contact-02">Контент 6</vb-tab-pane>
      </vb-tab-content>
      <h3>Действия компонента</h3>
      <div>
        Действия отсутствуют. Компонент самостоятельно меняет активный пункт,
        убирая активность с ранее активного пункта.
      </div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbTabContent from "../components/Bootstrap_4.6.2/BS46TabContent";
import VbNavTabs from "../components/Bootstrap_4.6.2/BS46NavTabs";
import VbNavTabLink from "../components/Bootstrap_4.6.2/BS46NavTabLink";
import VbTabPane from "../components/Bootstrap_4.6.2/BS46TabPane";
export default {
  name: "NavTabsView",
  components: {
    VbTabPane,
    VbNavTabLink,
    VbNavTabs,
    VbTabContent,
    VbAlert,
  },
  data() {
    return {
      defaultNav: {
        itemsList: [
          {
            id: "link-alert",
            name: "Alert",
            type: "router-link",
            href: "/alert",
            active: false,
            disabled: false,
          },
          {
            id: "link-form",
            name: "Form",
            type: "router-link",
            href: "/form",
            active: false,
            disabled: false,
          },
          {
            id: "link-modal",
            name: "Modal",
            type: "router-link",
            href: "/modal",
            active: true,
            disabled: false,
          },
          {
            id: "link-preloader",
            name: "Preloader",
            type: "router-link",
            href: "/preloader",
            active: false,
            disabled: true,
          },
          {
            id: "link-pagination",
            name: "Pagination",
            type: "router-link",
            href: "",
            active: false,
            disabled: false,
            dropdown: true,
            dropdownItemsList: [
              {
                id: "link-pagination",
                name: "Pagination",
                type: "router-link",
                href: "/pagination",
                active: true,
                disabled: false,
              },
              {
                id: "link-pagination-items-per-page",
                name: "PaginationItemsPerPage",
                type: "router-link",
                href: "/paginationitemsperpage",
                active: false,
                disabled: false,
              },
              {
                id: "link-pagination-page-selector",
                name: "PaginationPageSelector",
                type: "router-link",
                href: "/paginationpageselector",
                active: false,
                disabled: false,
              },
              {
                id: "link-pagination-button",
                name: "PaginationButton",
                type: "router-link",
                href: "/paginationbutton",
                active: false,
                disabled: true,
              },
            ],
          },
        ],
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.nav-link.active {
  color: red;
}
</style>
