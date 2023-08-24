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
        поля). Дополнительно передаются 2 поля (from, to), содержащих ярлых поля
        и значение поля
      </div>
      <pre>
props: {
  // общие данные для обоих полей
  id: String,
  labels: Array,
  type: String,
  required: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  additionalClasses: Object,
  horizontal: Boolean,
  values: Array,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <div>
        Минимальный набор пропов - id, type, ярлыки (без пропов не работает)
      </div>
      <vb-date-range
        id="range-01"
        type="date"
        :labels="['Дата начала', 'Дата окончания']"
      />
      <div>Обязательные поля</div>
      <vb-date-range
        id="range-03"
        :labels="['Прием обращений с:', 'Прием обращений по:']"
        type="date"
        required
      />
      <div>Заблокированные поля</div>
      <vb-date-range
        id="range-04"
        :labels="['Прием обращений с:', 'Прием обращений по:']"
        type="date"
        disabled
      />
      <div>Горизонтальная компоновка</div>
      <vb-date-range
        id="range-05"
        :labels="['Прием обращений с:', 'Прием обращений по:']"
        type="date"
        horizontal
      />
      <div>Горизонтальная компоновка с дополнительными классами</div>
      <vb-date-range
        id="range-06"
        :labels="['Прием обращений с:', 'Прием обращений по:']"
        type="date"
        :additional-classes="{ group: 'col-4', label: 'col-4', field: 'col-8' }"
        horizontal
      />

      <h3>Структура данных для компонента</h3>
      <pre>{{ defaultDateRange }}</pre>

      <h3>Действия компонента</h3>
      <div>
        При изменении значения одного из полей вызывает событие @input с
        массивом строчных значений
      </div>
      <vb-date-range
        :id="defaultDateRange.id"
        :labels="defaultDateRange.labels"
        :type="defaultDateRange.subtype"
        :required="defaultDateRange.required"
        :disabled="defaultDateRange.disabled"
        :readonly="defaultDateRange.readonly"
        :additional-classes="defaultDateRange.additionalClasses"
        :horizontal="defaultDateRange.horizontal"
        :values="defaultDateRange.values"
        @input="changeDateRange($event)"
      />
      <div>
        Возвращаемое значение: {{ returnedValue }} (тип -
        {{ typeof returnedValue }})
      </div>
      <div>
        Текущее значение состояния первого поля:
        {{ defaultDateRange.values[0] }}
      </div>
      <div>
        Текущее значение состояния второго поля:
        {{ defaultDateRange.values[1] }}
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
        labels: ["Дата создания c", "Дата создания по"],
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
        values: ["", ""],
      },
      returnedValue: null,
    };
  },
  methods: {
    changeDateRange(values) {
      this.defaultDateRange.values = values;
      this.returnedValue = values;
    },
  },
};
</script>

<style scoped></style>
