<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2ModalButton</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46ModalButton</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: активация показа модального окна</div>
      <div>
        Принимает один обязательный проп "target-id" для связи с модальным
        окном. Кнопка не имеет класса с обозначением цветовой темы, добавлен
        дополнительный класс "btn-modal"
      </div>
      <pre>
props: {
  targetId: String,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <vb-modal-button target-id="exampleModal" class="btn-primary"
        >Открыть модальное окно</vb-modal-button
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
