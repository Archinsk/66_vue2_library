<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2Collapse</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46Collapse</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает исправно. Используется в проектах 40,61,62,64,71,72. Проекты
        61 и 64 имеют устаревшую версию без возможности использования в
        "аккордеоне" Используется в паре с BS46CollapseButton. Эти два
        компонента не объединены в один по причине необходимости размещения
        кнопки отдельно от панели. Совокупность пар этах компонентов может быть
        превращена в аккордеон (реализовано в проектах 40 и 62). Требуется
        подключение скриптов bootstrap. Во всех проектах пропсы указаны без
        типизации
      </vb-alert>
      <h3>Описание</h3>
      <div>
        Назначение: показ и скрытие дополнительной информации, подразделы,
        отображение детальной информации
      </div>
      <div>
        Принимает один обязательный проп "id" для связи панели с кнопкой,
        которая управляет её открытием. Проп "parent-id" необходим при
        использовании нескольких пар кнопок и панелей в составе аккордеона.
      </div>
      <pre>
props: {
  id: String,
  parentId: String,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <vb-collapse-button target-id="notificationCollapse" class="btn-primary">
        Детали
      </vb-collapse-button>
      <vb-collapse id="notificationCollapse">
        Содержимое с детальной информацией
      </vb-collapse>
      <h3>Действия компонента</h3>
      <div>Действия отсутствуют</div>
    </div>
  </div>
</template>

<script>
import VbCollapseButton from "../components/Bootstrap_4.6.2/BS46CollapseButton";
import VbCollapse from "../components/Bootstrap_4.6.2/BS46Collapse";
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "CollapseView",
  components: { VbAlert, VbCollapse, VbCollapseButton },
};
</script>
