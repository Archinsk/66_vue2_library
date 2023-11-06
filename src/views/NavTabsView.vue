<template>
  <div class="about">
    <h2>Кастомизированный Bootstrap компонент BS46NavTabs</h2>
    <div class="section">
      <vb-alert theme-color="warning"
        >Работает исправно. Используется в проектах 61, 62. Компонент обновлен,
        в проектах используется в старом виде</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: навигация в виде вкладок</div>
      <div>
        Принимает строчный идентификатор, флаг отображения в виде кнопок, строку
        позиции (center, end, левое - без указания пропа), флаг вертикального
        расположения, флаг заполнения пунктами всей ширины, флаг равной ширины
        кнопок, массив пкнктов навигации. Если массим пунктов не передан, то все
        пункы пробрасываются в дефолтный слот. Если передан массив пунктов, то
        компонент генерирует в цикле компоненты BS46NavTabLink. Компонент
        выполнен на базе компонента BS46Nav. По флагу pills определяется тип
        пунктов (tabs или pills) и передается в vb-nav, идентификатор
        присваивается vb-nav. Остальные пропы пробрасываются дальше.
      </div>
      <div class="text-danger">
        В структуре данных должна быть строка дополнительных классов (для
        адаптивности на эранах разной ширины), которые вешаются на обертку
        пунктов навигации.
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
}</pre
      >
      <h3>Варианты использования</h3>
      <div>В виде табов с пробросом пунктов в дефолтный слот</div>
      <vb-nav-tabs id="nav-tab">
        <vb-nav-tab-link id="nav-link-01" href="nav-home" active
          >Первая</vb-nav-tab-link
        >
        <vb-nav-tab-link id="nav-link-02" href="nav-profile"
          >Вторая</vb-nav-tab-link
        >
        <vb-nav-tab-link id="nav-link-03" href="nav-contact"
          >Третья</vb-nav-tab-link
        >
      </vb-nav-tabs>
      <vb-tab-content id="nav-content">
        <vb-tab-pane id="nav-home" :active="true">Контент 1</vb-tab-pane>
        <vb-tab-pane id="nav-profile">Контент 2</vb-tab-pane>
        <vb-tab-pane id="nav-contact">Контент 3</vb-tab-pane>
      </vb-tab-content>
      <div>В виде кнопок с пробросом пунктов в дефолтный слот</div>
      <vb-nav-tabs id="nav-tab-02" pills>
        <vb-nav-tab-link id="nav-link-04" href="nav-home-02" active
          >Первая</vb-nav-tab-link
        >
        <vb-nav-tab-link id="nav-link-05" href="nav-profile-02"
          >Вторая</vb-nav-tab-link
        >
        <vb-nav-tab-link id="nav-link-06" href="nav-contact-02"
          >Третья</vb-nav-tab-link
        >
      </vb-nav-tabs>
      <vb-tab-content id="nav-content-02">
        <vb-tab-pane id="nav-home-02" :active="true">Контент 4</vb-tab-pane>
        <vb-tab-pane id="nav-profile-02">Контент 5</vb-tab-pane>
        <vb-tab-pane id="nav-contact-02">Контент 6</vb-tab-pane>
      </vb-tab-content>

      <div>В виде кнопок c передачей массива</div>
      <vb-nav-tabs id="tabs-01" :items-list="defaultNavTabs.itemsList" pills />
      <vb-tab-content id="tabs-01" :items-list="defaultNavTabs.itemsList">
        <template v-slot:tab-pane-01>Контент первой вкладки</template>
        <template v-slot:tab-pane-02>Контент второй вкладки</template>
        <template v-slot:tab-pane-03>Контент третьей вкладки</template>
      </vb-tab-content>

      <div>С выравниванием по правому краю</div>
      <vb-nav-tabs
        id="tabs-02"
        :items-list="defaultNavTabs.itemsList"
        pills
        position="end"
      />
      <vb-tab-content id="tabs-02" :items-list="defaultNavTabs.itemsList">
        <template v-slot:tab-pane-01>Контент первой вкладки</template>
        <template v-slot:tab-pane-02>Контент второй вкладки</template>
        <template v-slot:tab-pane-03>Контент третьей вкладки</template>
      </vb-tab-content>

      <div>Вертикальное расположение</div>
      <vb-nav-tabs
        id="tabs-03"
        :items-list="defaultNavTabs.itemsList"
        pills
        vertical
      />
      <vb-tab-content id="tabs-03" :items-list="defaultNavTabs.itemsList">
        <template v-slot:tab-pane-01>Контент первой вкладки</template>
        <template v-slot:tab-pane-02>Контент второй вкладки</template>
        <template v-slot:tab-pane-03>Контент третьей вкладки</template>
      </vb-tab-content>

      <div>На всю ширину</div>
      <vb-nav-tabs
        id="tabs-04"
        :items-list="defaultNavTabs.itemsList"
        pills
        fill
      />
      <vb-tab-content id="tabs-04" :items-list="defaultNavTabs.itemsList">
        <template v-slot:tab-pane-01>Контент первой вкладки</template>
        <template v-slot:tab-pane-02>Контент второй вкладки</template>
        <template v-slot:tab-pane-03>Контент третьей вкладки</template>
      </vb-tab-content>

      <div>На всю ширину с кнопками равной ширины</div>
      <vb-nav-tabs
        id="tabs-05"
        :items-list="defaultNavTabs.itemsList"
        pills
        fill
        justified
      />
      <vb-tab-content id="tabs-05" :items-list="defaultNavTabs.itemsList">
        <template v-slot:tab-pane-01>Контент первой вкладки</template>
        <template v-slot:tab-pane-02>Контент второй вкладки</template>
        <template v-slot:tab-pane-03>Контент третьей вкладки</template>
      </vb-tab-content>
      <h3>Действия компонента</h3>
      <div>
        Действия отсутствуют. Компонент самостоятельно меняет активный пункт,
        убирая активность с ранее активного пункта.
      </div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbTabContent from "../components/Bootstrap_4.6.2/BS46TabContent";
import VbNavTabs from "../components/Bootstrap_4.6.2/BS46NavTabs";
import VbNavTabLink from "../components/Bootstrap_4.6.2/BS46NavTabLink";
import VbTabPane from "../components/Bootstrap_4.6.2/BS46TabPane";
export default {
  name: "NavTabsView",
  components: {
    VbTabPane,
    VbNavTabLink,
    VbNavTabs,
    VbTabContent,
    VbAlert,
  },
  data() {
    return {
      defaultNavTabs: {
        itemsList: [
          { id: "tab-pane-01", active: true, name: "Первая" },
          { id: "tab-pane-02", active: false, name: "Вторая" },
          {
            id: "tab-pane-03",
            active: false,
            name: "Третья (удлинненная кнопка)",
          },
        ],
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.nav-link.active {
  color: red;
}
</style>
