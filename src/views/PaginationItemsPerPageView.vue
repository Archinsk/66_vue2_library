<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2PaginationItemsPerPage</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46PaginationItemsPerPage</h2>
    <div class="section">
      <vb-alert theme-color="danger"
        >Работает исправно. Используется в проектах 40,61,62,64,72. В проекте 40
        используется старая версия. Во всех проектах используются
        нетипизированные пропсы. Компонент изменен, упрощен, изменено имя пропа,
        добавлено использование компонента vb-pagination-button для
        использования во всех элементах пагинации и унификации стилей</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: Изменение количества элементов в списке на странице.
        Является составной частью компонента BS46Pagination.
      </div>
      <div>
        Принимает массив значений размерности списка, текущее значение, флаг
        раздельности кнопок
      </div>
      <pre>
props: {
  // список значений и текущее значение
  itemsPerPage: Array,
  pageSize: Number,
  // раздельные кнопки
  islandButtons: Boolean
},</pre
      >
      <h3>Варианты использования</h3>
      <div>См. BS46Pagination</div>
      <h3>Действия компонента</h3>
      <div>
        По нажатию на кнопку запускает событие @change-page-size с числовым
        значением нового размера списка
      </div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/BS46Alert";
export default {
  name: "PaginationItemsPerPageView",
  components: { VbAlert },
};
</script>
