<template>
  <div id="app">
    <vb-header
      id="header"
      expand
      expand-size="xl"
      offcanvas
      theme="info"
      dark
      monochrome
      :brand="brand"
      :nav="systemNav"
      justify-content="between"
      :window-data="windowData"
    />
    <vb-modal id="modal-test">Тестовое модальное окно</vb-modal>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import VbHeader from "./components/Bootstrap_4.6.2/BS46Header";
import VbModal from "./components/Bootstrap_4.6.2/BS46Modal";
export default {
  components: { VbModal, VbHeader },
  data() {
    return {
      windowData: {
        width: null,
        widthSize: "",
      },
      brand: {
        href: "/",
        name: "Viewer Studio",
        imageSrc: "images/viewer-logo.svg",
      },
      systemNav: {
        itemsList: [
          {
            id: "nav-link-home",
            name: "Home",
            type: "router-link",
            href: "/",
            active: false,
            disabled: false,
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
                dropdown: true,
                dropdownItemsList: [
                  {
                    id: "dropdown-link-input3",
                    name: "Level-3 Link-1",
                    type: "router-link",
                    href: "/input",
                    active: false,
                    disabled: false,
                  },
                  {
                    id: "dropdown-link-textarea3",
                    name: "Level-3 Link-2",
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
            dropdown: true,
            dropdownItemsList: [
              {
                id: "dropdown-link-nav",
                name: "Nav",
                type: "router-link",
                href: "/nav",
                active: false,
                disabled: false,
              },
              {
                id: "dropdown-link-nav-item",
                name: "NavItem",
                type: "router-link",
                href: "/navitem",
                active: false,
                disabled: false,
              },
              {
                id: "dropdown-link-nav-link",
                name: "NavLink",
                type: "router-link",
                href: "/navlink",
                active: false,
                disabled: false,
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
            dropdown: true,
            dropdownItemsList: [
              {
                id: "dropdown-link-nav-bar",
                name: "NavBar",
                type: "router-link",
                href: "/navbar",
                active: false,
                disabled: false,
              },
              {
                id: "dropdown-link-nav-bar-brand",
                name: "NavBarBrand",
                type: "router-link",
                href: "/navbarbrand",
                active: false,
                disabled: false,
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
            dropdown: true,
            dropdownItemsList: [
              {
                id: "dropdown-link-offcanvas",
                name: "Offcanvas",
                type: "router-link",
                href: "/offcanvas",
                active: false,
                disabled: false,
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
            href: "/button",
            icon: "done",
            active: false,
            disabled: false,
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
    };
  },
  methods: {
    // Навигация
    findActiveNavItemByRouterPath(navItemsList, routePath) {
      for (let i = 0; i < navItemsList.length; i++) {
        if (navItemsList[i].dropdown) {
          for (let j = 0; j < navItemsList[i].dropdownItemsList.length; j++) {
            if (navItemsList[i].dropdownItemsList[j].href === routePath) {
              return navItemsList[i].dropdownItemsList[j];
            }
          }
        } else {
          if (navItemsList[i].href === routePath) {
            return navItemsList[i];
          }
        }
      }
    },
    activateNavItem(navItemsList, selectedItem) {
      navItemsList.forEach((navItem) => {
        if (navItem.dropdown) {
          let foundDropdownItem = false;
          navItem.dropdownItemsList.forEach((dropdownItem) => {
            if (dropdownItem === selectedItem) {
              dropdownItem.active = true;
              foundDropdownItem = true;
            } else {
              dropdownItem.active = false;
              navItem.active = false;
            }
          });
          if (foundDropdownItem) {
            navItem.active = true;
          } else {
            navItem.active = false;
          }
        } else {
          if (navItem === selectedItem) {
            navItem.active = true;
          } else {
            navItem.active = false;
          }
        }
      });
    },

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
  watch: {
    "$route.params.path": {
      handler: function () {
        let activeNavItem = this.findActiveNavItemByRouterPath(
          this.systemNav.itemsList,
          this.$route.path
        );
        this.activateNavItem(this.systemNav.itemsList, activeNavItem);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
.section {
  background-color: lightyellow;
  padding: 0.5rem;
  border: 3px grey solid;
  border-radius: 0.5rem;
}
pre {
  background-color: lightgrey;
  color: grey;
  padding: 0.5rem;
  border: 3px grey solid;
  border-radius: 0.5rem;
}
.incompleted {
  color: red;
}
.nav-link.active {
  color: red;
}
</style>
