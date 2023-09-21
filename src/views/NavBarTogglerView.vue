<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2NavBarToggler</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46NavBarToggler</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: часть компонента BS46NavBar. На малых экранах отвечает за
        показ и скрытие содержимого навигационной панели
      </div>
      <div>
        Не имеет пропов. Использует BS46CollapseButton, в который передает
        target-id="navbarCollapseContent"
      </div>
      <h3>Варианты использования</h3>
      <div>
        Не отображается вне компонента NavBar. См.
        <router-link to="/navbar">NavBar</router-link>
      </div>
      <h3>Действия компонента</h3>
      <div>Возвращает событие @click без параметров</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "NavBarTogglerView",
  components: { VbAlert },
};
</script>
