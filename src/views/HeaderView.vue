<template>
  <div class="about">
    <h2>Кастомизированный Bootstrap компонент BS46Header</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: гибкий кастомизированный хедер с упрощением синтаксиса
      </div>
      <div>
        Высокоуровневый компонент, использующий 15 компонентов-потомков.
        Принимает строку идентификатора, флаги выезжающей боковой панели и
        развернутости навигации, строку размера, на котором панель становится
        развернутой, строку темы, флаги обозначения темного фона и
        монохромности, объекты бренда и навигации, флаг контейнера, строку
        распределения контента (принимается "start" - по умолчанию и без пропа,
        "center", "end", "between", "around"), флаг скролла (в Collapse-панели
        делает фиксированной высоту развернутой панели, добавляя скролл, в
        Offcanvas-панели добавляется автоскролл), объект данных окна (требуется
        в компонентах потомках для вычисления поведения при изменении ширины
        экрана, должен вычисляться в корневом компоненте, чтобы вешался один
        слушатель на window).
      </div>
      <div>
        Компоненты-потомки используют jquery. В корневом компоненте должен быть
        установлен слушатель на изменение размера окна, а также для переключения
        активного пункта навигации требуется наблюдатель за параметром пути
        роута и методы для поиска и активации соответствующего пункта навигации.
      </div>
      <pre>
