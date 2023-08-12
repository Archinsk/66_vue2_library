<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2Preloader</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46Preloader</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает исправно. Используется в проектах 61, 62, 71. В проектах
        используется устаревший компонент с другим именем</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: отображение состояния загрузки</div>
      <div>
        Принимает текстовый комментарий, цветовую тему(цвета тем bootstrap),
        цвет текстового комментария (цвета тем bootstrap, если не указан,
        принимает цвет из свойства theme), тип(border или glow), размер
        (принимается только sm). По умолчанию контейнер прелоадера занимает всю
        ширину и всю высоту родительского элемента и центрирует по центру
        лоадер. Может затемнять фон (проп backdrop-colored устанавливает фону
        контейнера цвет rgba(0, 0, 0, 0.5) - полупрозрачный черный). Может быть
        размещен поверх контента (проп absolute), для этого требуется, чтобы
        родитель был позиционирован нестатично(например, relative). Контент под
        абсолютно позиционированным прелоадером может быть размыт с помощью
        пропа backdrop-blurred
      </div>
      <pre>
props: {
  comment: String,
  theme: String,
  commentColor: String,
  type: String,
  size: String,
  absolute: Boolean,
  backdropColored: Boolean,
  backdropBlurred: Boolean,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <vb-preloader />
      <vb-preloader theme="primary" />
      <vb-preloader theme="danger" backdrop-colored />
      <vb-preloader type="grow" />
      <vb-preloader comment="Загрузка приложения" />
      <vb-preloader
        comment="Загрузка приложения"
        theme="info"
        comment-color="danger"
      />
      <vb-preloader size="sm" />
      <div style="width: 500px; height: 200px; background-color: aquamarine">
        <vb-preloader comment="Загрузка..." theme="primary" />
      </div>
      <div
        class="p-3 position-relative"
        style="width: 500px; height: 200px; background-color: aqua"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          facilis nisi nulla? Adipisci amet consequuntur dolores officiis optio
          sint sit!
        </p>
        <vb-preloader comment="Загрузка..." theme="primary" absolute />
      </div>
      <div
        class="p-3 position-relative"
        style="width: 500px; height: 200px; background-color: aquamarine"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          facilis nisi nulla? Adipisci amet consequuntur dolores officiis optio
          sint sit!
        </p>
        <vb-preloader
          comment="Загрузка..."
          theme="primary"
          absolute
          backdrop-colored
        />
      </div>
      <div
        class="p-3 position-relative"
        style="width: 500px; height: 200px; background-color: aqua"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          facilis nisi nulla? Adipisci amet consequuntur dolores officiis optio
          sint sit!
        </p>
        <vb-preloader
          comment="Загрузка..."
          theme="dark"
          absolute
          backdrop-blurred
        />
      </div>
      <div
        class="p-3 position-relative"
        style="width: 500px; height: 200px; background-color: aquamarine"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
          veniam?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          facilis nisi nulla? Adipisci amet consequuntur dolores officiis optio
          sint sit!
        </p>
        <vb-preloader
          comment="Загрузка..."
          theme="light"
          absolute
          backdrop-colored
          backdrop-blurred
        />
      </div>
      <h3>Действия компонента</h3>
      <div>Действия отсутствуют</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/BS46Alert";
import VbPreloader from "../components/BS46Preoader";
export default {
  name: "PreloaderView",
  components: { VbPreloader, VbAlert },
  data() {
    return {};
  },
  methods: {},
};
</script>
