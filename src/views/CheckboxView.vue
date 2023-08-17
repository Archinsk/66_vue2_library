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
        Довавлен флаг grouped для использования в группах, например, в
        компоненте CheckboxesGroup</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: управление двумя состояниями: включено и выключено</div>
      <div>
        Принимает идентификатор, наименование ярлыка, значение(true/false),
        флаги обязательности и отключенности, объект дополнительных классов,
        флаг режима переключателя, флаг группового режима. Пропсы readonly,
        width, horizontal и horizontalWidth исключены, а во всех проектах он
        есть, но не использовались.
      </div>
      <pre>
props: {
  id: String,
  label: String,
  value: Boolean,
  required: Boolean,
  disabled: Boolean,
  additionalClasses: Object,
  switchMode: Boolean,
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

      <vb-checkbox label="Режим перехлючателя" id="agree-03" switch-mode />
      <vb-checkbox
        label="Режим переключателя отключенный"
        id="agree-04"
        switch-mode
        disabled
      />
      <h3>Структура данных для компонента</h3>
      <pre>{{ defaultCheckbox }}</pre>
      <h3>Действия компонента</h3>
      <div>
        При изменении значения вызывает событие @change с логическим значением
        true/false
      </div>
      <vb-checkbox
        :id="defaultCheckbox.id"
        :label="defaultCheckbox.label"
        :value="defaultCheckbox.value"
        :required="defaultCheckbox.required"
        :disabled="defaultCheckbox.disabled"
        :additional-classes="defaultCheckbox.additionalClasses"
        :switch-mode="defaultCheckbox.switchMode"
        :grouped="defaultCheckbox.grouped"
        @change="defaultCheckbox.value = $event"
      />
      <div>
        Возвращаемое значение: {{ defaultCheckbox.value }} (тип -
        {{ typeof defaultCheckbox.value }})
      </div>
    </div>
  </div>
</template>

<script>
import VbCheckbox from "../components/Bootstrap_4.6.2/Form_components/BS46Checkbox";
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "CheckboxView",
  components: { VbAlert, VbCheckbox },
  data() {
    return {
      defaultCheckbox: {
        id: "defaultCheckbox",
        label: "Согласие на обработку",
        type: "input",
        subtype: "checkbox",
        value: false,
        required: false,
        disabled: false,
        additionalClasses: {
          group: "col-6",
          label: "",
          field: "",
        },
        switchMode: false,
        grouped: false,
      },
    };
  },
};
</script>
