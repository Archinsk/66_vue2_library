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
      <div>Назначение: Раскрывает боковую панель компонента Offcanvas.</div>
      <div>
        Принимает проп target-id для связи кнопки с панелью. В остальном
        является оберткой компонента BS46Button и передает ему соответствующие
        пропы (без badge и additional-classes) Добавлен дополнительный класс
        "btn-offcanvas"
      </div>
      <div>
        Используется в компонентах:
        <ul>
          <li>BS46Header</li>
        </ul>
      </div>
      <pre>
props: {
  targetId: String,
  theme: String,
  size: String,
  block: Boolean,
  square: Boolean,
  icon: [Object, String],
},</pre
      >
      <h3>Варианты использования</h3>
      <vb-offcanvas-button target-id="offcanvas-button-01" class="btn-primary">
        OffcanvasButton
      </vb-offcanvas-button>
      <vb-offcanvas id="offcanvas-button-01" theme="warning" header footer>
        <template v-slot:offcanvas-header>Заголовок</template>
        Содержимое Offcanvas
        <template v-slot:offcanvas-footer>Футер</template>
      </vb-offcanvas>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbOffcanvasButton from "../components/Bootstrap_4.6.2/BS46OffcanvasButton";
import VbOffcanvas from "../components/Bootstrap_4.6.2/BS46Offcanvas";
export default {
  name: "VbOffcanvasButtonView",
  components: { VbOffcanvas, VbOffcanvasButton, VbAlert },
};
</script>
