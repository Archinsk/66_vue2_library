<template>
  <div class="about">
    <h2>Кастомизированный Bootstrap компонент BS46NavBar</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: системная панель навигации, по сути - хедер</div>
      <div>
        Принимает строчный идентификатор (для связи конкретной кнопки с
        конкретной разворачивающейся панелью навигации), флаг темной темы
        (влияет на цвет текста в лого, пунктов меню верхнего порядка, также на
        цвет изображения бренда при включенном флаге monochrome-brand-image),
        строчное наименование темы (влияет только на цвет фона панели), флаг
        прокручиваемости (размер прокручиваемой области захардкожен), флаг
        одноцветности изображения бренда, флаг несворачивоемости панели (true -
        никогда не сворачивается, false - всегда сверута, при использовании
        Offcanvas-панели данный флаг должен быть установлен в true),
        наименование точки, на котором панель разворачивается (в сочетании с
        expand), объект бренда, флаг отсутствия коллапс-кнопки, строчное
        значение выравнивания контента. Список пунктов навигации и остальные
        элементы пробрасываются в слот.
      </div>
      <pre>
props: {
  id: String,
  dark: Boolean,
  theme: String,
  scroll: Boolean,
  monochromeBrandImage: Boolean,
  expand: Boolean,
  expandSize: String,
  brand: Object,
  withoutToggler: Boolean,
  justifyContent: String,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <div>Без пропов</div>
      <vb-nav-bar>
        <vb-nav
          tag="ul"
          class="navbar-nav"
          :items-list="defaultNavBar.nav.itemsList"
        />
      </vb-nav-bar>
      <div>С указанием темы фона (темный текст на светлом фоне)</div>
      <vb-nav-bar theme="warning">
        <vb-nav
          tag="ul"
          class="navbar-nav"
          :items-list="defaultNavBar.nav.itemsList"
        />
      </vb-nav-bar>
      <div>
        С брендом, указанием темы фона, темный фон (светлый текст на темном
        фоне)
      </div>
      <vb-nav-bar
        theme="primary"
        :brand="defaultNavBar.brand"
        monochrome-brand-image
        dark
      >
        <vb-nav
          tag="ul"
          class="navbar-nav"
          :items-list="defaultNavBar.nav.itemsList"
        />
      </vb-nav-bar>
      <div>С прокруткой на малых экранах</div>
      <vb-nav-bar>
        <vb-nav
          tag="ul"
          scroll
          class="navbar-nav"
          :items-list="defaultNavBar.nav.itemsList"
        />
      </vb-nav-bar>
      <div>Несворачивающаяся панель, без коллапс-кнопки</div>
      <vb-nav-bar
        theme="warning"
        :brand="defaultNavBar.brand"
        without-toggler
        expand
      >
        <vb-nav
          tag="ul"
          class="navbar-nav"
          :items-list="defaultNavBar.nav.itemsList"
        />
      </vb-nav-bar>
      <div>Несворачивающаяся панель с выравниванием по центру</div>
      <vb-nav-bar
        theme="warning"
        :brand="defaultNavBar.brand"
        without-toggler
        expand
        justify-content="center"
      >
        <vb-nav
          tag="ul"
          class="navbar-nav"
          :items-list="defaultNavBar.nav.itemsList"
        />
      </vb-nav-bar>

      <div>Панель, сворачивающаяся на малых экранах</div>
      <vb-nav-bar
        :dark="defaultNavBar.dark"
        :theme="defaultNavBar.theme"
        :scroll="defaultNavBar.scroll"
        :brand="defaultNavBar.brand"
        :monochrome-brand-image="defaultNavBar.monochromeBrandImage"
        :expand="defaultNavBar.expand"
        :expand-size="defaultNavBar.expandSize"
      >
        <vb-nav
          tag="ul"
          class="navbar-nav"
          :items-list="defaultNavBar.nav.itemsList"
        />
      </vb-nav-bar>
      <div>Разворачивающаяся боковой панелью на малых экранах</div>
      <vb-nav-bar theme="warning" expand without-toggler>
        <vb-offcanvas
          id="offcanvas-01"
          expand-size="sm"
          theme="warning"
          header
          no-effect-point="sm"
        >
          <vb-nav
            tag="ul"
            class="navbar-nav"
            :items-list="defaultNavBar.nav.itemsList"
          />
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
      <div>Возвращает @nav-bar-brand-click(action)</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbNavBar from "../components/Bootstrap_4.6.2/BS46NavBar";
import VbNav from "../components/Bootstrap_4.6.2/BS46Nav";
import VbOffcanvas from "../components/Bootstrap_4.6.2/BS46Offcanvas";
import VbOffcanvasButton from "../components/Bootstrap_4.6.2/BS46OffcanvasButton";
export default {
  name: "NavBarView",
  components: {
    VbOffcanvasButton,
    VbOffcanvas,
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
              href: "#",
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
