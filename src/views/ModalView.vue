<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2Modal</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46Modal</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает, в некоторых проектах не отображается темный фон. Используется
        в проектах 61, 62, 64. В проектах используется старая версия, пропы
        изменены, добавлены события</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: Показ контента в окне поверх остального содержимого страницы
      </div>
      <div>
        Принимает идентификатор, флаги наличия хедера и футера, флаг отсутствия
        тела, флаги прокручиваемости, вертикального центрирования, размер окна
        (sm, lg, xl), флаг статичного фона. Имеет три слота: для хедера, тела
        (по умолчанию), для футера. Компоненту требуется jquery@3.5.1. Bootstrap
        рекомендует располагать модальные окна наверху страницы. Bootstrap
        выравнивает содержимое хедера по левому краю, а футера - по правому
      </div>
      <pre>
props: {
  id: String,
  header: Boolean,
  noBody: Boolean,
  footer: Boolean,
  scrollable: Boolean,
  verticalCenter: Boolean,
  size: String,
  staticBackdrop: Boolean,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <vb-modal-button target-id="modal01" class="btn-primary"
        >Без пропов</vb-modal-button
      >
      <vb-modal id="modal01">Содержимое модального окна</vb-modal>
      <vb-modal-button target-id="modal02" class="btn-primary ml-3">
        С хедером и футером</vb-modal-button
      >
      <vb-modal id="modal02" header footer>
        <template v-slot:modal-header>Заголовок</template>
        Содержимое модального окна
        <template v-slot:modal-footer>Футер</template>
      </vb-modal>
      <vb-modal-button target-id="modal03" class="btn-primary ml-3"
        >Центрированное вертикально</vb-modal-button
      >
      <vb-modal id="modal03" vertical-center
        >Содержимое модального окна</vb-modal
      >
      <h3>Действия компонента</h3>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbModalButton from "../components/Bootstrap_4.6.2/BS46ModalButton";
import VbModal from "../components/Bootstrap_4.6.2/BS46Modal";
export default {
  name: "ModalView",
  components: { VbModal, VbModalButton, VbAlert },
  data() {
    return {};
  },
  methods: {},
};
</script>
