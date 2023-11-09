<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2RadioGroup</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46RadioGroup</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Новый компонент. Ранее в проектах не использовался.</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: группа радиокнопок для выбора единственного значения из
        массива однотипных сущностей, например, для использования в фильтрах
      </div>
      <div>
        Принимает идентификатор, заголовок группы, массив объектов с параметрами
        дочерних радио-кнопок, выбранное значение, флаги обязательности,
        отключенности, объект дополнительных классов. Если флаг отключенности
        принимают значение true, то значения отключенности у отдельных
        радио-кнопок не учитываются, ко всем радиокнопкам применяется отключение
      </div>
      <pre>
props: {
  id: String,
  title: String,
  itemsList: Array,
  value: String,
  required: Boolean,
  disabled: Boolean,
  additionalClasses: Object,
},</pre
      >
      <h3>Варианты использования</h3>
      <vb-radio-group
        id="radios1"
        :title="defaultRadioGroup.title"
        :items-list="defaultRadioGroup.itemsList"
        :value="defaultRadioGroup.value"
        :required="defaultRadioGroup.required"
        :disabled="defaultRadioGroup.disabled"
        :additional-classes="defaultRadioGroup.additionalClasses"
      />
      <vb-radio-group
        id="radios2"
        :title="defaultRadioGroup.title"
        :items-list="defaultRadioGroup.itemsList"
        :value="defaultRadioGroup.value"
        disabled
        :additional-classes="defaultRadioGroup.additionalClasses"
      />
      <vb-radio-group
        id="radios3"
        :title="defaultRadioGroup.title"
        :items-list="defaultRadioGroup.itemsList"
        :value="defaultRadioGroup.value"
        :required="defaultRadioGroup.required"
        :disabled="defaultRadioGroup.disabled"
        :additional-classes="defaultRadioGroup.additionalClasses"
        button-mode
      />
      <h3>Структура данных для компонента</h3>
      <pre>{{ defaultRadioGroup }}</pre>
      <h3>Действия компонента</h3>
      <div>
        При изменении значения радио-кнопки вызывает событие @change с новым
        строчным выбранным значением
      </div>
      <vb-radio-group
        :id="defaultRadioGroup.id"
        :title="defaultRadioGroup.title"
        :items-list="defaultRadioGroup.itemsList"
        :value="defaultRadioGroup.value"
        :required="defaultRadioGroup.required"
        :disabled="defaultRadioGroup.disabled"
        :additional-classes="defaultRadioGroup.additionalClasses"
        @change="defaultRadioGroup.value = $event"
      />
      <div>
        Возвращаемое значение: {{ defaultRadioGroup.value }} (тип -
        {{ typeof defaultRadioGroup.value }} )
      </div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbRadioGroup from "../components/Bootstrap_4.6.2/Form_components/BS46RadioGroup";
export default {
  name: "RadioGroupView",
  components: { VbRadioGroup, VbAlert },
  data() {
    return {
      defaultRadioGroup: {
        id: "serviceType",
        title: "Меры поддержки:",
        type: "radioGroup",
        itemsList: [
          { id: "1", value: "1", label: "Пособие" },
          { id: "2", value: "2", label: "Субсидия" },
          { id: "3", value: "3", label: "Стипендия" },
          { id: "4", value: "4", label: "Грант", disabled: true },
          {
            id: "5",
            value: "5",
            label: "Материальная помощь",
          },
        ],
        required: false,
        disabled: false,
        additionalClasses: {
          group: "col-6",
          label: "",
          field: "",
        },
        value: "3",
      },
    };
  },
  methods: {},
};
</script>
