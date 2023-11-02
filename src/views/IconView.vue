<template>
  <div class="about">
    <h2>Кастомизированный Bootstrap компонент BS46Icon</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: отображение иконки</div>
      <div>
        Принимает строку формата (font - по умолчанию, svg, png и тп), строку
        типа (material - по умолчанию, awesome и тп), строку имени иконки.
      </div>
      <div class="text-danger">
        !!! Если используется шрифт, то он должен быть подключен в index.html.
        Для material-icons добавлены стили.
      </div>
      <div class="text-danger">
        ??? Разобраться с вертикальным выравниванием. При разном размере шрифта
        шрифт material-icons не выравнивается по высоте с родительским шрифтом.
        См.vertical-align, line-height и тп.
      </div>
      <div>
        Используется в Компонентах
        <ul>
          <li>BS46Button</li>
          <li>BS46ButtonLink</li>
          <li>BS46NavlLink</li>
          <li>BS46DropdownItem</li>
        </ul>
      </div>
      <div>
        Добавлены стили для шрифта material-icon. Добавлены стили для увеличения
        размера иконки внутри квадратны кнопок (поддерживаются классы кнопок:
        .btn-square, .btn-square-sm, .btn-square-md, .btn-square-lg,
        .btn-square-xl)
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
      <vb-button theme="primary" icon="star" square class="mr-3"
        >Кнопка</vb-button
      >
      <div>Внутри пунктов меню (Navlink, ButtonLink, DropdownItem)</div>
      <vb-nav tag="ul" class="navbar-nav">
        <template v-for="navLink of defaultNav.itemsList">
          <vb-nav-item
            v-if="!navLink.dropdown"
            :key="navLink.id"
            :type="navLink.type"
            :href="navLink.href"
            :active="navLink.active"
            :disabled="navLink.disabled"
            :icon="navLink.icon"
            :badge="navLink.badge"
            :additional-classes="navLink.additionalClasses || {}"
            :window-data="windowData"
            @click="$emit('nav-link-click', navLink)"
            >{{ navLink.name }}</vb-nav-item
          >
          <vb-nav-item
            v-else
            :key="navLink.id"
            :type="navLink.type"
            :href="navLink.href"
            :active="navLink.active"
            :disabled="navLink.disabled"
            :icon="navLink.icon"
            :badge="navLink.badge"
            :additional-classes="navLink.additionalClasses || {}"
            :window-data="windowData"
            :dropdown="navLink.dropdown"
            >{{ navLink.name }}
            <template v-slot:dropdown-menu>
              <vb-dropdown-item
                v-for="dropdownItem of navLink.dropdownItemsList"
                :key="dropdownItem.id"
                :type="dropdownItem.type"
                :href="dropdownItem.href"
                :active="dropdownItem.active"
                :disabled="dropdownItem.disabled"
                :icon="dropdownItem.icon"
                :badge="navLink.badge"
                @click="$emit('nav-link-click', dropdownItem)"
                >{{ dropdownItem.name }}</vb-dropdown-item
              >
            </template>
          </vb-nav-item>
        </template>
      </vb-nav>
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
import VbNav from "../components/Bootstrap_4.6.2/BS46Nav";
import VbNavItem from "../components/Bootstrap_4.6.2/BS46NavItem";
export default {
  name: "IconView",
  components: {
    VbNavItem,
    VbNav,
    VbDropdownItem,
    VbButton,
    VbIcon,
    VbAlert,
  },
  data() {
    return {
      defaultNav: {
        itemsList: [
          {
            id: "nav-link-alert",
            name: "NavLink",
            type: "router-link",
            href: "/alert",
            active: false,
            disabled: false,
          },
          {
            id: "nav-link-home",
            name: "NavLink с иконкой",
            type: "router-link",
            href: "/",
            icon: "home",
            active: false,
            disabled: false,
          },
          {
            id: "nav-link-test-modal-0",
            name: "ButtonLink",
            type: "modal-link",
            href: "modal-test",
            active: false,
            disabled: false,
          },
          {
            id: "nav-link-test-modal",
            name: "ButtonLink с иконкой",
            type: "modal-link",
            href: "modal-test",
            icon: "star",
            active: false,
            disabled: false,
          },
          {
            id: "nav-link-collapse",
            name: "NavLink with Dropdown с иконкой",
            type: "router-link",
            href: "#",
            icon: "favorite",
            active: false,
            disabled: false,
            dropdown: true,
            dropdownItemsList: [
              {
                id: "dropdown-link-collapse-button",
                name: "DropdownItem",
                type: "router-link",
                href: "/collapsebutton",
                active: false,
                disabled: false,
              },
              {
                id: "dropdown-link-accordion",
                name: "DropdownItem",
                type: "router-link",
                href: "/accordion",
                active: false,
                disabled: false,
              },
              {
                id: "dropdown-link-collapse",
                name: "DropdownItem с иконкой",
                type: "router-link",
                href: "/collapse",
                active: false,
                disabled: false,
                icon: "star",
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
