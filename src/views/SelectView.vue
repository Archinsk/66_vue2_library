<template>
  <div>
    <h2>Классический Select</h2>
    <h2>Кастомизированный компонент Vue2Input</h2>
    <h2>Кастомизированный Bootstrap компонент BS46Input</h2>
    <h3>Варианты использования</h3>
    <div>Без пропсов не работает</div>
    <vb-select />
    <div>Со списком значений</div>
    <vb-select :items-list="exampleSelect.itemsList" />
    <div>С выбранным значением из списка значений</div>
    <vb-select :items-list="exampleSelect.itemsList" :values="[2]" />
    <div>С ярлыком</div>
    <vb-select :items-list="exampleSelect.itemsList" label="Документ" />
    <div>С измененным дефолтным пунктом</div>
    <vb-select
      :items-list="exampleSelect.itemsList"
      label="Документ"
      default-value-label="Выберите ДУЛ"
    />
    <div>С заданной шириной (в колонках Bootstrap)</div>
    <vb-select :items-list="exampleSelect.itemsList" width-group="6" />
    <div>Обязательное (использовать с ярлыком)</div>
    <vb-select
      :items-list="exampleSelect.itemsList"
      label="Документ"
      required
    />
    <div>Выключенное</div>
    <vb-select :items-list="exampleSelect.itemsList" disabled />
    <div>С множественным выбором</div>
    <vb-select
      :items-list="exampleSelect.itemsList"
      :values="[2, 3]"
      multiple
    />
    <div>С множественным выбором и выбранными бейджами значений</div>
    <vb-select
      :items-list="exampleSelect.itemsList"
      :values="[2, 3]"
      multiple
      badges
    />
    <div>
      Горизонтальное расположение (ярлык слева, требуется указывать ширины
      ярлыка и поля в колонках Bootstrap)
    </div>
    <vb-select
      :items-list="exampleSelect.itemsList"
      label="Документ"
      horizontal
      :horizontal-width="exampleSelect.horizontalWidth"
    />
    <h3>Типовое представление</h3>
    <vb-select
      :id="defaultSelect.id"
      :label="defaultSelect.label"
      :items-list="defaultSelect.itemsList"
      :default-value-label="defaultSelect.defaultValueLabel"
      :values="defaultSelect.values"
      :required="defaultSelect.required"
      :disabled="defaultSelect.disabled"
      :multiple="defaultSelect.multiple"
      :badges="defaultSelect.badges"
      :width-group="defaultSelect.width"
      :responsive="defaultSelect.responsive"
      :horizontal="defaultSelect.horizontal"
      :horizontal-width="defaultSelect.horizontalWidth"
    />
    <div>defaultValueLabel: {{ defaultSelect.defaultValueLabel }}</div>
    <div>
      Надпись первой option:
      {{ defaultSelect.itemsList[0].label }}
    </div>
    <div>
      Значение первой option:
      {{ defaultSelect.itemsList[0].value }}
    </div>
    <h3>Действия компонента</h3>
    <div>Компонент vb-input (без пропа framework="bootstrap"):</div>
    <vb-select
      :id="activeSelect.id"
      :label="activeSelect.label"
      :items-list="activeSelect.itemsList"
      :default-value-label="activeSelect.defaultValueLabel"
      :values="activeSelect.values"
      :required="activeSelect.required"
      :disabled="activeSelect.disabled"
      :multiple="activeSelect.multiple"
      :badges="activeSelect.badges"
      :width-group="activeSelect.width"
      :responsive="activeSelect.responsive"
      :horizontal="activeSelect.horizontal"
      :horizontal-width="activeSelect.horizontalWidth"
      @change="setSelectValues(activeSelect, $event)"
    />
    <div>
      Текущее значение состояния поля в компоненте App:
      {{ activeSelect.values }}
    </div>
  </div>
</template>

<script>
import VbSelect from "../components/BS46Select";
export default {
  name: "SelectView",
  components: { VbSelect },
  data() {
    return {
      exampleSelect: {
        id: "userDocType3",
        label: "Тип документа",
        type: "select",
        itemsList: [
          { id: 1, value: 1, label: "Паспорт гражданина РФ" },
          { id: 2, value: 2, label: "Водительское удостоверение" },
          { id: 3, value: 3, label: "Свидетельство о рождении" },
        ],
        width: 12,
        responsive: "",
        defaultValueLabel: "Выберите тип документа",
        horizontal: true,
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
        values: [],
      },
      // Типовые состояния компонента vb-select
      defaultSelect: {
        id: "userDocType",
        label: "Тип документа",
        type: "select",
        itemsList: [
          { id: 1, value: 1, label: "Свидетельство о браке" },
          { id: 2, value: 2, label: "Водительское удостоверение" },
        ],
        width: 12,
        responsive: "",
        defaultValueLabel: "Выберите тип документа",
        horizontal: true,
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
        values: [],
      },
      activeSelect: {
        id: "userDocType2",
        label: "Тип документа",
        type: "select",
        itemsList: [
          { id: 1, value: 1, label: "Свидетельство о браке" },
          { id: 2, value: 2, label: "Водительское удостоверение" },
        ],
        width: 12,
        responsive: "",
        defaultValueLabel: "Выберите тип документа",
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
        values: [],
      },
    };
  },
  methods: {
    setSelectValues(formField, formFieldValues) {
      formField.values = formFieldValues;
    },
  },
};
</script>
