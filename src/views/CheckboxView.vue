<template>
  <div>
    <h2>Классический чекбокс</h2>
    <h2>Кастомизированный компонент Vue2Checkbox</h2>
    <h2>Кастомизированный Bootstrap компонент BS46Checkbox</h2>
    <h3>Варианты использования</h3>
    <div>Без пропсов</div>
    <vb-checkbox />
    <div>С ярлыком</div>
    <vb-checkbox label="Ознакомлен с материалами" id="agreement" />
    <div>Обязательное поле (использовать с ярлыком и id)</div>
    <vb-checkbox label="Ознакомлен с материалами" required />
    <div>Отключено</div>
    <vb-checkbox label="Ознакомлен с материалами" disabled />
    <h3>Действия компонента</h3>
  </div>
</template>

<script>
import VbCheckbox from "../components/BS46Checkbox";
export default {
  name: "CheckboxView",
  components: { VbCheckbox },
};
</script>
