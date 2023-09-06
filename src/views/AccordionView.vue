<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2Accordion</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46Accordion</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>
        Назначение: группировка коллапсов, при этом открыт может быть только
        один
      </div>
      <div>
        Принимает единственный проп id, этот же id должен быть передан через
        проп parent-id вложенным коллапсам. Является оберткой, пробрасывает
        содержимое в дефолтный слот. Открытие одного коллапса закрывает ранее
        открытый. Используемым внутри аккордиона карточкам Bootstrap'ом
        добавляются стили, чтобы аккордион выглядел как список
      </div>
      <pre>
props: {
  id: String,
},</pre
      >
      <h3>Варианты использования</h3>
      <div>Использование без карточек</div>
      <vb-accordion id="accordion-01">
        <div>
          <vb-collapse-button target-id="collapse-01" class="btn-primary"
            >Запись 1</vb-collapse-button
          >
          <vb-collapse id="collapse-01" parent-id="accordion-01"
            >Контент 1</vb-collapse
          >
        </div>
        <div>
          <vb-collapse-button target-id="collapse-02" class="btn-primary"
            >Запись 2</vb-collapse-button
          >
          <vb-collapse id="collapse-02" parent-id="accordion-01"
            >Контент 2</vb-collapse
          >
        </div>
        <div>
          <vb-collapse-button target-id="collapse-03" class="btn-primary"
            >Запись 3</vb-collapse-button
          >
          <vb-collapse id="collapse-03" parent-id="accordion-01"
            >Контент 3</vb-collapse
          >
        </div>
      </vb-accordion>
      <div>Использование с карточками</div>
      <vb-accordion id="accordion-02">
        <vb-card header>
          <template v-slot:card-header
            ><vb-collapse-button target-id="collapse-04"
              >Запись 1</vb-collapse-button
            ></template
          >
          <template v-slot:card-body>
            <vb-collapse id="collapse-04" parent-id="accordion-02"
              >Контент 1</vb-collapse
            >
          </template>
        </vb-card>
        <vb-card header>
          <template v-slot:card-header>
            <vb-collapse-button target-id="collapse-05"
              >Запись 2</vb-collapse-button
            >
          </template>
          <template v-slot:card-body>
            <vb-collapse id="collapse-05" parent-id="accordion-02"
              >Контент 2</vb-collapse
            >
          </template>
        </vb-card>
        <vb-card header>
          <template v-slot:card-header>
            <vb-collapse-button target-id="collapse-06"
              >Запись 3</vb-collapse-button
            >
          </template>
          <template v-slot:card-body>
            <vb-collapse id="collapse-06" parent-id="accordion-02"
              >Контент 3</vb-collapse
            >
          </template>
        </vb-card>
      </vb-accordion>
      <h3>Действия компонента</h3>
      <div>Действия отсутствуют</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbCollapse from "../components/Bootstrap_4.6.2/BS46Collapse";
import VbCollapseButton from "../components/Bootstrap_4.6.2/BS46CollapseButton";
import VbCard from "../components/Bootstrap_4.6.2/BS46Card";
import VbAccordion from "../components/Bootstrap_4.6.2/BS46Accordion";
export default {
  name: "TempView",
  components: { VbAccordion, VbCard, VbCollapseButton, VbCollapse, VbAlert },
  data() {
    return {};
  },
  methods: {},
};
</script>
