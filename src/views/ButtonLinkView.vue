<template>
  <div class="about">
    <h2>Кастомизированный Bootstrap компонент BS46ButtonLink</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: расширение стандартной Bootstrap-кнопки, упрощение
        синтаксиса
      </div>
      <div>
        Является копией компонента BS46Button, за исключением того, что имеет
        флаг отсутствия класса "btn" (для использования в пунктах навигации) и
        выводится тегом "a"
      </div>
      <div>
        Используется в компоненте
        <ul>
          <li>BS46ModalButton</li>
        </ul>
      </div>
      <pre>
props: {
  type: String,
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
      См. <router-link to="/button">BS46Button</router-link>
      <h3>Действия компонента</h3>
      <div>Возвращает событие @click</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "ButtonLinkView",
  components: { VbAlert },
};
</script>
