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
        подключение скриптов bootstrap.
      </vb-alert>
      <h3>Описание</h3>
      <div>
        Назначение: показ и скрытие дополнительной информации, подразделы,
        отображение детальной информации
      </div>
      <div>
        Принимает только один проп "themeColor", добавляя соответствующий класс
        элементу. Если цвет введен не верно или проп не передан - принимает
        серый цвет. Содержимое пробрасывается через slot. По умолчанию
        bootstrap'ом добавлен нижний отступ 1rem
      </div>
      <h3>Варианты использования</h3>
      <vb-collapse-button target-id="notificationCollapse">
        Детали
      </vb-collapse-button>
      <vb-collapse id="notificationCollapse">
        Содержимое с детальной информацией
      </vb-collapse>
      <h3>Типовое представление</h3>
      <h3>Действия компонента</h3>
      <pre>
props: {
  // подзаголовок
  поле: тип,
},
        </pre
      >
    </div>
  </div>
</template>

<script>
import VbCollapseButton from "../components/BS46CollapseButton";
import VbCollapse from "../components/BS46Collapse";
export default {
  name: "CollapseView",
  components: { VbCollapse, VbCollapseButton },
  data() {
    return {};
  },
  methods: {},
};
</script>
