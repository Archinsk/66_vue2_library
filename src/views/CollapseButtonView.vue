<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2CollapseButton</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46CollapseButton</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает исправно. Используется в проектах 40,61,62,64,71,72. Проекты
        61 и 64 имеют устаревшую версию без отслеживания события "click"
        Используется в паре с BS46Collapse. Эти два компонента не объединены в
        один по причине необходимости размещения кнопки отдельно от панели.
      </vb-alert>
      <h3>Описание</h3>
      <div>
        Назначение: активация показа и скрытия дополнительной информации,
        подразделов, отображения детальной информации
      </div>
      <div>
        Принимает проп target-id для связи кнопки с панелью. В остальном
        является оберткой компонента BS46Button и передает ему соответствующие
        пропы (без badge и additional-classes) Добавлен дополнительный класс
        "btn-collapse"
      </div>
      <div>
        Используется в Компонентах
        <ul>
          <li>BS46Accordeon</li>
          <li>BS46NavBarToggler</li>
          <li>BS46Filter</li>
          <li>BS46ItemsList</li>
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
      <vb-collapse-button target-id="notificationCollapse" class="btn-primary">
        Детали
      </vb-collapse-button>
      <vb-collapse id="notificationCollapse">
        Содержимое с детальной информацией
      </vb-collapse>
      <h3>Действия компонента</h3>
      <div>Возвращает событие @click.</div>
    </div>
  </div>
</template>

<script>
import VbCollapseButton from "../components/Bootstrap_4.6.2/BS46CollapseButton";
import VbCollapse from "../components/Bootstrap_4.6.2/BS46Collapse";
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "CollapseButtonView",
  components: { VbAlert, VbCollapse, VbCollapseButton },
};
</script>
