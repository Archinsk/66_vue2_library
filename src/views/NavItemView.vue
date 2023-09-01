<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2NavItem</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46NavItem</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает ... Используется в проектах ...</vb-alert
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
  name: "NavItemView",
  components: { VbAlert },
  data() {
    return {};
  },
  methods: {},
};
</script>
