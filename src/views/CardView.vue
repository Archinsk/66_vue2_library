<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2CollapseButton</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46CollapseButton</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает исправно. Используется в проектах 40,61,62,71,72. В проекте 61
        используется старая верися без нескольких пропсов. Во всех проектах есть
        лишний проп "card-data". В проекте 62 на базе этого компонента сделано
        несколько разных версий других компонентов. Два слота для изображения
        превращены в один. Во всех проектах карточка с двумя слотами для
        изображения. Требуется доработка для карточки с картинкой на весь фон
        карточки</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: оформление информации в виде карточки с возможным хедером и
        футером, в том числе для использовния в группах
      </div>
      <div>
        Принимает флаги наличия трех частей: хедера, тела и футера. Имеет проп
        "image-position" для указания местоположения изображения. По умолчанию
        есть только тело. Имеет три слота для празмещения информации в разных
        частях карточки: "card-header", "card-body" и "card-footer". Также имеет
        2 слота для размещения изображения в зависимости от позиции:
        "card-image-top" и "card-image-bottom"
      </div>
      <pre>
props: {
  // части карточки
  header: Boolean,
  noBody: Boolean,
  footer: Boolean,
  // Положение изображения
  imagePosition: String,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <vb-card header footer>
        <template v-slot:card-header>Хедер карточки</template>
        <template v-slot:card-body>Тело карточки</template>
        <template v-slot:card-footer>Футер карточки</template>
      </vb-card>
      <vb-card image-position="top">
        <template v-slot:card-image><img src="images/default.jpg" /></template>
        <template v-slot:card-body>Тело карточки</template>
      </vb-card>
      <vb-card image-position="bottom">
        <template v-slot:card-image><img src="images/default.jpg" /></template>
        <template v-slot:card-body>Тело карточки</template>
      </vb-card>
      <vb-card no-body image-position="full">
        <template v-slot:card-image
          ><img src="images/default.jpg" class="card-img"
        /></template>
        <div class="card-text">Текст поверх карточки</div>
      </vb-card>
      <h3>Действия компонента</h3>
      <div>Действия отсутствуют</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbCard from "../components/Bootstrap_4.6.2/BS46Card";
export default {
  name: "CardView",
  components: { VbCard, VbAlert },
  data() {
    return {};
  },
  methods: {},
};
</script>
