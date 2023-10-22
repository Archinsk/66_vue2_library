<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2DropdownItem</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46DropdownItem</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый элемент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: пункт выпадающего списка</div>
      <div>
        Принимает тип ссылки (a, router-link), адрес ссылки, флаги активности и
        отключенности. Активность добавляет класс active, который нужно
        стилизовать самостоятельно. Принимает иконку в виде строки или объекта.
        Если icon передается в виде строки, то он передается далее в качестве
        имени иконки. Содержимое пробрасывается в слот. Внутри тела компонента
        vb-offcanvas пункт меняет свою высоту, подстраиваясь под высоту основных
        пунтктов, слева имеет увеличенный паддинг. См.<router-link to="/navbar"
          >NavBar</router-link
        >
      </div>
      <pre>
props: {
  type: String,
  href: String,
  active: Boolean,
  disabled: Boolean,
  icon: [Object, String],
}</pre
      >
      <h3>Варианты использования</h3>
      <div>Обычная ссылка</div>
      <vb-dropdown-item type="a" href="https://ya.ru">Яндекс</vb-dropdown-item>
      <div>Ссылка-роутер</div>
      <vb-dropdown-item href="/nav">Страница Nav</vb-dropdown-item>
      <div>Отключенная</div>
      <vb-dropdown-item href="/nav" disabled>Отключенная</vb-dropdown-item>
      <div>С иконкой</div>
      <vb-dropdown-item href="/nav" icon="star">Избранное</vb-dropdown-item>
      <h3>Действия компонента</h3>
      <div>При выборе пункта вызывается событие @click без параметров</div>
      <vb-dropdown-item type="a" href="#" @click="returnedEvent = 'click'"
        >Пустая ссылка</vb-dropdown-item
      >
      <div>Сработавшее событие: {{ returnedEvent }}</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbDropdownItem from "../components/Bootstrap_4.6.2/BS46DropdownItem";
export default {
  name: "DropdownItemView",
  components: { VbDropdownItem, VbAlert },
  data() {
    return {
      returnedEvent: null,
    };
  },
};
</script>
