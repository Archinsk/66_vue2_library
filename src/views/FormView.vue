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
      <vb-form :form-items-list="defaultForm.formItemsList" />
      <h3>Действия компонента</h3>
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
            id: "person--patronymic-name",
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
            label: "Работа",
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
            range: {
              from: { label: " c", value: null },
              to: { label: " по", value: null },
            },
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
            id: "serviceType",
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
        fields: [
          {
            id: "field1",
            label: "№ заявления",
            type: "input",
            subtype: "number",
            width: 12,
            responsive: "col-sm-4 col-md-3 col-lg-2",
            value: null,
          },
          {
            id: "field2",
            label: "Дата создания",
            type: "range",
            subtype: "date",
            itemsList: [
              { label: " c", value: null },
              { label: " по", value: null },
            ],
            width: 12,
            responsive: "col-sm-8 col-md-6 col-lg-4",
          },
          {
            id: "field3",
            label: "Сообщение",
            type: "textarea",
            width: 12,
            responsive: "col-sm-8 col-md-6 col-lg-4",
            required: false,
            withoutLabel: false,
            value: "",
          },
          {
            id: "field4",
            label: "№ ЕПГУ",
            type: "input",
            subtype: "number",
            width: 12,
            responsive: "col-sm-4 col-md-3 col-lg-2",
            value: null,
          },
          {
            id: "field5",
            label: "Статус",
            type: "select",
            itemsList: [
              { id: 1, value: 1, label: "Черновик" },
              { id: 2, value: 2, label: "В работе" },
              { id: 3, value: 3, label: "Обработано" },
              { id: 4, value: 4, label: "Архивная" },
            ],
            multiple: true,
            badges: true,
            width: 12,
            responsive: "col-sm-4 col-md-3 col-lg-2",
            values: [],
          },
          {
            id: "field6",
            label: "Дата изменения статуса",
            type: "range",
            subtype: "date",
            itemsList: [
              { label: " c", value: null },
              { label: " по", value: null },
            ],
            width: 12,
            responsive: "col-sm-8 col-md-6 col-lg-4",
          },
          {
            id: "field7",
            label: "Показать только архивные",
            type: "checkbox",
            width: 12,
            value: false,
          },
        ],
      },
    };
  },
  methods: {
    changeForm(form, newFormData) {
      console.log("Изменяется форма");
      console.log(form);
      console.log(newFormData);
      let formField = form.fields.find(function (item) {
        if (item.id === newFormData.id) return true;
      });
      if (formField.type === "select") {
        this.setSelectValues(formField, newFormData.values);
      } else if (formField.type === "range") {
        this.setDateRangeValue(formField, newFormData);
        // } else if (formField.type === "input" && formField.subtype === "file") {
        //   formField.file = newFormData.value;
      } else {
        this.setInputValue(formField, newFormData.value);
      }
      console.log("Измененное поле");
      console.log(formField);
    },
    // Метод для Input, Checkbox, Textarea
    setInputValue(formField, formFieldValue) {
      formField.value = formFieldValue;
    },
    setSelectValues(formField, formFieldValues) {
      formField.values = formFieldValues;
    },
    setDateRangeValue(formField, formFieldData) {
      formField.itemsList[formFieldData.index].value = formFieldData.value;
    },
  },
};
</script>

<style scoped></style>
