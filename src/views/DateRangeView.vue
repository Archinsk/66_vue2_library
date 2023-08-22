<template>
  <div>
    <h2>Кастомизированный Bootstrap компонент BS46DateRange</h2>
    <div class="section">
      <vb-alert theme-color="danger"
        >Работает исправно. Используется в проектах 40, 61, 62, 64, 71, 72.
        Компонент был изменен, в проектах используется старая версия. Нет
        ограничений по вводу дат</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: Упрощенный вывод парных полей диапазона дат</div>
      <div>
        Состоит из двух компонентов BS46Input. Принимает пропы аналогичные
        компоненту BS46Input: идентификатор, ярлык, тип (дата, дата-время),
        флаги обязательности, режима "только для чтения", отключенности и
        горизонтальности, объект дополнительных классов и объект двух полей.
        Пробрасывает все пропы дочерним объектам (например, disabled отключает
        оба поля). К идентификатору первого поля добавляется "-start", второго -
        "-finish". Ярлык Каждого из полей составной (ярлык диапазона + ярлык
        поля). Поэтому в пропе range должно передаваться 2 поля (from, to),
        содержащих ярлых поля и значение поля
      </div>
      <pre>
props: {
  // общие данные для обоих полей
  id: String,
  label: String,
  type: String,
  required: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  additionalClasses: Object,
  horizontal: Boolean,
  // данные отдельных полей
  range: Object,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <div>
        Минимальный набор пропов - id, type и объект range (без пропов не
        работает)
      </div>
      <vb-date-range
        id="range-01"
        type="date"
        :range="{
          from: { label: 'Дата начала', value: '' },
          to: { label: ' Дата окончания', value: '' },
        }"
      />
      <div>С ярлыками</div>
      <vb-date-range
        id="range-02"
        label="Прием обращений"
        type="date"
        :range="{
          from: { label: ' с:', value: '' },
          to: { label: ' по:', value: '' },
        }"
      />
      <div>Обязательные поля</div>
      <vb-date-range
        id="range-03"
        label="Прием обращений"
        type="date"
        :range="{
          from: { label: ' с:', value: '' },
          to: { label: ' по:', value: '' },
        }"
        required
      />
      <div>Заблокированные поля</div>
      <vb-date-range
        id="range-04"
        label="Прием обращений"
        type="date"
        :range="{
          from: { label: ' с:', value: '' },
          to: { label: ' по:', value: '' },
        }"
        disabled
      />
      <div>Горизонтальная компоновка</div>
      <vb-date-range
        id="range-05"
        label="Прием обращений"
        type="date"
        :range="{
          from: { label: ' с:', value: '' },
          to: { label: ' по:', value: '' },
        }"
        horizontal
      />
      <div>Горизонтальная компоновка с дополнительными классами</div>
      <vb-date-range
        id="range-06"
        label="Прием обращений"
        type="date"
        :range="{
          from: { label: ' с:', value: '' },
          to: { label: ' по:', value: '' },
        }"
        :additional-classes="{ group: 'col-4', label: 'col-4', field: 'col-8' }"
        horizontal
      />

      <h3>Структура данных для компонента</h3>
      <pre>{{ defaultDateRange }}</pre>

      <h3>Действия компонента</h3>
      <div>
        При изменении значения одного из полей вызывает событие @input с
        логическим значением true/false
      </div>
      <vb-date-range
        :id="defaultDateRange.id"
        :label="defaultDateRange.label"
        :type="defaultDateRange.subtype"
        :required="defaultDateRange.required"
        :disabled="defaultDateRange.disabled"
        :readonly="defaultDateRange.readonly"
        :additional-classes="defaultDateRange.additionalClasses"
        :horizontal="defaultDateRange.horizontal"
        :range="defaultDateRange.range"
        @input="changeDateRange($event)"
      />
      <div>
        Возвращаемое значение: {{ returnedValue }} (тип -
        {{ typeof returnedValue }})
      </div>
      <div>
        Текущее значение состояния первого поля:
        {{ defaultDateRange.range.from.value }}
      </div>
      <div>
        Текущее значение состояния второго поля:
        {{ defaultDateRange.range.to.value }}
      </div>
    </div>
  </div>
</template>

<script>
import VbDateRange from "../components/Bootstrap_4.6.2/Form_components/BS46DateRange";
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "DateRangeView",
  components: { VbAlert, VbDateRange },
  data() {
    return {
      defaultDateRange: {
        id: "defaultDateRange",
        label: "Дата создания",
        type: "range",
        subtype: "date",
        required: false,
        disabled: false,
        readonly: false,
        additionalClasses: {
          group: "col-5",
          label: "",
          field: "",
        },
        horizontal: false,
        range: {
          from: { label: " c", value: null },
          to: { label: " по", value: null },
        },
      },
      returnedValue: null,
    };
  },
  methods: {
    changeDateRange({ key, value }) {
      this.defaultDateRange.range[key].value = value;
      this.returnedValue = { key, value };
    },
  },
};
</script>

<style scoped></style>
