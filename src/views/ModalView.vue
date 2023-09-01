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
        тела, альтернативный размер окна (sm, lg, xl), флаги вертикального
        центрирования, прокручиваемости, флаги отсутствия дефолтного заголовка
        хедера и отсутствия кнопки закрытия в хедере, флаг отсутствия
        клавиатурного закрытия окна (по клавише Esc), флаг статичного фона
        (отключается закрытие кликом по фону и клавиатурное закрытие). Имеет три
        слота: для хедера, тела (по умолчанию), для футера. Компоненту требуется
        jquery@3.5.1. Bootstrap рекомендует располагать модальные окна наверху
        страницы. Bootstrap выравнивает содержимое хедера по левому краю, а
        футера - по правому
      </div>
      <pre>
props: {
  id: String,
  header: Boolean,
  noBody: Boolean,
  footer: Boolean,
  size: String,
  verticalCenter: Boolean,
  scrollable: Boolean,
  noTitle: Boolean,
  noCloseButton: Boolean,
  noBackdrop: Boolean,
  noKeyboard: Boolean,
  staticBackdrop: Boolean,
},</pre
      >
      <h3>Варианты использования</h3>
      <vb-modal-button target-id="modal01" class="btn-primary mr-3 mb-3"
        >Без пропов</vb-modal-button
      >
      <vb-modal id="modal01">Содержимое модального окна</vb-modal>
      <vb-modal-button target-id="modal02" class="btn-primary mr-3 mb-3">
        С хедером и футером</vb-modal-button
      >
      <vb-modal id="modal02" header footer>
        <template v-slot:modal-header>Заголовок</template>
        Содержимое модального окна
        <template v-slot:modal-footer>Футер</template>
      </vb-modal>
      <vb-modal-button target-id="modal03" class="btn-primary mr-3 mb-3">
        Маленькое</vb-modal-button
      >
      <vb-modal id="modal03" header size="sm">
        <template v-slot:modal-header>Маленькое окно</template>Содержимое
        модального окна</vb-modal
      >
      <vb-modal-button target-id="modal04" class="btn-primary mr-3 mb-3"
        >Центрированное вертикально</vb-modal-button
      >
      <vb-modal id="modal04" vertical-center
        >Содержимое модального окна</vb-modal
      >
      <vb-modal-button target-id="modal05" class="btn-primary mr-3 mb-3">
        Прокручиваемое</vb-modal-button
      >
      <vb-modal id="modal05" header size="sm" scrollable>
        <template v-slot:modal-header>Прокручиваемое окно</template>Lorem ipsum
        dolor sit amet, consectetur adipisicing elit. Aperiam, beatae ducimus
        eaque eligendi harum ipsum maiores quasi quod quos reprehenderit. Autem
        blanditiis corporis dicta dignissimos, eius expedita hic id ipsa natus
        nihil nulla odit, pariatur porro quia quibusdam rerum velit! Ab cum
        magni numquam! Asperiores aut dicta error ex facilis, ipsum minima nihil
        provident quo sequi! A alias aliquam animi asperiores aspernatur at
        atque cumque debitis deleniti dolore dolores dolorum eius est ex fugit
        illo iste iusto labore magnam, molestias necessitatibus, nesciunt, odio
        omnis possimus quaerat quia ratione rem reprehenderit sit totam vel
        veritatis vero voluptates? Alias at doloremque iste laborum, neque nobis
        possimus? A ab aperiam aut debitis dicta eos error et hic illum, labore
        omnis perspiciatis quae qui, sed sint sunt unde. Debitis dolore ducimus
        iste, minus nemo nobis officiis repellendus similique. Accusamus amet,
        aperiam aspernatur at atque culpa dolorem eius, eos eum fugiat ipsum
        iste itaque laborum nisi quas ratione tempore unde ut vero vitae. Cumque
        excepturi iusto nihil odio omnis provident reiciendis? Aliquam corporis
        eaque eveniet facere porro, quaerat repellendus sit veniam voluptas
        voluptate. Debitis doloribus impedit laboriosam praesentium veniam?
        Accusamus consectetur earum fugiat in ipsa magnam, maxime nemo quam rem
        sed sit tempora ut voluptatem! Minima mollitia quam suscipit? Ad debitis
        deleniti eos est explicabo fugiat ipsa iure nemo placeat, totam. A
        accusamus beatae consequuntur deserunt dicta dolore, dolorem ea eum
        excepturi expedita facere fugit ipsam iure laborum, minus neque nisi
        obcaecati officiis omnis pariatur quam quisquam tempora tempore
        veritatis vero vitae voluptatibus! Dolores, porro.</vb-modal
      >
      <vb-modal-button target-id="modal06" class="btn-primary mr-3 mb-3">
        Без дефолтного заголовка</vb-modal-button
      >
      <vb-modal id="modal06" header no-title>
        <template v-slot:modal-header
          ><i>Кастомные <b>теги</b> заголовка</i></template
        >Содержимое модального окна</vb-modal
      >
      <vb-modal-button target-id="modal07" class="btn-primary mr-3 mb-3">
        Без кнопки закрытия</vb-modal-button
      >
      <vb-modal id="modal07" header no-close-button>
        <template v-slot:modal-header>Нет кнопки --></template>Содержимое
        модального окна</vb-modal
      >
      <vb-modal-button target-id="modal08" class="btn-primary mr-3 mb-3">
        Без фона</vb-modal-button
      >
      <vb-modal id="modal08" header no-backdrop>
        <template v-slot:modal-header>Фон отсутствует</template>Содержимое
        модального окна</vb-modal
      >
      <vb-modal-button target-id="modal09" class="btn-primary mr-3 mb-3">
        Без клавиатурного закрытия</vb-modal-button
      >
      <vb-modal id="modal09" header no-keyboard>
        <template v-slot:modal-header>Без клавиатурного закрытия</template>Нажми
        "Esc"</vb-modal
      >
      <vb-modal-button target-id="modal10" class="btn-primary mr-3 mb-3">
        Не кликабельный фон</vb-modal-button
      >
      <vb-modal id="modal10" header static-backdrop>
        <template v-slot:modal-header>Не кликабельный фон</template>Клавиатурное
        закрытие (Esc) тоже выключено</vb-modal
      >
      <h3>Действия компонента</h3>
      <div>
        При открытии вызываются события @show-modal (начало открытия) и
        @shown-modal (окончание открытия, завершение анимации), при закрытии
        вызываются события @hide-modal (начало закрытия) и @hidden-modal
        (окончание закрытия, завершение анимации)
      </div>
      <vb-modal-button target-id="modal11" class="btn-primary mr-3">
        Без фона</vb-modal-button
      >
      <vb-modal
        id="modal11"
        header
        no-backdrop
        @show-modal="returnedEvent = '@show-modal'"
        @shown-modal="returnedEvent = '@shown-modal'"
        @hide-modal="returnedEvent = '@hide-modal'"
        @hidden-modal="returnedEvent = '@hidden-modal'"
      >
        <template v-slot:modal-header>Фон отсутствует</template>Содержимое
        модального окна</vb-modal
      >
      <div>Сработавшее событие: {{ returnedEvent }}</div>
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
    return {
      returnedEvent: null,
    };
  },
  methods: {},
};
</script>
