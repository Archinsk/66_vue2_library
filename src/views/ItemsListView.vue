<template>
  <div>
    <h2>Кастомизированный компонент Vue2ItemsList</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46ItemsList</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: Вывод однотипных ылементов в виде сетки</div>
      <div>
        Принимает идентификатор, флаг наименования списка, флаг использования
        скрытых записей, объект пагинации. Использует компоненты
        VbCollapseButton, VbCollapse, VbPagination. Имеет три слота: для
        заголовка, для статических записей, для скрытых записей. Может скрывать
        часть списка и отображать их по нажатию на кнопку "Показать ещё"
        (опционально), может иметь пагинацию. Страница на которой размещается
        список со скрытыми записями должен иметь computed-свойства staticItems и
        hiddenItems для деления списка записей на два массива, эти списки надо
        передать самостоятельно в соответствующие слоты. Отступы элементам
        списка задаются самостоятельно (через общий css или классы), список на
        отступы не влияет.
      </div>
      <pre>
props: {
  // подзаголовок
  поле: тип,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <!---->
      <vb-items-list
        title
        id="cards-list"
        :hidden-items="defaultItemsList.hiddenItems"
        :pagination="defaultItemsList.pagination"
        @change-page-size="changePageSize($event)"
        @change-page="changePage($event)"
      >
        <template v-slot:list-title
          ><h4>
            Список записей. Всего доступно -
            {{ defaultItemsList.pagination.itemsTotal }} записей
          </h4></template
        >
        <template v-slot:static-items>
          <vb-card v-for="item of staticItems" :key="item">
            <template v-slot:card-body>Запись №{{ item }}</template>
          </vb-card>
        </template>
        <template v-if="defaultItemsList.hiddenItems" v-slot:hidden-items>
          <vb-card v-for="item of hiddenItems" :key="item">
            <template v-slot:card-body>Запись №{{ item }}</template>
          </vb-card>
        </template>
      </vb-items-list>
      <h3>Действия компонента</h3>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbItemsList from "../components/Bootstrap_4.6.2/BS46ItemsList";
import VbCard from "../components/Bootstrap_4.6.2/BS46Card";
export default {
  name: "ItemsListView",
  components: { VbCard, VbItemsList, VbAlert },
  data() {
    return {
      defaultItemsList: {
        itemsList: [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
        ],
        pagination: {
          itemsTotal: 32,
          page: 1,
          pageSize: 10,
          itemsPerPage: [10, 25, 50],
        },
        hiddenItems: true,
        staticItemsSize: 3,
      },
    };
  },
  computed: {
    itemsWithPagination() {
      let index =
        this.defaultItemsList.pagination.pageSize *
        (this.defaultItemsList.pagination.page - 1);
      return this.defaultItemsList.itemsList.slice(
        index,
        index + this.defaultItemsList.pagination.pageSize
      );
    },
    staticItems() {
      if (this.itemsWithPagination.length) {
        if (this.defaultItemsList.hiddenItems) {
          return this.itemsWithPagination.slice(
            0,
            this.defaultItemsList.staticItemsSize
          );
        } else {
          return this.defaultItemsList.itemsList;
        }
      } else {
        return [];
      }
    },
    hiddenItems() {
      if (
        this.itemsWithPagination.length > this.defaultItemsList.staticItemsSize
      ) {
        return this.itemsWithPagination.slice(
          this.defaultItemsList.staticItemsSize
        );
      } else {
        return [];
      }
    },
  },
  methods: {
    // Пагинация
    changePageSize({ page, pageSize }) {
      this.defaultItemsList.pagination.page = page;
      this.defaultItemsList.pagination.pageSize = pageSize;
    },
    changePage(page) {
      this.defaultItemsList.pagination.page = page;
    },
  },
};
</script>

<style scoped></style>
