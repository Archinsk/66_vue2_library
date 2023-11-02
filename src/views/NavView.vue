<template>
  <div class="about">
    <h2>Кастомизированный Bootstrap компонент BS46Nav</h2>
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
        Принимает строчный тэг (ul или nav - по умолчанию, nav не может иметь
        выпадающих списков), тип (tabs, pills, обычные ссылки без пропа),
        position (center, end, левое - без указания пропа), флаг вертикального
        расположения, флаг заполнения пунктами всей ширины, флаг равной ширины
        кнопок, флаг прокрутки (используется совместно с компонентом NavBar).
        <del
          >В структуре данных должна быть строка дополнительных классов (для
          адаптивности на эранах разной ширины), которые вешаются на
          навигацию.</del
        >
        Может принимать массив пунктов навигации, если его нет, то все пункты
        пробрасываются в слот. В слот могут пробрасываться компоненты в цикле.
        Для простого меню без выпадающих списков можно использовать с пропом
        tag="nav" (или совсем без значения) и пробросом в слот компонента
        vb-nav-link. Для меню с выпадающими списками требуется tag="ul", в слот
        пробрасываются в цикле компоненты vb-nav-item с проверкой. Добавлены
        стили, выстраивающие пункты в столбец внутри элемента Offcanvas.
      </div>
      <pre>
props: {
  tag: String,
  type: String,
  position: String,
  vertical: Boolean,
  fill: Boolean,
  justified: Boolean,
  scroll: Boolean,
  itemsList: Array,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <div>Без пропов, пункты проброшены в слот</div>
      <vb-nav>
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
      <div>Горизонтальное центрирование</div>
      <vb-nav position="center" :itemsList="defaultNav.itemsList" />
      <div>Вертикальное расположение</div>
      <vb-nav vertical :itemsList="defaultNav.itemsList" />
      <div>В виде табов</div>
      <vb-nav type="tabs" :itemsList="defaultNav.itemsList" />
      <div>В виде кнопок</div>
      <vb-nav type="pills" :itemsList="defaultNav.itemsList" />
      <div>В виде кнопок, занимающих все пространство</div>
      <vb-nav type="pills" fill :itemsList="defaultNav.itemsList" />
      <div>В виде кнопок равной ширины, занимающих все пространство</div>
      <vb-nav type="pills" justified :itemsList="defaultNav.itemsList" />
      <div>Ненумерованный список с пробросом в слот</div>
      <vb-nav tag="ul" :itemsList="defaultNav.itemsList">
        <vb-nav-item
          v-for="navLink of defaultNav.itemsList"
          :key="navLink.id"
          :type="navLink.type"
          :href="navLink.href"
          :active="navLink.active"
          :disabled="navLink.disabled"
          >{{ navLink.name }}</vb-nav-item
        >
      </vb-nav>
      <div>Ненумерованный список со списком переданным через проп</div>
      <vb-nav tag="ul" :itemsList="defaultNav.itemsList" />
      <h3>Действия компонента</h3>
      <div>Действия отсутствуют</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbNavLink from "../components/Bootstrap_4.6.2/BS46NavLink";
import VbNav from "../components/Bootstrap_4.6.2/BS46Nav";
import VbNavItem from "../components/Bootstrap_4.6.2/BS46NavItem";
export default {
  name: "NavView",
  components: { VbNavItem, VbNav, VbNavLink, VbAlert },
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
