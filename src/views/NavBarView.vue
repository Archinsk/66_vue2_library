<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2NavBar</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46NavBar</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: системная панель навигации, по сути - хедер</div>
      <div>
        Принимает флаг темной темы (влияет на цвет текста в лого, пунктов меню
        верхнего порядка и кнопки-переключателя, также на цвет изображения
        бренда при включенном флаге monochrome-brand-image), наименование темы
        (влияет только на цвет фона панели), флаг прокручиваемости (размер
        прокручиваемой области захардкожен), флаг одноцветности изображения
        бренда, флаг несворачивоемости панели (true - никогда не сворачивается,
        false - всегда сверута, при использовании Offcanvas-панели данный флаг
        должен быть установлен в true), наименование точки, на котором панель
        разворачивается (в сочетании с expand). Список пунктов навигации и
        остальные элементы пробрасываются в слот.
      </div>
      <pre>
props: {
  dark: Boolean,
  theme: String,
  scroll: Boolean,
  monochromeBrandImage: Boolean,
  expand: Boolean,
  expandSize: String,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <div>Без пропов</div>
      <vb-nav-bar>
        <vb-nav tag="ul" class="navbar-nav">
          <template v-for="navLink of defaultNavBar.nav.itemsList">
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
      <div>С указанием темы фона (темный текст на светлом фоне)</div>
      <vb-nav-bar theme="warning">
        <vb-nav tag="ul" class="navbar-nav">
          <template v-for="navLink of defaultNavBar.nav.itemsList">
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
      <div>
        С указанием темы фона, темный фон (светлый текст на темном фоне)
      </div>
      <vb-nav-bar theme="primary" monochrome-brand-image dark>
        <vb-nav tag="ul" class="navbar-nav">
          <template v-for="navLink of defaultNavBar.nav.itemsList">
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
      <div>С прокруткой на малых экранах</div>
      <vb-nav-bar>
        <vb-nav tag="ul" scroll class="navbar-nav">
          <template v-for="navLink of defaultNavBar.nav.itemsList">
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
      <div>Несворачивающаяся панель</div>
      <vb-nav-bar theme="warning" expand>
        <vb-nav tag="ul" class="navbar-nav">
          <template v-for="navLink of defaultNavBar.nav.itemsList">
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
      <div>Панель, сворачивающаяся на малых экранах</div>
      <vb-nav-bar
        :dark="defaultNavBar.dark"
        :theme="defaultNavBar.theme"
        :scroll="defaultNavBar.scroll"
        :monochrome-brand-image="defaultNavBar.monochromeBrandImage"
        :expand="defaultNavBar.expand"
        :expand-size="defaultNavBar.expandSize"
      >
        <vb-nav tag="ul" class="navbar-nav">
          <template v-for="navLink of defaultNavBar.nav.itemsList">
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
      <div>Разворачивающаяся боковой панелью на малых экранах</div>
      <vb-nav-bar theme="warning" expand>
        <vb-offcanvas
          id="offcanvas-01"
          expand-size="sm"
          theme="warning"
          header
          no-effect-point="sm"
        >
          <vb-nav tag="ul" class="navbar-nav">
            <template v-for="navLink of defaultNavBar.nav.itemsList">
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
        </vb-offcanvas>
        <template v-slot:navbar-end>
          <vb-offcanvas-button
            target-id="offcanvas-01"
            class="btn-light d-sm-none"
          >
            Off
          </vb-offcanvas-button>
        </template>
      </vb-nav-bar>
      <h3>Структура данных для компонента</h3>
      <pre>{{ defaultNavBar }}</pre>
      <h3>Действия компонента</h3>
      <div>Действия отсутствуют</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbNavBar from "../components/Bootstrap_4.6.2/BS46NavBar";
import VbNav from "../components/Bootstrap_4.6.2/BS46Nav";
import VbNavItem from "../components/Bootstrap_4.6.2/BS46NavItem";
import VbDropdownItem from "../components/Bootstrap_4.6.2/BS46DropdownItem";
import VbOffcanvas from "../components/Bootstrap_4.6.2/BS46Offcanvas";
import VbOffcanvasButton from "../components/Bootstrap_4.6.2/BS46OffcanvasButton";
export default {
  name: "NavBarView",
  components: {
    VbOffcanvasButton,
    VbOffcanvas,
    VbDropdownItem,
    VbNavItem,
    VbNav,
    VbNavBar,
    VbAlert,
  },
  data() {
    return {
      defaultNavBar: {
        dark: true,
        theme: "primary",
        scroll: false,
        monochromeBrandImage: true,
        expand: true,
        expandSize: "sm",
        brand: {
          href: "/",
          name: "Viewer",
          imageSrc: "images/viewer-logo.svg",
        },
        nav: {
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
          ],
        },
      },
    };
  },
};
</script>
