<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2Nav</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46Nav</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает исправно. Используется в проектах 61, 62. Компонент обновлен,
        в проектах используется в старом виде</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: ...</div>
      <div>Принимает...</div>
      <pre>
props: {
  // подзаголовок
  поле: тип,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <h3>Действия компонента</h3>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "NavView",
  components: { VbAlert },
  data() {
    return {};
  },
  methods: {},
};
</script>
