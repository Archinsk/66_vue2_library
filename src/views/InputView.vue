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
    <h3>Варианты использования</h3>
    <div>Без пропсов</div>
    <v-input />
    <div>C ярлыком (передавать вместе с id поля)</div>
    <v-input id="myInput1" label="Наименование поля" />
    <div>C предустановленным значением</div>
    <v-input value="Дефолтное значение" />
    <h2>Кастомизированный Bootstrap компонент BS46Input</h2>
    <h3>Варианты использования</h3>
    <div>Без пропсов</div>
    <v-input framework="bootstrap" />
    <div>C ярлыком (передавать вместе с id поля)</div>
    <v-input framework="bootstrap" id="myInput3" label="Наименование поля" />
    <div>C предустановленным значением</div>
    <v-input framework="bootstrap" value="Дефолтное значение" />
    <div>C шириной (по сетке Bootstrap)</div>
    <v-input framework="bootstrap" width-group="6" />
    <div>C адаптивными классами (по сетке Bootstrap)</div>
    <v-input
      framework="bootstrap"
      responsive="col-12 col-sm-6 col-md-4 col-lg-3"
    />
    <div>Обязательное поле (только с ярлыком)</div>
    <v-input framework="bootstrap" label="Обязательное поле" required />
    <div>Только для чтения</div>
    <v-input
      framework="bootstrap"
      label="Только чтение"
      value="Значение"
      readonly
    />
    <div>Отключенное</div>
    <v-input
      framework="bootstrap"
      label="Отключено"
      value="Значение"
      disabled
    />
    <div>
      Горизонтальная компоновка ярлыка и поля (только с ярлыком, ярлык слева)
    </div>
    <v-input framework="bootstrap" label="Горизонтальный ярлык" horizontal />
    <div>
      Горизонтальная компоновка ярлыка и поля с установкой ширины под ярлык и
      поле, а также адаптивными классами Bootstrap (только с ярлыком, ярлык
      слева)
    </div>
    <v-input
      framework="bootstrap"
      label="Горизонтальный ярлык"
      horizontal
      :horizontal-width="{
        label: { width: 4, responsive: 'col-sm-5' },
        field: {
          width: 8,
          responsive: 'col-sm-7',
        },
      }"
    />
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
  </div>
</template>

<script>
import VInput from "../components/Vue2Input";
import VbInput from "../components/BS46Input";
export default {
  name: "InputView",
  components: { VbInput, VInput },
  data() {
    return {
      // Типовые состояния компонента v-input
      defaultInput: {
        id: "person-name",
        label: "Имя пользователя",
        tag: "input",
        type: "text",
        framework: "bootstrap",
        widthGroup: 12,
        responsive: "col-12 col-md-6",
        required: true,
        readonly: false,
        disabled: true,
        horizontal: true,
        horizontalWidth: {
          label: {
            width: 6,
            responsive: "col-md-4",
          },
          field: {
            width: 6,
            responsive: "col-md-8",
          },
        },
        value: null,
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
    };
  },
  methods: {
    setInputValue(formField, formFieldValue) {
      formField.value = formFieldValue;
    },
  },
};
</script>
