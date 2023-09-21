<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2NavBar</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46NavBar</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает ... Используется в проектах ...</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: ...</div>
      <div>Принимает...</div>
      <pre>
props: {
  // подзаголовок
  поле: тип,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <div>Без пропов</div>
      <vb-nav-bar>
        <vb-nav tag="ul" class="navbar-nav">
          <template v-for="navLink of defaultNav.itemsList">
            <vb-nav-item
              v-if="!navLink.dropdown"
              :key="navLink.id"
              :type="navLink.type"
              :href="navLink.href"
              :active="navLink.active"
              :disabled="navLink.disabled"
              >{{ navLink.name }}</vb-nav-item
            >
            <vb-nav-item
              v-else
              :key="navLink.id"
              :type="navLink.type"
              :href="navLink.href"
              :active="navLink.active"
              :disabled="navLink.disabled"
              :dropdown="navLink.dropdown"
              >{{ navLink.name }}
              <template v-slot:dropdown-menu>
                <vb-dropdown-item
                  v-for="dropdownItem of navLink.dropdownItemsList"
                  :key="dropdownItem.id"
                  :type="dropdownItem.type"
                  :href="dropdownItem.href"
                  :active="dropdownItem.active"
                  :disabled="dropdownItem.disabled"
                  >{{ dropdownItem.name }}</vb-dropdown-item
                >
              </template>
            </vb-nav-item>
          </template>
        </vb-nav>
      </vb-nav-bar>
      <h3>Действия компонента</h3>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbNavBar from "../components/Bootstrap_4.6.2/BS46NavBar";
import VbNav from "../components/Bootstrap_4.6.2/BS46Nav";
import VbNavItem from "../components/Bootstrap_4.6.2/BS46NavItem";
import VbDropdownItem from "../components/Bootstrap_4.6.2/BS46DropdownItem";
export default {
  name: "NavBarView",
  components: { VbDropdownItem, VbNavItem, VbNav, VbNavBar, VbAlert },
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
