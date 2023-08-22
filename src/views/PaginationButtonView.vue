<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2PaginationButton</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46PaginationButton</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Работает исправно. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: Кнопка, использующаяся в элементах пагинации. Является
        составной частью компонентов vb-pagination-items-per-page и
        vb-pagination-page-selector. При добавлении компоненту класса
        islandButtons добавляется css-класс и применяются стили, добавляющие
        отступы между кнопками и закругления.
      </div>
      <div>
        Не имеет пропсов, имеет дефолтный слот для надписи (содержимого) кнопки
      </div>
      <h3>Варианты использования</h3>
      <div>См. <router-link to="/pagination">Pagination</router-link></div>
      <h3>Действия компонента</h3>
      <div>По нажатию на кнопку запускает событие @click</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "PaginationButtonView",
  components: { VbAlert },
};
</script>
