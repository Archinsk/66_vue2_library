<template>
  <div class="about">
    <h2>Классический Input</h2>
    <h3>Типы инпутов</h3>
    <input type="button" />
    <input type="checkbox" />
    <input type="color" />
    <input type="date" />
    <input type="datetime" />
    <input type="datetime-local" />
    <input type="email" />
    <input type="file" />
    <input type="hidden" />
    <input type="image" />
    <input type="month" />
    <input type="number" />
    <input type="password" />
    <input type="radio" />
    <input type="range" />
    <input type="reset" />
    <input type="search" />
    <input type="submit" />
    <input type="tel" />
    <input type="text" />
    <input type="time" />
    <input type="url" />
    <input type="week" />
    <h2>Кастомизированный компонент Vue2Input</h2>
    <div class="section">
      <h3>Структура v-input</h3>
      <div>
        Компонент Vue2Input (v-input) включает в себя все пропсы компонента
        BS46Input (vb-input), хотя сам не использует все пропсы, большую часть
        из них проксирует в BS46Input. Так сделано, чтобы используя проп
        "framework" можно было менять стилизацию компонента Vue2Input, не меняя
        функциональности. Данный компонент служит хабом-диспетчером и в
        зависимости от пропа "framework" отображает компонент input
        соответствующего фреймворка.
      </div>
      <div>
        Минимально необходимые пропcов нет. Для отображения ярлыка требуется
        проп "label" (для связи с полем требуется ещё и id). Остальные значения
        могут быть переданы в качестве стандартных атрибутов html-элемента
        input. При required добавляется звездочка<br />
        <pre>
props: {
  // для ярлыка
  label: String,
  // могут быть переданы в качестве атрибутов html-элемента
  type: String,
  id: String,
  value: String,
  required: Boolean,
  readonly: Boolean,
  disabled: Boolean,
  // необходим для определения фреймфорка
  framework: String,
  // необходимы для фреймфорка bootstrap
  idPostfix: String,
  widthGroup: Number,
  responsive: String,
  horizontal: Boolean,
  horizontalWidth: Object,
  focusable: Boolean,
},
        </pre>
      </div>
      <div>
        Примеры записи
        <v-input />
        <v-input type="file" />
        <v-input label="Фамилия" value="Иванов" disabled />
        <v-input id="firstName" label="Имя" value="Иван" required readonly />
        <v-input label="Возраст" type="number" value="23" />
        <pre>Отобразить код не удалось</pre>
        По событию @input компонент возвращает строчное значение value
      </div>
    </div>
    <h3>Варианты использования</h3>
    <div>Без пропсов</div>
    <v-input />
    <div>C ярлыком (передавать вместе с id поля)</div>
    <v-input id="myInput1" label="Наименование поля" />
    <div>C предустановленным значением</div>
    <v-input value="Дефолтное значение" />
    <h3>Варианты использования</h3>

    <h3>Типовое представление</h3>
    <v-input
      :id="defaultInput.id"
      :label="defaultInput.label"
      :type="defaultInput.type"
      :framework="defaultInput.framework"
      :width-group="defaultInput.widthGroup"
      :responsive="defaultInput.responsive"
      :required="defaultInput.required"
      :readonly="defaultInput.readonly"
      :disabled="defaultInput.disabled"
      :horizontal="defaultInput.horizontal"
      :horizontal-width="defaultInput.horizontalWidth"
      :value="defaultInput.value"
    />
    <h3>Действия компонента</h3>
    <div>Компонент v-input:</div>
    <v-input
      :id="activeInput.id"
      :label="activeInput.label"
      :type="activeInput.type"
      :framework="activeInput.framework"
      :width-group="activeInput.widthGroup"
      :responsive="activeInput.responsive"
      :required="activeInput.required"
      :readonly="activeInput.readonly"
      :disabled="activeInput.disabled"
      :horizontal="activeInput.horizontal"
      :horizontal-width="activeInput.horizontalWidth"
      :value="activeInput.value"
      @input="setInputValue(activeInput, $event)"
    />
    <div>
      Текущее значение состояния поля в компоненте App: {{ activeInput.value }}
    </div>
    <div>Компонент vb-input (без пропа framework="bootstrap"):</div>
    <vb-input
      :id="activeInput.id"
      :label="activeInput.label"
      :type="activeInput.type"
      :width-group="activeInput.widthGroup"
      :responsive="activeInput.responsive"
      :required="activeInput.required"
      :readonly="activeInput.readonly"
      :disabled="activeInput.disabled"
      :horizontal="activeInput.horizontal"
      :horizontal-width="activeInput.horizontalWidth"
      :value="activeInput.value"
      @input="setInputValue(activeInput, $event)"
    />
    <div>
      Текущее значение состояния поля в компоненте App: {{ activeInput.value }}
    </div>

    <h2>Кастомизированный Bootstrap компонент BS46Temp</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает исправно. Используется в проектах 40, 61, 62, 64, 71, 72. Во
        всех проектах используется устаревший компонент.</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: Прием значения от пользователя.</div>
      <div>
        Принимает идентификатор, ярлык, тип, значение, флаги обязательности,
        режима "только для чтения", отключенности и горизонтальной компановки,
        объект дополнительных классов, плейсхолдер, флаг фокусировки.
      </div>
      <pre>
