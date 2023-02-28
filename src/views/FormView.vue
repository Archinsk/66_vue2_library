<template>
  <div>
    <h2>Кастомизированный Bootstrap компонент BS46Form</h2>
    <h3>Варианты использования</h3>
    <h3>Типовое представление</h3>
    <vb-form :form-data="exampleForm1" />
    <h3>Действия компонента</h3>
    <vb-form
      :form-data="activeForm"
      @change-form="changeForm(activeForm, $event)"
    />
    <div>Значения полей в компоненте App</div>
    <div>№ заявления: {{ activeForm.fields[0].value }}</div>
    <div>Дата создания c: {{ activeForm.fields[1].itemsList[0].value }}</div>
    <div>Дата создания по: {{ activeForm.fields[1].itemsList[1].value }}</div>
    <div>Сообщение: {{ activeForm.fields[2].value }}</div>
    <div>№ ЕПГУ: {{ activeForm.fields[3].value }}</div>
    <div>Статус: {{ activeForm.fields[4].values }}</div>
    <div>
      Дата изменения статуса c: {{ activeForm.fields[5].itemsList[0].value }}
    </div>
    <div>
      Дата изменения статуса по: {{ activeForm.fields[5].itemsList[1].value }}
    </div>
    <div>Показать только архивные: {{ activeForm.fields[6].value }}</div>
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
