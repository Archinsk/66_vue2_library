<template>
  <div class="about">
    <h2>Кастомизированный Bootstrap компонент BS46ModalButton</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: активация показа модального окна</div>
      <div>
        Принимает строчный идентификатор целевого модального окна и строчный тег
        ("a" или "button"). Тег "a" используется в ссылках навигации, тег
        "button" используется по умолчанию, если проп не передан. Имеет флаг
        отсутствия класса "btn" (передается только в BS46ButtonLink для
        использования в ссылках навигационных списков). Остальные пропы
        проксирует далее в BS46Button и BS46ButtonLink. Добавлен дополнительный
        класс "btn-modal"
      </div>
      <pre>
props: {
  targetId: String,
  tag: String,
  theme: String,
  size: String,
  block: Boolean,
  square: Boolean,
  icon: [Object, String],
  badge: Object,
  additionalClasses: String,
  withoutBtnClass: Boolean,
},</pre
      >
      <h3>Варианты использования</h3>
      <vb-modal-button target-id="exampleModal" class="btn-primary"
        >Открыть модальное окно</vb-modal-button
      >
      <vb-modal-button target-id="exampleModal" tag="a" class="btn-primary"
        >Открыть ссылкой</vb-modal-button
      >
      <vb-modal id="exampleModal">Содержимое модального окна</vb-modal>
      <h3>Действия компонента</h3>
      <div>Возвращает событие @click</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbModalButton from "../components/Bootstrap_4.6.2/BS46ModalButton";
import VbModal from "../components/Bootstrap_4.6.2/BS46Modal";
export default {
  name: "ModalButtonView",
  components: { VbModal, VbModalButton, VbAlert },
};
</script>
