<template>
  <div>
    <div class="home">Стартовая страница</div>
    <div>
      Цель проекта - создание переиспользкемой библиотеки компонентов для
      ускорения создания проектов. В качестве точки отсчета принят фреймворк
      bootstrap. Планируется достижение гибкости за счет использования других
      фреймфорков переключением пропса framework. Желательно создание
      npm-пакета. Легкость конечного продукта должна быть достигнута за счет
      инкапсуляции стилей и скриптов внутри компонентов
    </div>
    <vb-alert theme-color="danger">
      bootstrap 4.6.2 может ругаться на отсутствие "jquery": "3.5.1" и
      "popper.js": "^1.16.1". Помогают команды "npm install jquery@3.5.1" и "npm
      install popper.js@1.16.1"
    </vb-alert>
    <ul class="nav">
      <li class="nav-item">
        <a href="#" class="item-link">NavItem NavLink 1</a>
      </li>
      <li class="nav-item">
        <a href="#" class="item-link">NavItem NavLink 2</a>
      </li>
      <li class="nav-item dropdown">
        <a href="#" class="item-link dropdown-toggle" data-toggle="dropdown"
          >NavItem.dropdown NavLink.dropdown-toggle</a
        >
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">DropdownItem 1</a>
          <a class="dropdown-item" href="#">DropdownItem 2</a>
          <div class="dropdown-item dropdown">
            <a href="#" class="item-link dropdown-toggle" data-toggle="dropdown"
              >NavItem.dropdown NavLink.dropdown-toggle</a
            >
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">DropdownInDropdown 1</a>
              <a class="dropdown-item" href="#">DropdownInDropdown 2</a>
              <a class="dropdown-item" href="#">DropdownInDropdown 3</a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import $ from "jquery";
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "HomeView",
  components: { VbAlert },
  /*mounted() {
    $(".dropdown-menu .dropdown-toggle").on("click", function (event) {
      // Avoid following the href location when clicking
      event.preventDefault();
      // Avoid having the menu to close when clicking
      event.stopPropagation();

      if ($(this).parent().hasClass("show")) {
        // If a menu is already open we close it
        $(this).parent().removeClass("show");
        $(this).next().removeClass("show");
      } else {
        // opening the one you clicked on
        $(this).parent().addClass("show");
        $(this).next().addClass("show");
      }
    });
  },*/
};
</script>
