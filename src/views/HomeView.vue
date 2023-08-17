<template>
  <div>
    <div class="home">Стартовая страница</div>
    <div>
      Цель проекта - создание переиспользкемой библиотеки компонентов для
      ускорения создания проектов. В качестве точки отсчета принят фреймворк
      bootstrap. Планируется достижение гибкости за счет использования других
      фреймфорков переключением пропса framework. Желательно создание
      npm-пакета. Легкость конечного продукта должна быть достигнута за счет
      инкапсуляции стилей и скриптов внутри компонентов
    </div>
    <vb-alert theme-color="danger">
      bootstrap 4.6.2 может ругаться на отсутствие "jquery": "3.5.1" и
      "popper.js": "^1.16.1". Помогают команды "npm install jquery@3.5.1" и "npm
      install popper.js@1.16.1"
    </vb-alert>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
export default {
  name: "HomeView",
  components: { VbAlert },
};
</script>