props: {
  id: String,
  offcanvas: Boolean,
  expand: Boolean,
  expandSize: String,
  theme: String,
  dark: Boolean,
  monochrome: Boolean,
  brand: Object,
  nav: Object,
  container: Boolean,
  justifyContent: String,
  scroll: Boolean,
  windowData: Object,
},</pre
      >
      <h3>Варианты использования</h3>
      <div>Без пропсов не отображается</div>
      <vb-header />
      <div>С брендом</div>
      <vb-header id="header-01" :brand="defaultNavBar.brand" />
      <div>Без бренда с несворачивающейся Collapse-панелью навигации</div>
      <vb-header
        id="header-02"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
      />
      <div>Без бренда с всегда свернутой Collapse-панелью навигации</div>
      <vb-header
        id="header-03"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
      />
      <div>
        Без бренда с Collapse-панелью навигации разворачивающейся при ширине
        окна 576px
      </div>
      <vb-header
        id="header-04"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
      />
      <div>
        Без бренда с Offcanvas-панелью навигации разворачивающейся при ширине
        окна 576px
      </div>
      <vb-header
        id="header-05"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
        offcanvas
      />
      <div>
        Без бренда с Collapse-панелью навигации разворачивающейся при ширине
        окна 576px и указанием темы фона
      </div>
      <vb-header
        id="header-06"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
        theme="info"
      />
      <div>
        Без бренда с Offcanvas-панелью навигации разворачивающейся при ширине
        окна 576px и указанием темы фона
      </div>
      <vb-header
        id="header-07"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
        theme="info"
        offcanvas
      />
      <div>
        C брендом и Collapse-панелью навигации разворачивающейся при ширине окна
        576px и указанием темы фона
      </div>
      <vb-header
        id="header-08"
        :brand="defaultNavBar.brand"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
        theme="info"
      />
      <div>
        C брендом и Offcanvas-панелью навигации разворачивающейся при ширине
        окна 576px и указанием темы фона
      </div>
      <vb-header
        id="header-09"
        :brand="defaultNavBar.brand"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
        theme="info"
        offcanvas
      />
      <div>
        C брендом и Collapse-панелью навигации разворачивающейся при ширине окна
        576px и указанием темы фона, с ограничением высоты Collapse-панели и
        прокруткой панели
      </div>
      <vb-header
        id="header-10"
        :brand="defaultNavBar.brand"
        :nav="{ itemsList: defaultNavBar.nav.itemsList }"
        expand
        expand-size="sm"
        theme="info"
        scroll
      />
      <div>
        C брендом и Offcanvas-панелью навигации разворачивающейся при ширине
        окна 576px и указанием темы фона, с автоскроллом Collapse-панели
      </div>
      <vb-header
        id="header-11"
        :brand="defaultNavBar.brand"
        :nav="{ itemsList: defaultNavBar.nav.itemsList }"
        expand
        expand-size="sm"
        theme="info"
        scroll
        offcanvas
      />
      <div>
        C монохромным брендом и Collapse-панелью навигации разворачивающейся при
        ширине окна 576px и указанием темы фона
      </div>
      <vb-header
        id="header-12"
        :brand="defaultNavBar.brand"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
        theme="info"
        monochrome
      />
      <div>
        C монохромным брендом и Offcanvas-панелью навигации разворачивающейся
        при ширине окна 576px и указанием темы фона
      </div>
      <vb-header
        id="header-13"
        :brand="defaultNavBar.brand"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
        theme="info"
        monochrome
        offcanvas
      />
      <div>
        C брендом и Collapse-панелью навигации разворачивающейся при ширине окна
        576px и указанием тёмной темы фона
      </div>
      <vb-header
        id="header-14"
        :brand="defaultNavBar.brand"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
        theme="info"
        dark
      />
      <div>
        C брендом и Offcanvas-панелью навигации разворачивающейся при ширине
        окна 576px и указанием тёмной темы фона
      </div>
      <vb-header
        id="header-15"
        :brand="defaultNavBar.brand"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
        theme="info"
        dark
        offcanvas
      />
      <div>
        C монохромным брендом и Collapse-панелью навигации разворачивающейся при
        ширине окна 576px и указанием тёмной темы фона
      </div>
      <vb-header
        id="header-16"
        :brand="defaultNavBar.brand"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
        theme="info"
        dark
        monochrome
      />
      <div>
        C монохромным брендом и Offcanvas-панелью навигации разворачивающейся
        при ширине окна 576px и указанием тёмной темы фона
      </div>
      <vb-header
        id="header-17"
        :brand="defaultNavBar.brand"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
        theme="info"
        monochrome
        dark
        offcanvas
      />
      <div>
        Контейнерный хедер с монохромным брендом и Collapse-панелью навигации
        разворачивающейся при ширине окна 576px и указанием темы фона (отличие
        от бесконтейнерного можно увидеть, отключив в консоли класс "container"
        у обертки страницы)
      </div>
      <vb-header
        id="header-18"
        :brand="defaultNavBar.brand"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
        theme="info"
        monochrome
        container
      />
      <div>
        С монохромным брендом и Collapse-панелью навигации разворачивающейся при
        ширине окна 576px и указанием темы фона, выравнивание по центру
      </div>
      <vb-header
        id="header-19"
        :brand="defaultNavBar.brand"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
        theme="info"
        monochrome
        justify-content="center"
      />
      <div>
        С монохромным брендом и Collapse-панелью навигации разворачивающейся при
        ширине окна 576px и указанием темы фона, равные боковые отступы у
        элементов
      </div>
      <vb-header
        id="header-20"
        :brand="defaultNavBar.brand"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
        theme="info"
        monochrome
        justify-content="around"
      />
      <div>
        С монохромным брендом и Collapse-панелью навигации разворачивающейся при
        ширине окна 576px и указанием темы фона, одинаковые отступы между
        элементами
      </div>
      <vb-header
        id="header-21"
        :brand="defaultNavBar.brand"
        :nav="{ itemsList: defaultNavBar.nav.itemsList.slice(0, 4) }"
        expand
        expand-size="sm"
        theme="info"
        monochrome
        justify-content="between"
      />

      <h3>Действия компонента</h3>
      <div>
        Возвращает событие @nav-link-click и @nav-bar-brand-click(action)
      </div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbHeader from "../components/Bootstrap_4.6.2/BS46Header";
