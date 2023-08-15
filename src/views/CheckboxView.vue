<template>
  <div>
    <h2>Классический чекбокс</h2>
    <div>Пока отсутствует</div>
    <h2>Кастомизированный компонент Vue2Checkbox</h2>
    <div>Пока отсутствует</div>
    <h2>Кастомизированный Bootstrap компонент BS46Checkbox</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает исправно. Используется в проектах 40, 61, 62, 64, 71, 72. В
        проекте 61 используется устаревшая версия без некоторых пропов.
        Компонент упрощён, удалены пропы, фрагменты макета, computed-свойства.
        Надо изменить компонент Form, чтобы она распознавала данный компонент,
        как type=input, subtype=checkbox, а не type=checkbox. Довавлен флаг
        grouped для использования в группах, например, в компоненте
        CheckboxesGroup</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: управление двумя состояниями: включено и выключено</div>
      <div>
        Принимает идентификатор, наименование ярлыка, значение(true/false),
        количество занимаемых колонок, обязательность заполнения?? , флаг режима
        "отключено". Пропсы readonly, horizontal и horizontalWidth исключены, а
        во всех проектах он есть, но не использовались. Можно доработать, чтобы
        был внешний вид переключателя.
      </div>
      <pre>
props: {
  // подзаголовок
  id: String,
  label: String,
  value: Boolean,
  widthGroup: Number,
  required: Boolean,
  disabled: Boolean,
  grouped: Boolean,
},</pre
      >
      <h3>Варианты использования</h3>
      <div>Без пропсов</div>
      <vb-checkbox />
      <div>С ярлыком</div>
      <vb-checkbox
        label="Ознакомлен с материалами (использовать с id для кликабельности ярлыка)"
        id="agree-01"
      />
      <div>Обязательное поле (использовать с ярлыком и id)</div>
      <vb-checkbox label="Ознакомлен с материалами" id="agree-02" required />
      <div>Отключено</div>
      <vb-checkbox label="Ознакомлен с материалами" disabled />

      <div class="row">
        <vb-checkbox label="Без пропа horizontal" id="agree-03" />
        <vb-checkbox label="C пропом horizontal" id="agree-04" horizontal />
        <vb-checkbox
          label="C пропом horizontal и horizontal-width=3"
          id="agree-05"
          horizontal
          horizontal-width="2"
        />
      </div>
      <h3>Действия компонента</h3>
      <vb-checkbox
        label="Ознакомлен с материалами"
        :id="activeCheckbox.id"
        :value="activeCheckbox.value"
        @change="setCheckboxValue(activeCheckbox, $event)"
      />
      <div>
        Текущее значение состояния поля в компоненте App:
        {{ activeCheckbox.value }}
      </div>
      <h3>Действия компонента</h3>
    </div>
  </div>
</template>

<script>
import VbCheckbox from "../components/BS46Checkbox";
import VbAlert from "../components/BS46Alert";
export default {
  name: "CheckboxView",
  components: { VbAlert, VbCheckbox },
  data() {
    return {
      activeCheckbox: {
        id: "activeCheckbox",
        label: "Показать только архивные",
        type: "checkbox",
        width: 12,
        value: false,
      },
    };
  },
  methods: {
    setCheckboxValue(formField, formFieldValue) {
      formField.value = formFieldValue;
    },
  },
};
</script>
