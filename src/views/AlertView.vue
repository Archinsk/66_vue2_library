<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2Alert</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46Alert</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает исправно. Кастомизация может быть расширена. В проектах
        40,62,72 используется другое имя пропа и убран нижний отступ</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: уведомления (в том числе об ошибках), объявления</div>
      <div>
        Принимает только один проп "themeColor", добавляя соответствующий класс
        элементу. Если цвет введен не верно или проп не передан - принимает
        серый цвет. Содержимое пробрасывается через slot. По умолчанию
        bootstrap'ом добавлен нижний отступ 1rem
      </div>
      <pre>
props: {
  themeColor: String,
},</pre
      >
      <h3>Варианты использования</h3>
      <vb-alert>Alert без пропсов</vb-alert>
      <vb-alert theme-color="danger">Alert c theme-color="danger"</vb-alert>
      <h3>Действия компонента</h3>
      <div>Действия отсутствуют</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "AlertView",
  components: { VbAlert },
};
</script>
