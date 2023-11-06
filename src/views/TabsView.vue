<template>
  <div class="about">
    <h2>Кастомизированный Bootstrap компонент BS46Tabs</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: переключение контента в виде вкладок</div>
      <div>
        Высокоуровневый компонент. Принимает те же свойства, что и BS46NavTabs и
        пробрасывает далее в этот компонент. В дополнение содержит слоты для
        контента вкладок и связывает кнопки и вкладки. Контент пробрасывается в
        лот с именем, соответствующим идентификатору вкладки
      </div>
      <pre>
props: {
  id: String,
  pills: Boolean,
  position: String,
  vertical: Boolean,
  fill: Boolean,
  justified: Boolean,
  itemsList: Array,
},</pre
      >
      <h3>Варианты использования</h3>
      <div>Табы</div>
      <vb-tabs id="tabs-01" :items-list="defaultTabs.itemsList">
        <template v-slot:tab-pane-01>Контент первой вкладки</template>
        <template v-slot:tab-pane-02>Контент второй вкладки</template>
        <template v-slot:tab-pane-03>Контент третьей вкладки</template>
      </vb-tabs>
      <div>Кнопки</div>
      <vb-tabs id="tabs-02" :items-list="defaultTabs.itemsList" pills>
        <template v-slot:tab-pane-01>Контент первой вкладки</template>
        <template v-slot:tab-pane-02>Контент второй вкладки</template>
        <template v-slot:tab-pane-03>Контент третьей вкладки</template>
      </vb-tabs>
      <div>Кнопки на всю ширину</div>
      <vb-tabs id="tabs-03" :items-list="defaultTabs.itemsList" pills fill>
        <template v-slot:tab-pane-01>Контент первой вкладки</template>
        <template v-slot:tab-pane-02>Контент второй вкладки</template>
        <template v-slot:tab-pane-03>Контент третьей вкладки</template>
      </vb-tabs>
      <div>Кнопки равной ширины на всю ширину</div>
      <vb-tabs
        id="tabs-04"
        :items-list="defaultTabs.itemsList"
        pills
        fill
        justified
      >
        <template v-slot:tab-pane-01>Контент первой вкладки</template>
        <template v-slot:tab-pane-02>Контент второй вкладки</template>
        <template v-slot:tab-pane-03>Контент третьей вкладки</template>
      </vb-tabs>
      <div>Вертикальные кнопки</div>
      <vb-tabs id="tabs-05" :items-list="defaultTabs.itemsList" pills vertical>
        <template v-slot:tab-pane-01>Контент первой вкладки</template>
        <template v-slot:tab-pane-02>Контент второй вкладки</template>
        <template v-slot:tab-pane-03>Контент третьей вкладки</template>
      </vb-tabs>
      <div>Выравнивание по центру</div>
      <vb-tabs
        id="tabs-06"
        :items-list="defaultTabs.itemsList"
        pills
        position="center"
      >
        <template v-slot:tab-pane-01>Контент первой вкладки</template>
        <template v-slot:tab-pane-02>Контент второй вкладки</template>
        <template v-slot:tab-pane-03>Контент третьей вкладки</template>
      </vb-tabs>
      <h3>Действия компонента</h3>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbTabs from "../components/Bootstrap_4.6.2/BS46Tabs";
export default {
  name: "TempView",
  components: { VbTabs, VbAlert },
  data() {
    return {
      defaultTabs: {
        itemsList: [
          { id: "tab-pane-01", active: false, name: "Кнопка-1" },
          { id: "tab-pane-02", active: true, name: "Кнопка-2" },
          {
            id: "tab-pane-03",
            active: false,
            name: "Кнопка-3 (удлинненная)",
          },
        ],
      },
    };
  },
  methods: {},
};
</script>
