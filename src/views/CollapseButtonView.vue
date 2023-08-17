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
        Необходимо переделать компонент на использование стандартного компонента
        кнопки с пробросом пропсов (пока не реализован). Во всех проектах пропсы
        используются без типизации</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: активация показа и скрытия дополнительной информации,
        подразделов, отображения детальной информации
      </div>
      <div>
        Принимает один обязательный проп "target-id" для связи кнопки с панелью.
        Кнопка не имеет класса с обозначением цветовой темы, добавлен
        дополнительный класс "btn-collapse"
      </div>
      <pre>
props: {
  targetId: String,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <vb-collapse-button target-id="notificationCollapse">
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
export default {
  name: "CollapseButtonView",
  components: { VbCollapse, VbCollapseButton },
  data() {
    return {};
  },
  methods: {},
};
</script>
