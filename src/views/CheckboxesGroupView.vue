<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2CheckboxesGroup</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46CheckboxesGroup</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Новый компонент. Ранее в проектах не использовался.</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: группа чекбоксов для однотипных сущностей, например, для
        использования в фильтрах
      </div>
      <div>
        Принимает идентификатор, заголовок группы, массив объектов с параметрами
        дочерних чекбоксов, массив идентификаторов чекбоксов со значением true,
        объект дополнительных классов , флаги обязательности, отключенности,
        режима переключателя. Если флаги принимают значение true, то значения
        тех же флагов у отдельных чекбоксов не учитываются, ко всем чекбоксам
        применяются отмеченные режимы
      </div>
      <pre>
props: {
  id: String,
  title: String,
  itemsList: Array,
  values: Array,
  required: Boolean,
  disabled: Boolean,
  additionalClasses: Object,
  switchMode: Boolean,
},</pre
      >
      <h3>Варианты использования</h3>
      <vb-checkboxes-group
        :id="defaultCheckBoxesGroup.id"
        :title="defaultCheckBoxesGroup.title"
        :items-list="defaultCheckBoxesGroup.itemsList"
        :values="defaultCheckBoxesGroup.values"
        :required="defaultCheckBoxesGroup.required"
        :disabled="defaultCheckBoxesGroup.disabled"
        :additional-classes="defaultCheckBoxesGroup.additionalClasses"
        :switch-mode="defaultCheckBoxesGroup.switchMode"
        @change="defaultCheckBoxesGroup.values = $event"
      />
      <vb-checkboxes-group
        :id="defaultCheckBoxesGroup.id"
        :title="defaultCheckBoxesGroup.title"
        :items-list="defaultCheckBoxesGroup.itemsList"
        :values="defaultCheckBoxesGroup.values"
        :width-group="defaultCheckBoxesGroup.widthGroup"
        required
        disabled
        switch-mode
      />
      <h3>Структура данных для компонента</h3>
      <pre>{{ defaultCheckBoxesGroup }}</pre>
      <h3>Действия компонента</h3>
      <div>
        При изменении значения дочернего чекбокса вызывает событие @change с
        массивом строк идентификаторов выбранных чекбоксов
      </div>
      <vb-checkboxes-group
        :id="defaultCheckBoxesGroup.id"
        :title="defaultCheckBoxesGroup.title"
        :items-list="defaultCheckBoxesGroup.itemsList"
        :values="defaultCheckBoxesGroup.values"
        :required="defaultCheckBoxesGroup.required"
        :disabled="defaultCheckBoxesGroup.disabled"
        :additional-classes="defaultCheckBoxesGroup.additionalClasses"
        :switch-mode="defaultCheckBoxesGroup.switchMode"
        @change="defaultCheckBoxesGroup.values = $event"
      />
      <div>
        Возвращаемое значение: {{ defaultCheckBoxesGroup.values }} (тип -
        {{ typeof defaultCheckBoxesGroup.values }}, тип значения в массиве -
        {{ typeof defaultCheckBoxesGroup.values[0] }} )
      </div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbCheckboxesGroup from "../components/Bootstrap_4.6.2/Form_components/BS46CheckboxesGroup";
export default {
  name: "CheckboxesGroupView",
  components: { VbCheckboxesGroup, VbAlert },
  data() {
    return {
      defaultCheckBoxesGroup: {
        id: "serviceType",
        title: "Мера поддержки",
        type: "checkboxGroup",
        itemsList: [
          { id: "field-1", label: "Пособие" },
          { id: "field-2", label: "Субсидия", required: true },
          { id: "field-3", label: "Стипендия" },
          { id: "field-4", label: "Грант", disabled: true },
          {
            id: "field-5",
            label: "Материальная помощь",
            switchMode: true,
          },
        ],
        required: false,
        disabled: false,
        additionalClasses: {
          group: "col-6",
          label: "",
          field: "",
        },
        switchMode: false,
        values: ["field-3"],
      },
    };
  },
  methods: {},
};
</script>
