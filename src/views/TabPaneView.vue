<template>
  <div class="about">
    <h2>Кастомизированный Bootstrap компонент BS46TabPane</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: отображение контента на таб-вкладке</div>
      <div>
        Несамостоятельный компонент используется только внутри компонента
        BS46TabContent. Принимает строчный идентификатор (требуется для
        активации панели) и флаг активности
      </div>
      <pre>
props: {
  id: String,
  active: Boolean,
},</pre
      >
      <h3>Варианты использования</h3>
      <vb-nav-tabs pills>
        <vb-nav-tab-link href="content-01">Кнопка 1</vb-nav-tab-link>
        <vb-nav-tab-link href="content-02">Кнопка 2</vb-nav-tab-link>
      </vb-nav-tabs>
      <vb-tab-content>
        <vb-tab-pane id="content-01"
          >Неактивная по умолчанию вкладка</vb-tab-pane
        >
        <vb-tab-pane id="content-02" active
          >Активная по умолчанию вкладка</vb-tab-pane
        >
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
  name: "TabPaneView",
  components: { VbNavTabLink, VbNavTabs, VbTabPane, VbTabContent, VbAlert },
};
</script>