export default {
  name: "HeaderView",
  components: { VbHeader, VbAlert },
  data() {
    return {
      windowData: {
        width: null,
        widthSize: "",
      },
      defaultNavBar: {
        brand: {
          href: "/",
          name: "Brand Name",
          imageSrc: "images/iss_logo.svg",
        },
        nav: {
          itemsList: [
            {
              id: "nav-link-home",
              name: "Home",
              type: "router-link",
              href: "/",
              active: false,
              disabled: false,
              icon: "home",
              badge: {
                theme: "danger",
                pill: true,
                notNullDisplay: true,
                value: 25,
                max: 99,
              },
            },
            {
              id: "nav-link-alert",
              name: "Alert",
              type: "router-link",
              href: "/alert",
              active: false,
              disabled: false,
            },
            {
              id: "nav-link-card",
              name: "Card",
              type: "router-link",
              href: "/card",
              active: false,
              disabled: false,
            },
            {
              id: "nav-link-collapse",
              name: "Collapse",
              type: "router-link",
              href: "#",
              active: false,
              disabled: false,
              icon: "",
              badge: {
                theme: "danger",
                pill: true,
                notNullDisplay: true,
                value: 25,
                max: 99,
              },
              dropdown: true,
              dropdownItemsList: [
                {
                  id: "dropdown-link-collapse",
                  name: "Collapse",
                  type: "router-link",
                  href: "/collapse",
                  icon: "done",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-collapse-button",
                  name: "CollapseButton",
                  type: "router-link",
                  href: "/collapsebutton",
                  icon: "done",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-accordion",
                  name: "Accordion",
                  type: "router-link",
                  href: "/accordion",
                  active: false,
                  disabled: false,
                  icon: "",
                  badge: {
                    theme: "danger",
                    pill: true,
                    notNullDisplay: true,
                    value: 25,
                    max: 99,
                  },
                },
              ],
            },
            {
              id: "nav-link-filter",
              name: "Filter",
              type: "router-link",
              href: "/filter",
              active: false,
              disabled: false,
            },
            {
              id: "nav-link-form",
              name: "Form",
              type: "router-link",
              href: "/form",
              active: false,
              disabled: false,
            },
            {
              id: "nav-link-form-components",
              name: "FormComponents",
              type: "router-link",
              href: "#",
              active: false,
              disabled: false,
              dropdown: true,
              dropdownItemsList: [
                {
                  id: "dropdown-link-select",
                  name: "Select",
                  type: "router-link",
                  href: "/select",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-checkbox",
                  name: "Checkbox",
                  type: "router-link",
                  href: "/checkbox",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-checkboxes-group",
                  name: "CheckboxesGroup",
                  type: "router-link",
                  href: "/checkboxesgroup",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-radio-group",
                  name: "RadioGroup",
                  type: "router-link",
                  href: "/radiogroup",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-date-range",
                  name: "DateRange",
                  type: "router-link",
                  href: "/daterange",
                  active: false,
                  disabled: false,
                },
                {
                  id: "nav-link-form-components3",
                  name: "TestLevel3",
                  type: "router-link",
                  href: "#",
                  active: false,
                  disabled: false,
                  icon: "folder",
                  badge: {
                    theme: "danger",
                    pill: true,
                    notNullDisplay: true,
                    value: 25,
                    max: 99,
                  },
                  dropdown: true,
                  dropdownItemsList: [
                    {
                      id: "dropdown-link-input",
                      name: "Input",
                      type: "router-link",
                      href: "/input",
                      active: false,
                      disabled: false,
                    },
                    {
                      id: "dropdown-link-textarea",
                      name: "Textarea",
                      type: "router-link",
                      href: "/textarea",
                      active: false,
                      disabled: false,
                    },
                  ],
                },
              ],
            },
            {
              id: "nav-link-items-list",
              name: "ItemsList",
              type: "router-link",
              href: "/itemslist",
              active: false,
              disabled: false,
            },
            {
              id: "nav-link-modal",
              name: "Modal",
              type: "router-link",
              href: "#",
              active: false,
              disabled: false,
              dropdown: true,
              dropdownItemsList: [
                {
                  id: "dropdown-link-modal",
                  name: "Modal",
                  type: "router-link",
                  href: "/modal",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-modal-button",
                  name: "ModalButton",
                  type: "router-link",
                  href: "/modalbutton",
                  active: false,
                  disabled: false,
                  icon: "done",
                },
              ],
            },
            {
              id: "nav-link-nav",
              name: "Nav",
              type: "router-link",
              href: "#",
              active: false,
              disabled: false,
              icon: "done",
              dropdown: true,
              dropdownItemsList: [
                {
                  id: "dropdown-link-nav",
                  name: "Nav",
                  type: "router-link",
                  href: "/nav",
                  active: false,
                  disabled: false,
                  icon: "done",
                },
                {
                  id: "dropdown-link-nav-item",
                  name: "NavItem",
                  type: "router-link",
                  href: "/navitem",
                  active: false,
                  disabled: false,
                  icon: "done",
                },
                {
                  id: "dropdown-link-nav-link",
                  name: "NavLink",
                  type: "router-link",
                  href: "/navlink",
                  active: false,
                  disabled: false,
                  icon: "done",
                },
                {
                  id: "dropdown-link-nav-dropdown-item",
                  name: "DropdownItem",
                  type: "router-link",
                  href: "/dropdownitem",
                  icon: "done",
                  active: false,
                  disabled: false,
                },
              ],
            },
            {
              id: "nav-link-pagination",
              name: "Pagination",
              type: "router-link",
              href: "#",
              active: false,
              disabled: false,
              dropdown: true,
              dropdownItemsList: [
                {
                  id: "dropdown-link-pagination",
                  name: "Pagination",
                  type: "router-link",
                  href: "/pagination",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-pagination-items-per-page",
                  name: "PaginationItemsPerPage",
                  type: "router-link",
                  href: "/paginationitemsperpage",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-pagination-page-selector",
                  name: "PaginationPageSelector",
                  type: "router-link",
                  href: "/paginationpageselector",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-pagination-button",
                  name: "PaginationButton",
                  type: "router-link",
                  href: "/paginationbutton",
                  active: false,
                  disabled: false,
                },
              ],
            },
            {
              id: "nav-link-preloader",
              name: "Preloader",
              type: "router-link",
              href: "/preloader",
              active: false,
              disabled: false,
            },
            {
              id: "nav-link-tabs",
              name: "Tab",
              type: "router-link",
              href: "#",
              active: false,
              disabled: false,
              dropdown: true,
              dropdownItemsList: [
                {
                  id: "dropdown-link-nav-tabs",
                  name: "NavTabs",
                  type: "router-link",
                  href: "/navtabs",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-nav-tab-link",
                  name: "NavTabLink",
                  type: "router-link",
                  href: "/navtablink",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-tab-content",
                  name: "TabContent",
                  type: "router-link",
                  href: "/tabcontent",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-tab-pane",
                  name: "TabPane",
                  type: "router-link",
                  href: "/tabpane",
                  active: false,
                  disabled: false,
                },
              ],
            },
            {
              id: "nav-link-transition",
              name: "Transition",
              type: "router-link",
              href: "#",
              active: false,
              disabled: false,
              dropdown: true,
              dropdownItemsList: [
                {
                  id: "dropdown-link-transition",
                  name: "Transition",
                  type: "router-link",
                  href: "/transition",
                  active: false,
                  disabled: false,
                },
                {
                  id: "dropdown-link-transition-group",
                  name: "TransitionGroup",
                  type: "router-link",
                  href: "/transitiongroup",
                  active: false,
                  disabled: false,
                },
              ],
            },
            {
              id: "nav-link-nav-bar",
              name: "NavBar",
              type: "router-link",
              href: "#",
              active: false,
              disabled: false,
              icon: "done",
              dropdown: true,
              dropdownItemsList: [
                {
                  id: "dropdown-link-nav-bar",
                  name: "NavBar",
                  type: "router-link",
                  href: "/navbar",
                  active: false,
                  disabled: false,
                  icon: "done",
                },
                {
                  id: "dropdown-link-nav-bar-brand",
                  name: "NavBarBrand",
                  type: "router-link",
                  href: "/navbarbrand",
                  active: false,
                  disabled: false,
                  icon: "done",
                },
              ],
            },
            {
              id: "nav-link-offcanvas",
              name: "Offcanvas",
              type: "router-link",
              href: "#",
              active: false,
              disabled: false,
              icon: "done",
              dropdown: true,
              dropdownItemsList: [
                {
                  id: "dropdown-link-offcanvas",
                  name: "Offcanvas",
                  type: "router-link",
                  href: "/offcanvas",
                  active: false,
                  disabled: false,
                  icon: "done",
                },
                {
                  id: "dropdown-link-offcanvas-button",
                  name: "OffcanvasButton",
                  type: "router-link",
                  href: "/offcanvasbutton",
                  icon: "done",
                  active: false,
                  disabled: false,
                },
              ],
            },
            {
              id: "nav-link-header",
              name: "Header",
              type: "router-link",
              href: "/header",
              active: false,
              disabled: false,
            },
            {
              id: "nav-link-icon",
              name: "Icon",
              type: "router-link",
              href: "/icon",
              icon: "done",
              active: false,
              disabled: false,
            },
            {
              id: "nav-link-button",
              name: "Button",
              type: "router-link",
              href: "#",
              active: false,
              disabled: false,
              icon: "done",
              dropdown: true,
              dropdownItemsList: [
                {
                  id: "dropdown-link-button",
                  name: "Button",
                  type: "router-link",
                  href: "/button",
                  active: false,
                  disabled: false,
                  icon: "done",
                },
                {
                  id: "dropdown-link-button-link",
                  name: "ButtonLink",
                  type: "router-link",
                  href: "/buttonlink",
                  active: false,
                  disabled: false,
                  icon: "done",
                },
              ],
            },
            {
              id: "nav-link-badge",
              name: "Badge",
              type: "router-link",
              href: "/badge",
              icon: "done",
              active: false,
              disabled: false,
            },
            {
              id: "nav-link-test-modal",
              name: "Test Modal",
              type: "modal-link",
              href: "modal-test",
              icon: "star",
              active: false,
              disabled: false,
            },
            {
              id: "nav-link-test-icon",
              name: "Test Icon",
              type: "modal-link",
              href: "modal-test",
              active: false,
              disabled: false,
              icon: "favorite",
              additionalClasses: {
                navItem: null,
                navLink: "btn-square-xl btn-outline-light",
              },
            },
            {
              id: "nav-link-test-badge",
              name: "Test Badge",
              type: "modal-link",
              href: "modal-test",
              active: false,
              disabled: false,
              icon: "mail",
              additionalClasses: {
                navItem: null,
                navLink: "btn-square-xl btn-outline-light",
              },
              badge: {
                theme: "danger",
                pill: true,
                notNullDisplay: true,
                value: 25,
                max: 99,
              },
            },
          ],
        },
      },
    };
  },
  methods: {
    getWindowProperties() {
      this.windowData.width = window.innerWidth;
      if (window.innerWidth >= 1200) {
        this.windowData.widthSize = "xl";
      } else if (window.innerWidth >= 992) {
        this.windowData.widthSize = "lg";
      } else if (window.innerWidth >= 768) {
        this.windowData.widthSize = "md";
      } else if (window.innerWidth >= 576) {
        this.windowData.widthSize = "sm";
      } else {
        this.windowData.widthSize = "xs";
      }
    },
  },
  created() {
    window.addEventListener("resize", this.getWindowProperties);
    this.getWindowProperties();
  },
};
</script>
