<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2Pagination</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46Pagination</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает исправно. Используется в проектах 40,61,62,64,72. В проекте 40
        используется старая версия. Исключена запись " По вашему запросу ничего
        не найдено"</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: Изменение количества элементов в списке на странице и
        навигация по страницам списка. Является составным компонентом, состоит
        из двух компонентов: vb-pagination-items-per-page и
        vb-pagination-page-selector. Во всех проектах используются
        нетипизированные пропсы.
      </div>
      <div>
        Принимает массив числовых значений количества элементов списка на
        странице, активное значение количества элементов на странице, общее
        колицество страниц, активную страницу, флаг раздельного отображения
        кнопок. Содержит классы, скрывающие компонент выбора размерности списка
        на малых и средних экранах. Компонент выбора страниц отображается только
        если количество элементов списка больше количества элементов на
        странице. При изменении размера страницы может изменить и страницу для
        того чтобы на текущей странице всегда оставалась верхняя запись списка
      </div>
      <pre>
props: {
  // для количества на странице
  itemsPerPage: Array,
  pageSize: Number,
  // для страниц
  itemsTotal: Number,
  page: Number,
  // раздельные кнопки
  islandButtons: Boolean,
},</pre
      >
      <h3>Варианты использования</h3>
      <vb-pagination
        :items-total="defaultPagination.itemsTotal"
        :page="defaultPagination.page"
        :page-size="defaultPagination.pageSize"
        :items-per-page="defaultPagination.itemsPerPage"
        @change-page-size="changePageSize($event)"
        @change-page="changePage($event)"
      />
      <vb-pagination
        :items-total="defaultPagination.itemsTotal"
        :page="defaultPagination.page"
        :page-size="defaultPagination.pageSize"
        :items-per-page="defaultPagination.itemsPerPage"
        island-buttons
        @change-page-size="changePageSize($event)"
        @change-page="changePage($event)"
      />
      <ul>
        <li v-for="item of defaultList" :key="item">Запись {{ item }}</li>
      </ul>
      <h3>Действия компонента</h3>
      <div>
        По нажатию на кнопки количества записей на странице вызывается событие
        @change-page-size с объектом, содержащим числовые поля нового размера
        списка и новой страницы. По нажатию на кнопки страниц вызывается событие
        @change-page с числовым значением новой страницы
      </div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbPagination from "../components/Bootstrap_4.6.2/BS46Pagination";
export default {
  name: "PaginationView",
  components: { VbPagination, VbAlert },
  data() {
    return {
      defaultList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      defaultPagination: {
        itemsTotal: 100,
        page: 1,
        pageSize: 10,
        itemsPerPage: [10, 25, 50],
      },
    };
  },
  methods: {
    // Пагинация
    changePageSize({ page, pageSize }) {
      const startItem = pageSize * (page - 1) + 1;
      let newItems = [];
      for (let i = startItem; i <= pageSize * page; i++) {
        newItems.push(i);
      }
      this.defaultList = newItems;
      this.defaultPagination.page = page;
      this.defaultPagination.pageSize = pageSize;
    },
    changePage(page) {
      const startItem = this.defaultPagination.pageSize * (page - 1) + 1;
      let newItems = [];
      for (
        let i = startItem;
        i <= this.defaultPagination.pageSize * page;
        i++
      ) {
        newItems.push(i);
      }
      this.defaultList = newItems;
      this.defaultPagination.page = page;
    },
  },
};
</script>
