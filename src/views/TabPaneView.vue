<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2TabPane</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46TabPane</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: отображение контента на таб-вкладке</div>
      <div>
        Принимает идентификатор (требуется для активации панели) и флаг
        активности
      </div>
      <pre>
props: {
  id: String,
  active: Boolean,
},</pre
      >
      <h3>Варианты использования</h3>
      <div>См. <router-link to="/navtabs">NavTabs</router-link></div>
      <h3>Действия компонента</h3>
      <div>Требуется доработка</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "TabPaneView",
  components: { VbAlert },
  data() {
    return {};
  },
  methods: {},
};
</script>
