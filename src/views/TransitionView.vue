<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2Transition</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает ... Используется в проектах ...</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: ...</div>
      <div>Принимает...</div>
      <pre>
props: {
  // подзаголовок
  поле: тип,
},
        </pre
      >
      <h3>Варианты использования</h3>
      <button class="btn btn-primary" @click="showElem = !showElem">
        Переключить
      </button>
      <div style="width: 5rem; height: 5rem; background-color: blue"></div>
      <v2-transition name="zoom">
        <div
          v-if="showElem"
          style="width: 5rem; height: 5rem; background-color: red"
          class="mt-3"
        ></div>
      </v2-transition>
      <div
        style="width: 5rem; height: 5rem; background-color: blue"
        class="mt-3"
      ></div>

      <h3>Действия компонента</h3>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import V2Transition from "../components/Vue2Transition";
export default {
  name: "TransitionView",
  components: { V2Transition, VbAlert },
  data() {
    return {
      showElem: true,
    };
  },
  methods: {},
};
</script>
