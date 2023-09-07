<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2TabContent</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46TabContent</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: обертка для размещения таб-панелей</div>
      <div>
        Не имеет пропов. Пробрасывает содержимое в слот. На обертку добавляется
        класс "tab-content", который участвует в стилизации вложенных элементов
      </div>
      <h3>Варианты использования</h3>
      <div>См. <router-link to="/navtabs">NavTabs</router-link></div>
      <h3>Действия компонента</h3>
      <div>Действия отсутствуют</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "TabContentView",
  components: { VbAlert },
  data() {
    return {};
  },
};
</script>
