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
      <div>
        Назначение: навигация по страницам программы или с указанием ссылок на
        сторонние ресурсы
      </div>
      <div>
        Принимает тэг (ul или nav, nav не может иметь выпадающих списков), тип
        (tabs, pills, обычные ссылки без пропа), position (center, end, левое -
        без указания пропа), флаг вертикального расположения, флаг заполнения
        пунктами всей ширины, флаг равной ширины кнопок. В структуре данных
        должна быть строка дополнительных классов (для адаптивности на эранах
        разной ширины), которые вешаются на навигацию. Все пункы пробрасываются
        в слот. В слот должны пробрасываться компоненты в цикле. Для простого
        меню без выпадающих списков можно использовать с пропом tag="nav" (или
        совсем без значения) и пробросом в слот компонента vb-nav-link. Для меню
        с выпадающими списками требуется tag="ul", в слот пробрасываются в цикле
        компоненты vb-nav-item с проверкой. Если пункт является выпадающим
        списком, то в его слот "dropdown-menu" в цикле пробрасываются компоненты
        vb-dropdown-item. Компонент должен использованием смены выбранного
        пункта меню. В структуре данных должно быть поле value с выбранным
        пунктом??
      </div>
      <pre>
props: {
  // подзаголовок
  поле: тип,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <div>Bootstrap 4.6.2</div>
      <vb-nav-tabs id="=nav-tab">
        <vb-nav-tab-link href="nav-home" active>Первая</vb-nav-tab-link>
        <vb-nav-tab-link href="nav-profile">Вторая</vb-nav-tab-link>
        <vb-nav-tab-link href="nav-contact">Третья</vb-nav-tab-link>
      </vb-nav-tabs>
      <vb-tab-content id="nav-tabContent">
        <vb-tab-pane id="nav-home" :active="true">Контент 1</vb-tab-pane>
        <vb-tab-pane id="nav-profile">Контент 2</vb-tab-pane>
        <vb-tab-pane id="nav-contact">Контент 3</vb-tab-pane>
      </vb-tab-content>
      <div>В виде табов</div>
      <vb-nav type="tabs">
        <vb-nav-link
          v-for="navLink of defaultNav.itemsList"
          :key="navLink.id"
          :type="navLink.type"
          :href="navLink.href"
          :active="navLink.active"
          :disabled="navLink.disabled"
          >{{ navLink.name }}</vb-nav-link
        >
      </vb-nav>
      <div>В виде кнопок</div>
      <vb-nav type="pills">
        <vb-nav-link
          v-for="navLink of defaultNav.itemsList"
          :key="navLink.id"
          :type="navLink.type"
          :href="navLink.href"
          :active="navLink.active"
          :disabled="navLink.disabled"
          >{{ navLink.name }}</vb-nav-link
        >
      </vb-nav>
      <h3>Действия компонента</h3>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbNavLink from "../components/Bootstrap_4.6.2/BS46NavLink";
import VbNav from "../components/Bootstrap_4.6.2/BS46Nav";
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
    VbNav,
    VbNavLink,
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
