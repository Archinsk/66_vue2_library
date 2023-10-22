<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2NavItem</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46NavItem</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: пункт ненумерованного списка, может быть представлен в виде
        выпадающего списка
      </div>
      <div>
        Принимает тип ссылки (a, router-link), адрес ссылки, флаги активности и
        отключенности, флаг выпадающего списка. Активность добавляет класс
        active, который нужно стилизовать самостоятельно. По флагу "dropdown"
        определяется является ли пункт обычным или выпадающим списком. Имеет два
        слота. Содержимое пункта пробрасывается в дефолтный слот. Содержимое
        выпадающего списка пробрасывается в слот "dropdown-menu". Внутри
        элемента Offcanvas выпадающие списки принимают статичное
        позиционирование и немного меняют внешний вид, обнуляя поля, отступы,
        границы и их закругления. Это выполнено для того чтобы внутри Offcanvas
        пункты выпадающего меню по высоте были равны основным пунктам.
        См.<router-link to="/navbar">NavBar</router-link>. Обычный пункт
        вызывает событие @click, выпадающий список не вызывает событий
      </div>
      <pre>
props: {
  type: String,
  href: String,
  active: Boolean,
  disabled: Boolean,
  dropdown: Boolean,
}</pre
      >
      <h3>Варианты использования</h3>
      <div>Обычная ссылка</div>
      <ul class="nav">
        <vb-nav-item type="a" href="https://ya.ru">Яндекс</vb-nav-item>
      </ul>
      <div>Ссылка-роутер</div>
      <ul class="nav">
        <vb-nav-item href="/nav">Страница Nav</vb-nav-item>
      </ul>
      <div>Отключенная</div>
      <ul class="nav">
        <vb-nav-item href="/nav" disabled>Отключенная</vb-nav-item>
      </ul>
      <div>Выпадающий список</div>
      <ul class="nav">
        <vb-nav-item type="a" href="https://ya.ru" dropdown
          >Выбрать
          <template v-slot:dropdown-menu>
            <vb-dropdown-item
              v-for="dropdownItem of defaultDropdownItemsList"
              :key="dropdownItem.id"
              :type="dropdownItem.type"
              :href="dropdownItem.href"
              :active="dropdownItem.active"
              :disabled="dropdownItem.disabled"
              >{{ dropdownItem.name }}</vb-dropdown-item
            >
          </template>
        </vb-nav-item>
      </ul>
      <h3>Действия компонента</h3>
      <div>При выборе пункта вызывается событие @click без параметров</div>
      <ul class="nav">
        <vb-nav-item type="a" href="#" @click="returnedEvent = 'click'"
          >Пустая ссылка</vb-nav-item
        >
        <vb-nav-item type="a" href="https://ya.ru" dropdown
          >Выбрать
          <template v-slot:dropdown-menu>
            <vb-dropdown-item
              v-for="dropdownItem of defaultDropdownItemsList"
              :key="dropdownItem.id"
              type="a"
              href="#"
              :active="dropdownItem.active"
              :disabled="dropdownItem.disabled"
              @click="returnedEvent = 'click'"
              >{{ dropdownItem.name }}</vb-dropdown-item
            >
          </template>
        </vb-nav-item>
      </ul>
      <div>Сработавшее событие: {{ returnedEvent }}</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbNavItem from "../components/Bootstrap_4.6.2/BS46NavItem";
import VbDropdownItem from "../components/Bootstrap_4.6.2/BS46DropdownItem";
export default {
  name: "NavItemView",
  components: { VbDropdownItem, VbNavItem, VbAlert },
  data() {
    return {
      defaultDropdownItemsList: [
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
      returnedEvent: null,
    };
  },
};
</script>
