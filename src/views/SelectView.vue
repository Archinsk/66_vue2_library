<template>
  <div>
    <h2>Классический Select</h2>
    <h2>Кастомизированный компонент Vue2Select</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46Select</h2>
    <div class="section">
      <vb-alert theme-color="danger"
        >Работает исправно. Используется в проектах 40, 61, 62, 64, 71, 72.
        Сложный компонент, должен быть упрощен за счет выноса некоторых
        разновидностей в отдельные компоненты. Селект с множественными бейджами
        требует доработки</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: выбор одиночного или множественных значений из выпадающего
        списка значений
      </div>
      <div>
        Принимает идентификатор, ярлык, массив элементов списка, массив
        выбранных значений, флаги обязательности, отключенности и
        горизонтального режима, объект дополнительных классов, дефолтный ярлык,
        флаги множественного выбора и отображения бейджей.
      </div>
      <pre>
props: {
  // подзаголовок
  id: String,
  label: String,
  itemsList: Array,
  values: Array,
  required: Boolean,
  disabled: Boolean,
  additionalClasses: Object,
  horizontal: Boolean,
  defaultValueLabel: String,
  multiple: Boolean,
  badges: Boolean,

},</pre
      >
      <h3>Варианты использования</h3>
      <div>Без пропов</div>
      <vb-select />
      <div>С ярлыком (для кликабельности использовать совместно с id)</div>
      <vb-select label="Документ" id="select-01" />
      <div>Со списком значений</div>
      <vb-select
        :items-list="[
          { id: 1, value: 1, label: 'Пункт 1' },
          { id: 2, value: 2, label: 'Пункт 2' },
          { id: 3, value: 3, label: 'Пункт 3' },
        ]"
      />
      <div>С выбранным значением из списка значений</div>
      <vb-select
        :items-list="[
          { id: 1, value: 1, label: 'Пункт 1' },
          { id: 2, value: 2, label: 'Пункт 2' },
          { id: 3, value: 3, label: 'Пункт 3' },
        ]"
        :values="[2]"
      />
      <div>С измененным дефолтным пунктом</div>
      <vb-select
        :items-list="[
          { id: 1, value: 1, label: 'Документ 1' },
          { id: 2, value: 2, label: 'Документ 2' },
          { id: 3, value: 3, label: 'Документ 3' },
        ]"
        label="Документ"
        default-value-label="Выберите документ, удостоверяющий личность"
      />
      <div>Обязательное (использовать с ярлыком)</div>
      <vb-select
        :items-list="[
          { id: 1, value: 1, label: 'Документ 1' },
          { id: 2, value: 2, label: 'Документ 2' },
          { id: 3, value: 3, label: 'Документ 3' },
        ]"
        label="Документ"
        required
      />
      <div>Выключенное</div>
      <vb-select
        :items-list="[
          { id: 1, value: 1, label: 'Документ 1' },
          { id: 2, value: 2, label: 'Документ 2' },
          { id: 3, value: 3, label: 'Документ 3' },
        ]"
        disabled
      />
      <div>С объектом дополнительных классов</div>
      <vb-select
        :items-list="[
          { id: 1, value: 1, label: 'Пункт 1' },
          { id: 2, value: 2, label: 'Пункт 2' },
          { id: 3, value: 3, label: 'Пункт 3' },
        ]"
        :additional-classes="{ group: 'col-6' }"
      />
      <div>Горизонтальное расположение</div>
      <vb-select label="Документ" horizontal />
      <div>Горизонтальное расположение с объектом дополнительных классов</div>
      <vb-select
        label="Документ"
        horizontal
        :additional-classes="{ group: 'col-6', label: 'col-3', field: 'col-9' }"
      />
      <div>С множественным выбором</div>
      <vb-select
        :items-list="[
          { id: 1, value: 1, label: 'Пункт 1' },
          { id: 2, value: 2, label: 'Пункт 2' },
          { id: 3, value: 3, label: 'Пункт 3' },
        ]"
        :values="[2, 3]"
        multiple
      />
      <div>С множественным выбором и бейджами выбранных значений</div>
      <vb-select
        :items-list="defaultSelect.itemsList"
        :values="defaultSelect.values"
        multiple
        badges
        @change="defaultSelect.values = $event"
      />
      <h3>Структура данных для компонента</h3>
      <pre>{{ defaultSelect }}</pre>
      <h3>Действия компонента</h3>
      <div>
        При изменении значения вызывает событие @change с массивом выбранных
        значений
      </div>
      <vb-select
        :id="defaultSelect.id"
        :label="defaultSelect.label"
        :items-list="defaultSelect.itemsList"
        :values="defaultSelect.values"
        :required="defaultSelect.required"
        :disabled="defaultSelect.disabled"
        :additional-classes="defaultSelect.additionalClasses"
        :horizontal="defaultSelect.horizontal"
        :default-value-label="defaultSelect.defaultValueLabel"
        :multiple="defaultSelect.multiple"
        :badges="defaultSelect.badges"
        @change="defaultSelect.values = $event"
      />
      <div>
        Возвращаемое значение: {{ defaultSelect.values }} (тип -
        {{ typeof defaultSelect.values }})
      </div>
    </div>
  </div>
</template>

<script>
import VbSelect from "../components/Bootstrap_4.6.2/Form_components/BS46Select";
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "SelectView",
  components: { VbAlert, VbSelect },
  data() {
    return {
      defaultSelect: {
        id: "userDocType",
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
          group: "col-5",
          label: "",
          field: "",
        },
        horizontal: false,
        defaultValueLabel: "Выберите тип документа",
        multiple: false,
        badges: false,
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
