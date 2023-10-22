<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2OffcanvasButton</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46OffcanvasButton</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: Раскрывает панель компонента Offcanvas. Является точной
        копией компонента ModalButton, за исключением изменения класса кнопки на
        .btn-offcanvas. См.
        <router-link to="/modalbutton">ModalButton</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "VbOffcanvasButtonView",
  components: { VbAlert },
  data() {
    return {};
  },
  methods: {},
};
</script>
