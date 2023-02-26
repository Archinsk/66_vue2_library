<template>
  <div>
    <h2>Кастомизированный Bootstrap компонент BS46Form</h2>
    <h3>Варианты использования</h3>
    <h3>Типовое представление</h3>
    <vb-form :form-data="exampleForm1" />
    <h3>Действия компонента</h3>
    <vb-form :form-data="activeForm" />
  </div>
</template>

<script>
import VbForm from "../components/BS46Form";
export default {
  name: "FormView",
  components: { VbForm },
  data() {
    return {
      exampleForm1: {
        title: "Наименование формы",
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
            id: "1",
            label: "№ заявления",
            type: "input",
            subtype: "number",
            width: 12,
            responsive: "col-sm-4 col-md-3 col-lg-2",
            value: null,
          },
          {
            id: "3",
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
            id: "4",
            label: "№ ЕПГУ",
            type: "input",
            subtype: "number",
            width: 12,
            responsive: "col-sm-4 col-md-3 col-lg-2",
            value: null,
          },
          {
            id: "5",
            label: "Статус",
            type: "select",
            itemsList: [
              { id: 1, value: 1, label: "Черновик" },
              { id: 2, value: 2, label: "В работе" },
              { id: 3, value: 3, label: "Обработано" },
              { id: 4, value: 4, label: "Архивная" },
            ],
            width: 12,
            responsive: "col-sm-4 col-md-3 col-lg-2",
            values: [],
          },
          {
            id: "6",
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
            id: "7",
            label: "Показать только архивные",
            type: "checkbox",
            width: 12,
            value: false,
          },
        ],
      },
      activeForm: {
        title: "Наименование формы",
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
            id: "1",
            label: "№ заявления",
            type: "input",
            subtype: "number",
            width: 12,
            responsive: "col-sm-4 col-md-3 col-lg-2",
            value: null,
          },
          {
            id: "3",
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
            id: "training-comment",
            label: "Сообщение",
            type: "textarea",
            width: 12,
            responsive: "col-sm-8 col-md-6 col-lg-4",
            required: false,
            withoutLabel: false,
            value: "",
          },
          {
            id: "4",
            label: "№ ЕПГУ",
            type: "input",
            subtype: "number",
            width: 12,
            responsive: "col-sm-4 col-md-3 col-lg-2",
            value: null,
          },
          {
            id: "5",
            label: "Статус",
            type: "select",
            itemsList: [
              { id: 1, value: 1, label: "Черновик" },
              { id: 2, value: 2, label: "В работе" },
              { id: 3, value: 3, label: "Обработано" },
              { id: 4, value: 4, label: "Архивная" },
            ],
            width: 12,
            responsive: "col-sm-4 col-md-3 col-lg-2",
            values: [],
          },
          {
            id: "6",
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
            id: "7",
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
    setInputValue(formField, formFieldValue) {
      formField.value = formFieldValue;
    },
    setInputValues(formField, formFieldValues) {
      formField.values = formFieldValues;
    },
    setCheckboxValue(formField, formFieldValue) {
      formField.value = formFieldValue;
    },
  },
};
</script>

<style scoped></style>
