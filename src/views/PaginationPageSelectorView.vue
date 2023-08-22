<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2PageSelector</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46PageSelector</h2>
    <div class="section">
      <vb-alert theme-color="danger"
        >Работает исправно. Используется в проектах 40,61,62,64,72. Во всех
        проектах используются нетипизированные пропсы. Компонент изменен,
        упрощен, добавлен проп, добавлено использование компонента
        vb-pagination-button для использования во всех элементах пагинации и
        унификации стилей</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: Изменение страницы списка. Является составной частью
        компонента BS46Pagination.
      </div>
      <div>
        Принимает общее число страниц, текущую (активную) страницу и флаг
        раздельности кнопок
      </div>
      <pre>
props: {
  // Количество страниц и активная страница
  pages: Number,
  activePage: Number,
  // раздельные кнопки
  islandButtons: Boolean,
},</pre
      >
      <h3>Варианты использования</h3>
      <div>См. <router-link to="/pagination">Pagination</router-link></div>
      <h3>Действия компонента</h3>
      <div>
        По нажатию на кнопку запускает событие @change-page с числовым значением
        новой страницы
      </div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "PaginationPageSelectorView",
  components: { VbAlert },
};
</script>
