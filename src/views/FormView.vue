<template>
  <div>
    <h2>Кастомизированный Bootstrap компонент BS46Form</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает исправно. Используется в проектах 40, 62, 64, 71, 72. Дочерние
        компоненты изменились, изменилась передача пропов в компоненте Form. В
        проектах использована старая версия</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: объединение компонентов в единый компонент, диспетчеризация
        пропов в дочерние компоненты формы, унификация событий компонентов
        формы, применение флагов ко всем дочерним компонентам формы, применение
        стилей для сочетания компонентов формы внутри общей структуры
      </div>
      <div>
        Принимает идентификатор, легенду(заголовок), массив объектов с полями
        формы, флаги обязательности, отключенности, горизонтального режима
        полей, валидности формы(?!) и узких просветов между полями. Если флаги
        обязательности, отключенности, горизонтального режима имеют значение
        true, то данный флаг применяется ко всем полям формы
      </div>
      <pre>
props: {
  id: String,
  legend: String,
  formItemsList: Array,
  required: Boolean,
  disabled: Boolean,
  horizontal: Boolean,
  validity: Boolean,
  tightGutters: Boolean,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <div>Со списком полей</div>
      <vb-form :form-items-list="defaultForm.formItemsList.slice(0, 5)" />
      <div>
        Со списком полей, легендой, обязательными и заблокированными полями
      </div>
      <vb-form
        :form-items-list="defaultForm.formItemsList.slice(0, 5)"
        legend="Данные пользователя"
        required
        disabled
      />
      <div>С уменьшенными зазорами между полями</div>
      <vb-form
        :form-items-list="defaultForm.formItemsList.slice(0, 5)"
        tight-gutters
      />
      <div>С горизонтальной компоновкой полей</div>
      <vb-form
        :form-items-list="defaultForm.formItemsList.slice(0, 5)"
        horizontal
      />
      <h3>Структура данных для компонента</h3>
      <pre>{{ defaultForm }}</pre>
      <h3>Действия компонента</h3>
      <div>
        При изменении значения в поле формы вызывается событие @change-form с
        объектом, содержащим поля измененного поля и новым значением
      </div>
      <vb-form
        :form-items-list="defaultForm.formItemsList"
        @change-form="changeForm($event)"
      />
      <div>
        Возвращаемое значение: {{ returnedValue }} (тип -
        {{ typeof returnedValue }})
      </div>
      <div v-for="formItem of defaultForm.formItemsList" :key="formItem.id">
        Текущее значение состояния поля c id="{{ formItem.id }}":
        {{ formItem.value ? formItem.value : formItem.values }}
      </div>
    </div>
  </div>
</template>

<script>
import VbForm from "../components/Bootstrap_4.6.2/BS46Form";
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "FormView",
  components: { VbAlert, VbForm },
  data() {
    return {
      defaultForm: {
        title: "Данные пользователя",
        id: "person-account",
        legend: "Личный кабинет",
        formItemsList: [
          {
            id: "person-last-name",
            label: "Фамилия",
            type: "input",
            subtype: "text",
            required: false,
            disabled: false,
            readonly: false,
            additionalClasses: {
              group: "col-4",
              label: "",
              field: "",
            },
            horizontal: false,
            placeholder: "",
            focusable: false,
            value: "",
          },
          {
            id: "person-first-name",
            label: "Имя",
            type: "input",
            subtype: "text",
            required: false,
            disabled: false,
            readonly: false,
            additionalClasses: {
              group: "col-4",
              label: "",
              field: "",
            },
            horizontal: false,
            placeholder: "",
            focusable: false,
            value: "",
          },
          {
            id: "person-patronymic-name",
            label: "Отчество",
            type: "input",
            subtype: "text",
            required: false,
            disabled: false,
            readonly: false,
            additionalClasses: {
              group: "col-4",
              label: "",
              field: "",
            },
            horizontal: false,
            placeholder: "",
            focusable: false,
            value: "",
          },
          {
            id: "person-email",
            label: "Электронная почта",
            type: "input",
            subtype: "email",
            required: true,
            disabled: false,
            readonly: false,
            additionalClasses: {
              group: "col-6",
              label: "",
              field: "",
            },
            horizontal: false,
            placeholder: "",
            focusable: false,
            value: "",
          },
          {
            id: "person-work",
            labels: ["Работа c", "Работа по"],
            type: "range",
            subtype: "date",
            required: false,
            disabled: false,
            readonly: false,
            additionalClasses: {
              group: "col-6",
              label: "",
              field: "",
            },
            horizontal: false,
            values: ["", ""],
          },
          {
            id: "person-profession",
            title: "Специализация",
            type: "radioGroup",
            itemsList: [
              { id: "1", value: "1", label: "Front-end" },
              { id: "2", value: "2", label: "Back-end" },
              { id: "3", value: "3", label: "Full-stack" },
            ],
            required: false,
            disabled: false,
            additionalClasses: {
              group: "col-6",
              label: "",
              field: "",
            },
            value: "",
          },
          {
            id: "person-message",
            label: "Сообщение",
            type: "textarea",
            required: false,
            disabled: false,
            readonly: false,
            additionalClasses: {
              group: "col-6",
              label: "",
              field: "",
            },
            horizontal: false,
            placeholder: "Введите текст сообщения",
            rows: 3,
            value: "",
          },
          {
            id: "person-agree",
            label: "Согласие на обработку персональных данных",
            type: "input",
            subtype: "checkbox",
            required: false,
            disabled: false,
            additionalClasses: {
              group: "col-6",
              label: "",
              field: "",
            },
            switchMode: false,
            grouped: false,
            value: false,
          },
          {
            id: "person-doc",
            label: "Тип документа",
            type: "select",
            itemsList: [
              { id: 1, value: 1, label: "Паспорт РФ" },
              { id: 2, value: 2, label: "Свидетельство о рождении" },
              { id: 3, value: 3, label: "Водительское удостоверение" },
            ],
            required: false,
            disabled: false,
            additionalClasses: {
              group: "col-6",
              label: "",
              field: "",
            },
            horizontal: false,
            defaultValueLabel: "Выберите тип документа",
            multiple: false,
            badges: false,
            values: [],
          },
          {
            id: "person-hobby",
            title: "Хобби",
            type: "checkboxesGroup",
            itemsList: [
              { id: "field-1", label: "Футбол" },
              { id: "field-2", label: "Теннис" },
              { id: "field-3", label: "Автомобили" },
              { id: "field-4", label: "Графика" },
            ],
            required: false,
            disabled: false,
            additionalClasses: {
              group: "col-6",
              label: "",
              field: "",
            },
            switchMode: false,
            values: [],
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
      returnedValue: null,
    };
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
  },
};
</script>

<style scoped></style>
