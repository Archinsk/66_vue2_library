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
        Несамостоятельный компонент, используется только внутри компонента
        BS46Nav. Принимает строку идентификатора (требуется для переопределения
        поведения переключателя выпадающего списка, находящегося внутри другого
        списка, используется jquery), строки типа ссылки (a, router-link,
        modal-link), адреса ссылки, флаги активности и отключенности, флаг
        выпадающего списка. Принимается объект или строка с указанием иконки
        (если передается строчное значение, то иконка примет вид иконки из
        шрифта material-icon), объект бейджа, объект дополнительных классов,
        объект с данными окна. Принимает массив пунктов выпадающего списка, имя
        и флаг признака вложенности пункта выпадающего списка в другой
        выпадающий список. Активность добавляет класс active, который нужно
        стилизовать самостоятельно (стилизация добавляется Bootstrap'ом внутри
        компонента BS46NavBar). По флагу "dropdown" определяется является ли
        пункт обычным или выпадающим списком. Если флаг dropdown установлен, то
        компонент рекурсивно выводит сам себя. Имеет слот, в который
        пробрасывается содержимое пункта. Внутри элементов Offcanvas и панели
        navbar-expand выпадающие списки принимают статичное позиционирование и
        немного меняют внешний вид, обнуляя поля, отступы, границы и их
        закругления. Это выполнено для того чтобы внутри Offcanvas пункты
        выпадающего меню по высоте были равны основным пунктам. См.<router-link
          to="/navbar"
          >NavBar</router-link
        >. Обычный пункт вызывает событие @click, выпадающий список не вызывает
        событий
      </div>
      <pre>
props: {
  id: String,
  type: String,
  href: String,
  active: Boolean,
  disabled: Boolean,
  dropdown: Boolean,
  icon: [Object, String],
  badge: Object,
  additionalClasses: Object,
  windowData: Object,
  dropdownItemsList: Array,
  name: String,
  isNestedDropdown: Boolean,
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
        <vb-nav-item
          type="a"
          href="https://ya.ru"
          dropdown
          :dropdown-items-list="defaultDropdownItemsList"
          >Выбрать
        </vb-nav-item>
      </ul>
      <h3>Действия компонента</h3>
      <div>При выборе пункта вызывается событие @click без параметров</div>
      <ul class="nav">
        <vb-nav-item type="a" href="#" @click="returnedEvent = 'click'"
          >Пустая ссылка</vb-nav-item
        >
        <vb-nav-item
          type="a"
          href="https://ya.ru"
          dropdown
          :dropdown-items-list="defaultDropdownItemsList"
          >Выбрать
        </vb-nav-item>
      </ul>
      <div>Сработавшее событие: {{ returnedEvent }}</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbNavItem from "../components/Bootstrap_4.6.2/BS46NavItem";
export default {
  name: "NavItemView",
  components: { VbNavItem, VbAlert },
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
