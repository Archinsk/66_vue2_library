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
        стилизовать самостоятельно. Содержимое пробрасывается в слот
      </div>
      <pre>
props: {
  type: String,
  href: String,
  active: Boolean,
  disabled: Boolean,
}</pre
      >
      <h3>Варианты использования</h3>
      <div>Обычная ссылка</div>
      <vb-dropdown-item type="a" href="https://ya.ru">Яндекс</vb-dropdown-item>
      <div>Ссылка-роутер</div>
      <vb-dropdown-item href="/nav">Страница Nav</vb-dropdown-item>
      <div>Отключенная</div>
      <vb-dropdown-item href="/nav" disabled>Отключенная</vb-dropdown-item>
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
