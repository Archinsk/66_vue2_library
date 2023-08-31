<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2Filter</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46Filter</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах в данном виде не
        использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: Фильтрация списков.</div>
      <div>
        Принимает идентификатор, флаг режима сворачиваемости, флаг
        развернутости, флаг скрытия кнопок действий, объект формы(требуется для
        сброса формы), объект пагинации (требуется для сброса номера страницы
        списка к первой странице после применения и сброса фильтра), имя метода
        для обновления списка. Имеет слот, в который должна пробрасываться форма
        с методом её изменения. С компонентом должны использоваться методы
        изменения формы, сброса формы и применения фильтрации. Для сброса у
        полей формы должно быть поле "defaultValue" или "defaultValues", к
        значению которого будет приводиться значение соответствующего поля при
        сбросе. Фильтр может иметь поле с именем метода, который будет
        применяться при применении фильтрации и её сбросе. Для более удобного
        формирования запроса метода поля фильтра должны иметь поле name. Фильтр
        опционно имеет кнопку свертывания. Опционно может быть выключен блок
        кнопок "Применить" и "Сбросить".
      </div>
      <pre>
props: {
  id: String,
  collapse: Boolean,
  collapseShow: Boolean,
  hiddenActionButtons: Boolean,
  formItemsList: Array,
  pagination: Object,
  refreshMethod: String,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <div>Нераскрывающийся список без кнопок действий</div>
      <vb-filter
        id="default-filter-01"
        hidden-action-buttons
        :form-items-list="defaultFormForFilter.formItemsList"
      >
        <vb-form
          :form-items-list="defaultFormForFilter.formItemsList"
          @change-form="changeForm($event)"
        />
      </vb-filter>
      <div>
        Раскрывающийся список, развернутый по умолчанию, без кнопок действий
      </div>
      <vb-filter
        id="default-filter-02"
        collapse
        collapse-show
        hidden-action-buttons
        :form-items-list="defaultFormForFilter.formItemsList"
      >
        <vb-form
          :form-items-list="defaultFormForFilter.formItemsList"
          @change-form="changeForm($event)"
        />
      </vb-filter>
      <div>
        Раскрывающийся список, свернутый по умолчанию, с кнопками действий
      </div>
      <vb-filter
        :id="defaultFilter.id"
        :collapse="defaultFilter.collapse"
        :collapse-show="defaultFilter.collapseShow"
        :hidden-action-buttons="defaultFilter.hiddenActionButtons"
        :refresh-method="defaultFilter.refreshMethod"
        :form-items-list="defaultFormForFilter.formItemsList"
        :pagination="defaultPagination"
        @apply-filter="applyFilter($event)"
        @reset-filter="resetFilter($event)"
      >
        <vb-form
          :form-items-list="defaultFormForFilter.formItemsList"
          @change-form="changeForm($event)"
        />
      </vb-filter>
      <div>Исходный массив</div>
      <div>{{ exampleArray }}</div>
      <div>Результат фильтрации</div>
      <div>{{ filterResult }}</div>
      <h3>Структура данных для компонента</h3>
      <pre>{{ defaultFilter }}</pre>
      <h3>Действия компонента</h3>
      <div>
        При нажатии на кнопку "применить" вызывается событие @apply-filter с
        именем метода для обновления списка записей, при нажатии на кнопку
        "Очистить" срабатывает событие @reset-filter с объектом, содержащим поля
        объекта списка и имени метода для обновления списка записей
      </div>
      <div>
        Возвращаемое значение: {{ returnedValue }} (тип -
        {{ typeof returnedValue }})
      </div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbFilter from "../components/Bootstrap_4.6.2/BS46Filter";
import VbForm from "../components/Bootstrap_4.6.2/BS46Form";
export default {
  name: "FilterView",
  components: { VbForm, VbFilter, VbAlert },
  data() {
    return {
      defaultFilter: {
        id: "default-filter",
        collapse: true,
        collapseShow: false,
        hiddenActionButtons: false,
        refreshMethod: "fakeAsyncFilterRequest",
      },
      defaultFormForFilter: {
        title: "Данные пользователя",
        id: "person-account",
        legend: "Личный кабинет",
        formItemsList: [
          {
            id: "sort-key",
            label: "Сортировать",
            type: "select",
            itemsList: [
              { id: "1", value: "1", label: "Как числа" },
              { id: "2", value: "2", label: "Как строки" },
            ],
            required: false,
            disabled: false,
            additionalClasses: {
              group: "col-12",
              label: "",
              field: "",
            },
            horizontal: false,
            defaultValueLabel: "Выберите критерий",
            multiple: false,
            badges: false,
            values: ["1"],
            defaultValues: ["1"],
          },
          {
            id: "sort-direction-asc",
            label: "Сортировать по убыванию",
            type: "input",
            subtype: "checkbox",
            required: false,
            disabled: false,
            additionalClasses: {
              group: "col-12",
              label: "",
              field: "",
            },
            switchMode: false,
            grouped: false,
            value: false,
            defaultValue: false,
          },
          {
            id: "filter-search",
            label: "Найти значение",
            type: "input",
            subtype: "text",
            required: false,
            disabled: false,
            readonly: false,
            additionalClasses: {
              group: "col-12",
              label: "",
              field: "",
            },
            horizontal: false,
            placeholder: "",
            focusable: false,
            value: "",
            defaultValue: "",
          },
          {
            id: "filter-search-text",
            label: "Найти частичное совпадение",
            type: "input",
            subtype: "text",
            required: false,
            disabled: false,
            readonly: false,
            additionalClasses: {
              group: "col-12",
              label: "",
              field: "",
            },
            horizontal: false,
            placeholder: "",
            focusable: false,
            value: "",
            defaultValue: "",
          },
          {
            id: "filter-even",
            title: "Чётность",
            type: "radioGroup",
            itemsList: [
              { id: "1", value: "all", label: "Показать все" },
              { id: "2", value: "odd", label: "Только нечётные" },
              { id: "3", value: "even", label: "Только чётные" },
            ],
            required: false,
            disabled: false,
            additionalClasses: {
              group: "col-12",
              label: "",
              field: "",
            },
            value: "all",
            defaultValue: "all",
          },
        ],
        validity: false,
        horizontal: false,
        horizontalWidth: {
          label: {
            width: 4,
            responsive: "col-sm-5",
          },
          field: {
            width: 8,
            responsive: "col-sm-7",
          },
        },
        disabled: false,
      },
      defaultPagination: {
        itemsTotal: 32,
        page: 1,
        pageSize: 10,
        itemsPerPage: [10, 25, 50],
      },
      exampleArray: Array(100)
        .fill()
        .map((_, i) => i + 1),
      filterResult: [],
      returnedValue: null,
    };
  },
  computed: {
    oddArray() {
      return this.exampleArray.filter((num) => num % 2 !== 0);
    },
    evenArray() {
      return this.exampleArray.filter((num) => num % 2 === 0);
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
    // Изменения формы типовое, без валидации
    changeForm({ formItem, newValue }) {
      if ("value" in formItem) {
        formItem.value = newValue;
      }
      if ("values" in formItem) {
        formItem.values = newValue.slice();
      }
      this.returnedValue = { formItem, newValue };
    },
    applyFilter({ pagination, refreshMethod }) {
      console.log(pagination);
      if (refreshMethod) {
        if (pagination) {
          pagination.page = 1;
        }
        this[refreshMethod]();
      }
      this.returnedValue = { pagination, refreshMethod };
    },
    resetFilter({ formItemsList, pagination, refreshMethod }) {
      formItemsList.forEach(function (formItem) {
        if ("value" in formItem) {
          if (formItem.type === "input" && formItem.subtype === "checkbox") {
            formItem.value = formItem.defaultValue || false;
          } else {
            formItem.value = formItem.defaultValue || "";
          }
        }
        if ("values" in formItem) {
          formItem.values = formItem.defaultValues.slice() || [];
        }
      });
      /*tableData.filters.forEach(function (field) {
          else if (field.type === "input") {
          if (field.subtype === "file") {
            field.file.name = "";
            field.file.type = "";
            field.file.base64 = "";
          }
          field.value = "";
        } else if (field.type === "range") {
          field.itemsList[0].value = null;
          field.itemsList[1].value = null;
        }
      });*/
      this.returnedValue = { formItemsList, pagination, refreshMethod };
      if (refreshMethod) {
        if (pagination) {
          pagination.page = 1;
        }
        this[refreshMethod]();
      }
    },
    fakeAsyncFilterRequest() {
      let resultArray = [];
      if (this.defaultFormForFilter.formItemsList[4].value === "all") {
        resultArray = this.exampleArray.slice();
      }
      if (this.defaultFormForFilter.formItemsList[4].value === "odd") {
        resultArray = this.oddArray.slice();
      }
      if (this.defaultFormForFilter.formItemsList[4].value === "even") {
        resultArray = this.evenArray.slice();
      }
      if (this.defaultFormForFilter.formItemsList[3].value) {
        resultArray = resultArray.filter((item) => {
          return String(item).includes(
            this.defaultFormForFilter.formItemsList[3].value
          );
        });
      }
      if (this.defaultFormForFilter.formItemsList[0].values[0] === "2") {
        resultArray = resultArray.sort();
      }
      if (this.defaultFormForFilter.formItemsList[0].values[0] === "1") {
        resultArray = resultArray.sort(this.compareNumeric);
      }
      if (this.defaultFormForFilter.formItemsList[1].value) {
        resultArray = resultArray.reverse();
      }
      if (this.defaultFormForFilter.formItemsList[2].value) {
        resultArray = resultArray.find((item) => {
          return (
            item === Number(this.defaultFormForFilter.formItemsList[2].value)
          );
        });
      }
      this.filterResult = resultArray;
    },
    compareNumeric(a, b) {
      if (a > b) return 1;
      if (a == b) return 0;
      if (a < b) return -1;
    },
  },
};
</script>

<style scoped></style>
