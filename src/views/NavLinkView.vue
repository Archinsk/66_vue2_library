<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2NavLink</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46NavLink</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: ссылка элемента навигации</div>
      <div>
        Принимает тип ссылки (a, modal-link, router-link ), адрес ссылки, флаги
        активности и отключенности. Тип "router-link" используется по умолчанию,
        без передачи пропа type. Тип "modal-link" делает пункт кнопкой
        открывающей модальное окно, id окна передается в пропе "href"
        (используется компонент BS46ModalButton). Активность добавляет класс
        active, который нужно стилизовать самостоятельно. Содержимое
        пробрасывается в слот
      </div>
      <pre>
props: {
  type: String,
  href: String,
  active: Boolean,
  disabled: Boolean,
},</pre
      >
      <h3>Варианты использования</h3>
      <div>Обычная ссылка</div>
      <vb-nav-link type="a" href="https://ya.ru">Яндекс</vb-nav-link>
      <div>Ссылка-роутер</div>
      <vb-nav-link href="/nav">Страница Nav</vb-nav-link>
      <div>Отключенная</div>
      <vb-nav-link href="/nav" disabled>Отключенная</vb-nav-link>
      <h3>Действия компонента</h3>
      <div>При выборе пункта вызывается событие @click без параметров</div>
      <vb-nav-link type="a" href="#" @click="returnedEvent = 'click'"
        >Пустая ссылка</vb-nav-link
      >
      <div>Сработавшее событие: {{ returnedEvent }}</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbNavLink from "../components/Bootstrap_4.6.2/BS46NavLink";
export default {
  name: "NavLinkView",
  components: { VbNavLink, VbAlert },
  data() {
    return {
      returnedEvent: null,
    };
  },
};
</script>