props: {
  id: String,
  label: String,
  type: String,
  value: String,
  required: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  additionalClasses: Object,
  horizontal: Boolean,
  placeholder: String,
  focusable: Boolean,
},</pre
      >
      <h3>Варианты использования</h3>
      <div>Без пропсов</div>
      <vb-input />
      <div>C ярлыком (передавать вместе с id поля)</div>
      <vb-input id="myInput3" label="Наименование поля" />
      <div>C предустановленным значением</div>
      <vb-input value="Дефолтное значение" />
      <div>Обязательное поле (использовать только с ярлыком)</div>
      <vb-input label="Обязательное поле" required />
      <div>Только для чтения</div>
      <vb-input label="Только чтение" value="Значение" readonly />
      <div>Отключенное</div>
      <vb-input label="Отключено" value="Значение" disabled />
      <div>C Объектом дополнительных классов</div>
      <vb-input label="Доп.классы" :additional-classes="{ group: 'col-4' }" />
      <div>
        Горизонтальная компоновка ярлыка и поля (только с ярлыком, ярлык слева)
      </div>
      <vb-input label="Горизонтальный ярлык" horizontal />
      <div>
        Горизонтальная компоновка ярлыка и поля с установкой ширины под ярлык и
        поле, а также адаптивными классами Bootstrap (только с ярлыком, ярлык
        слева)
      </div>
      <vb-input
        label="Горизонтальный ярлык с доп.классами"
        horizontal
        :additional-classes="{
          group: 'col-8',
          label: 'col-4',
          field: 'col-8',
        }"
      />
      <div>С событием фокусировке</div>
      <vb-input focusable @focus="focusEvent" />
      <h3>Структура данных для компонента</h3>
      <pre>{{ defaultInput }}</pre>
      <h3>Действия компонента</h3>
      <div>
        При изменении значения вызывает событие @input с текстовым значением,
        при наличии пропа focusable фокусировка на поле вызывает событие @focus,
        расфокусировка - @blur
      </div>
      <vb-input
        :id="defaultInput.id"
        :label="defaultInput.label"
        :type="defaultInput.type"
        :value="defaultInput.value"
        :required="defaultInput.required"
        :disabled="defaultInput.disabled"
        :readonly="defaultInput.readonly"
        :additional-classes="defaultInput.additionalClasses"
        :horizontal="defaultInput.horizontal"
        :placeholder="defaultInput.placeholder"
        :focusable="defaultInput.focusable"
        @input="defaultInput.value = $event"
        @focus="focusEvent"
        @blur="blurEvent"
      />
      <div>
        Возвращаемое значение: {{ defaultInput.value }} (тип -
        {{ typeof defaultInput.value }})
      </div>
      <div>Фокус на элементе: {{ focus ? "да" : "нет" }}</div>
    </div>
  </div>
</template>

<script>
import VInput from "../components/Vue2Input";
import VbInput from "../components/Bootstrap_4.6.2/Form_components/BS46Input";
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "InputView",
  components: { VbAlert, VbInput, VInput },
  data() {
    return {
      // Типовые состояния компонента v-input
      defaultInput: {
        id: "person-name",
        label: "Имя пользователя",
        type: "input",
        subtype: "checkbox",
        required: false,
        disabled: false,
        readonly: false,
        additionalClasses: {
          group: "col-6",
          label: "",
          field: "",
        },
        horizontal: false,
        placeholder: "",
        focusable: true,
        value: "",
      },
      activeInput: {
        id: "userLastname",
        label: "Фамилия",
        tag: "input",
        type: "text",
        framework: "bootstrap",
        widthGroup: 12,
        responsive: "col-12 col-md-6",
        required: true,
        readonly: false,
        disabled: false,
        horizontal: false,
        horizontalWidth: {
          label: {
            width: null,
            responsive: "",
          },
          field: {
            width: null,
            responsive: "",
          },
        },
        value: "",
      },
      focus: false,
    };
  },
  methods: {
    setInputValue(formField, formFieldValue) {
      formField.value = formFieldValue;
    },
    focusEvent() {
      console.log("Поле в фокусе");
      this.focus = true;
    },
    blurEvent() {
      console.log("Поле в фокусе");
      this.focus = false;
    },
  },
};
</script>
