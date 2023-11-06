<template>
  <div class="about">
    <h2>Кастомизированный Bootstrap компонент BS46TabContent</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: обертка для размещения таб-панелей</div>
      <div>
        Принимает строчный идентификатор и массив панелей. Если массив не
        переден, то пробрасывает содержимое в слот. На обертку добавляется класс
        "tab-content", который участвует в стилизации вложенных элементов. Если
        массив передан, то создаются таб-панели со слотом имя которого
        соответствует идентификатору панели
      </div>
      <h3>Варианты использования</h3>
      <div>Без передачи массива, с пробросом вкладок в дефолтный слот</div>
      <vb-nav-tabs pills>
        <vb-nav-tab-link href="content-11">Кнопка 1</vb-nav-tab-link>
        <vb-nav-tab-link href="content-12">Кнопка 2</vb-nav-tab-link>
      </vb-nav-tabs>
      <vb-tab-content>
        <vb-tab-pane id="content-11"
          >Неактивная по умолчанию вкладка</vb-tab-pane
        >
        <vb-tab-pane id="content-12" active
          >Активная по умолчанию вкладка</vb-tab-pane
        >
      </vb-tab-content>
      <div>
        С передачей массива и пробросом контента в соответствующие
        идентификаторам панелей слоты
      </div>
      <vb-nav-tabs pills>
        <vb-nav-tab-link
          v-for="(tabPane, index) of content.itemsList"
          :key="index"
          :href="tabPane.id"
          >Кнопка-0{{ index + 1 }}</vb-nav-tab-link
        >
      </vb-nav-tabs>
      <vb-tab-content :items-list="content.itemsList">
        <template v-slot:tab-pane-01>Контент первой вкладки</template>
        <template v-slot:tab-pane-02>Контент второй вкладки</template>
        <template v-slot:tab-pane-03>Контент третьей вкладки</template>
      </vb-tab-content>
      <h3>Действия компонента</h3>
      <div>Действия отсутствуют</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbTabContent from "../components/Bootstrap_4.6.2/BS46TabContent";
import VbTabPane from "../components/Bootstrap_4.6.2/BS46TabPane";
import VbNavTabs from "../components/Bootstrap_4.6.2/BS46NavTabs";
import VbNavTabLink from "../components/Bootstrap_4.6.2/BS46NavTabLink";
export default {
  name: "TabContentView",
  components: { VbNavTabLink, VbNavTabs, VbTabPane, VbTabContent, VbAlert },
  data() {
    return {
      content: {
        itemsList: [
          { id: "tab-pane-01", active: false },
          { id: "tab-pane-02", active: false },
          {
            id: "tab-pane-03",
            active: true,
          },
        ],
      },
    };
  },
};
</script>
