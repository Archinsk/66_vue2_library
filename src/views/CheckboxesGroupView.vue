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
      <div>Принимает... Имеет опциональный заголовок группы</div>
      <pre>
props: {
  // подзаголовок
  поле: тип,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <vb-checkboxes-group />
      <h3>Действия компонента</h3>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/BS46Alert";
import VbCheckboxesGroup from "../components/BS46CheckboxesGroup";
export default {
  name: "CheckboxesGroupView",
  components: { VbCheckboxesGroup, VbAlert },
  data() {
    return {};
  },
  methods: {},
};
</script>
