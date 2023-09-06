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
      <div>Назначение: Вывод однотипных элементов в виде сетки</div>
      <div>
        Принимает идентификатор, флаг наименования списка, флаг использования
        скрытых записей, объект пагинации. Использует компоненты
        VbCollapseButton, VbCollapse, VbPagination. Имеет три слота: для
        заголовка, для статических записей, для скрытых записей. Может скрывать
        часть списка и отображать их по нажатию на кнопку "Показать ещё"
        (опционально), может иметь пагинацию. Страница на которой размещается
        список со скрытыми записями должен иметь computed-свойства (например,
        staticItems и hiddenItems) для деления списка записей на два массива,
        эти списки надо передать самостоятельно в соответствующие слоты. Отступы
        элементам списка задаются самостоятельно (через общий css или классы),
        список на отступы не влияет. Для того, чтобы элементы списка вели себя
        как инлайн-элементы (переносились на следующую строку при недостаточной
        ширине родителя), необходимо добавить списку класс "items-list-inline" и
        далее с помощью глобальных стилей настроить отрицательные отступы
        родительскому элементу, а дочерним элементам списка, включая пагинацию и
        положительные отступы и свойство "display" (например, "display:
        inline-flex;")
      </div>
      <pre>
props: {
  id: String,
  title: Boolean,
  hiddenItems: Boolean,
  pagination: Object,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <div>Без заголовка, коллапса и пагинации</div>
      <vb-items-list id="cards-list-01">
        <template v-slot:static-items>
          <vb-card
            v-for="item of defaultItemsList.itemsList.slice(0, 3)"
            :key="item"
          >
            <template v-slot:card-body>Запись №{{ item }}</template>
          </vb-card>
        </template>
      </vb-items-list>
      <div>Без заголовка и коллапса, с пагинацией</div>
      <vb-items-list
        id="cards-list-02"
        :pagination="defaultItemsList.pagination"
        @change-page-size="changePageSize($event)"
        @change-page="changePage($event)"
      >
        <template v-slot:static-items>
          <vb-card v-for="item of itemsWithPagination" :key="item">
            <template v-slot:card-body>Запись №{{ item }}</template>
          </vb-card>
        </template>
      </vb-items-list>
      <div>С заголовком, коллапсом и пагинацией</div>
      <vb-items-list
        title
        id="cards-list-03"
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
      <h3>Структура данных для компонента</h3>
      <pre>{{ defaultItemsList }}</pre>
      <h3>Действия компонента</h3>
      <div>
        При кликах по элементам пагинации вызывает события пагинации
        @change-page-size и @change-page
      </div>
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

<style lang="scss">
.items-list {
  & > :not(:first-child),
  .collapse > :not(:first-child),
  .collapsing > :not(:first-child) {
    margin-top: 15px;
  }

  &.items-list-inline {
    margin: -7.5px;

    & > *,
    .collapse > * {
      display: inline-flex;
      margin: 7.5px;
    }
  }
}
</style>
