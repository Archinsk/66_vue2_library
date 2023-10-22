<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2Header</h2>
    <div>Пока отсутствует</div>

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
        Принимает строку идентификатора, флаги выезжающей боковой панели и
        развернутости навигации, строку размера, на котором панель становится
        развернутой, строку текста, флаги обозначения темного фона и
        монохромности, объекты бренда и навигации
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
},</pre
      >
      <h3>Варианты использования</h3>
      <div>
        Без боковой панели, свернутая навигация на малых экранах, с темой
      </div>
      <vb-header
        id="header-01"
        expand
        expand-size="sm"
        theme="danger"
        :brand="defaultNavBar.brand"
        :nav="defaultNavBar.nav"
      />
      <div>
        С боковой панелью на средних экранах, с темой, темный фон, монохром
      </div>
      <vb-header
        id="header-02"
        expand
        expand-size="md"
        theme="info"
        offcanvas
        dark
        monochrome
        :brand="defaultNavBar.brand"
        :nav="defaultNavBar.nav"
      />
      <h3>Действия компонента</h3>
      <div>Возвращает событие @nav-link-click</div>
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
