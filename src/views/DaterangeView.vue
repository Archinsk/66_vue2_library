<template>
  <div>
    <h2>Кастомизированный Bootstrap компонент BS46Input</h2>
    <h3>Варианты использования</h3>
    <div>Без пропсов не работает</div>
    <vb-date-range />
    <div>С объектом в качестве пропа???</div>
    <vb-date-range :date-range-data="exampleDateRange" />
    <div>С ярлыками</div>
    <vb-date-range :date-range-data="exampleDateRange2" />
    <div>Ярлыки с постфиксами</div>
    <vb-date-range :date-range-data="exampleDateRange3" />
    <div>С установленной шириной группы полей (в колонках Bootstrap)</div>
    <vb-date-range :date-range-data="exampleDateRange4" />
    <h3>Типовое представление</h3>
    <vb-date-range :date-range-data="defaultDateRange" />
    <h3>Действия компонента</h3>
    <vb-date-range
      :date-range-data="activeDateRange"
      @input="setDateRangeValue(activeDateRange, $event)"
    />
    <div>
      Текущее значение состояния первого поля в компоненте App:
      {{ activeDateRange.itemsList[0].value }}
    </div>
    <div>
      Текущее значение состояния второго поля в компоненте App:
      {{ activeDateRange.itemsList[1].value }}
    </div>
  </div>
</template>

<script>
import VbDateRange from "../components/BS46DateRange";
export default {
  name: "DaterangeView",
  components: { VbDateRange },
  data() {
    return {
      exampleDateRange: {
        id: "dateRange1",
        label: "",
        type: "range",
        subtype: "date",
        itemsList: [
          { label: "", value: null },
          { label: "", value: null },
        ],
        width: null,
        responsive: "",
      },
      exampleDateRange2: {
        id: "dateRange2",
        label: "Дата создания",
        type: "range",
        subtype: "date",
        itemsList: [
          { label: "", value: null },
          { label: "", value: null },
        ],
        width: null,
        responsive: "",
      },
      exampleDateRange3: {
        id: "dateRange3",
        label: "Дата создания",
        type: "range",
        subtype: "date",
        itemsList: [
          { label: " c", value: null },
          { label: " по", value: null },
        ],
        width: null,
        responsive: "",
      },
      exampleDateRange4: {
        id: "dateRange4",
        label: "",
        type: "range",
        subtype: "date",
        itemsList: [
          { label: "", value: null },
          { label: "", value: null },
        ],
        width: 6,
        responsive: "",
      },
      defaultDateRange: {
        id: "defaultDateRange",
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
      activeDateRange: {
        id: "activeDateRange",
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
    };
  },
  methods: {
    setDateRangeValue(formField, formFieldData) {
      formField.itemsList[formFieldData.index].value = formFieldData.value;
    },
  },
};
</script>

<style scoped></style>
