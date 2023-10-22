<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2Icon</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46Icon</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: отображение иконки</div>
      <div>
        Принимает строку формата (font - по умолчанию, svg, png и тп), строку
        типа (material - по умолчанию, awesome и тп), строку имени иконки. Если
        используется шрифт, то он должен быть подключен в index.html. Для
        material-icons добавлены стили.
      </div>
      <div class="text-danger">
        Разобраться с вертикальным выравниванием. При разном размере шрифта
        шрифт material-icons не выравнивается по высоте с родительским шрифтом.
        См.vertical-align, line-height и тп.
      </div>
      <pre>
props: {
  format: String,
  type: String,
  name: String,
},</pre
      >
      <h3>Варианты использования</h3>
      <div>Внутри текста</div>
      <div>Lorem ipsum dolor.</div>
      <div>
        Lor<vb-icon name="favorite" />em ip<vb-icon name="star" />sum dolor.
      </div>
      <h2>Lorem ipsum dolor.</h2>
      <h2>
        Lor<vb-icon name="star" />em ip<vb-icon name="favorite" />sum dolor.
      </h2>
      <div>Внутри кнопки</div>
      <vb-button theme="primary" icon="star" class="mr-3">Кнопка</vb-button>
      <div>Внутри пункта выпадающего списка</div>
      <vb-dropdown-item href="/nav" icon="star"
        >Пункт выпадающего списка</vb-dropdown-item
      >
      <div>Внутри пункта меню</div>
      <vb-nav-link href="/nav" icon="star">Основной пункт меню</vb-nav-link>
      <h3>Действия компонента</h3>
      <div>Действия отсутствуют</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbIcon from "../components/Bootstrap_4.6.2/BS46Icon";
import VbButton from "../components/Bootstrap_4.6.2/BS46Button";
import VbDropdownItem from "../components/Bootstrap_4.6.2/BS46DropdownItem";
import VbNavLink from "../components/Bootstrap_4.6.2/BS46NavLink";
export default {
  name: "IconView",
  components: { VbNavLink, VbDropdownItem, VbButton, VbIcon, VbAlert },
  data() {
    return {};
  },
  methods: {},
};
</script>
