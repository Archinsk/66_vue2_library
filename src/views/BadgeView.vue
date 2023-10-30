<template>
  <div class="about">
    <h2>Кастомизированный компонент Vue2Badge</h2>
    <div>Пока отсутствует</div>

    <h2>Кастомизированный Bootstrap компонент BS46Badge</h2>
    <div class="section">
      <vb-alert theme-color="success"
        >Новый компонент. Ранее в проектах не использовался</vb-alert
      >
      <h3>Описание</h3>
      <div>Назначение: уменьшенный значок со значением</div>
      <div>
        Принимает строку темы, флаг скругленности, флаг отображения только
        ненулевого значения (0 не отображается), числовое значение, числовое
        максимальное значение
      </div>
      <div class="text-danger">
        !!! Если передан проп value, то слота у компонента нет, выводится
        значеие из value. Можно ограничить предел отображаемого значения,
        передав проп max. В таком случае при привышении максимального значения
        будет отображено значение в формате "max+". Можно отключать показ
        нулевого value передачей пропа not-null-display. Если проп value не
        передан, содержимое пробрасывается в слот
      </div>
      <div>
        Добавлены стили для размещения внутри кнопки: абсолютное
        позиционирование, уменьшенный размер шрифта, смещение вниз вправо
        относительно правого верхнего угла кнопки
      </div>
      <div>
        Используется в Компонентах
        <ul>
          <li>BS46Button</li>
          <li>BS46NavlLink</li>
        </ul>
      </div>
      <pre>
props: {
  theme: String,
  pill: Boolean,
  value: Number,
  max: Number,
  notNullDisplay: Boolean,
},</pre
      >
      <h3>Варианты использования</h3>
      <div>Без value, с темой</div>
      <vb-badge theme="info">Важно!</vb-badge>
      <div>Скруглённый, с темой</div>
      <vb-badge theme="warning" pill>Внимание</vb-badge>
      <div>Со значением</div>
      <vb-badge :value="10" />
      <div>С указанием максимального значения и его превышением</div>
      <vb-badge :value="120" theme="danger" :max="99" />
      <div>С отображением нулевого значения</div>
      <vb-badge :value="0" theme="danger" />
      <div>Без отображения нулевого значения</div>
      <vb-badge :value="0" theme="danger" not-null-display />
      <div>Внутри BS46NavLink</div>
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
      <div>Внутри BS46Button</div>
      <vb-button theme="secondary" :badge="defaultBadge">Сообщения</vb-button>

      <h3>Действия компонента</h3>
      <div>Действия отсутствуют</div>
    </div>
  </div>
</template>

<script>
import VbAlert from "../components/Bootstrap_4.6.2/BS46Alert";
import VbBadge from "../components/Bootstrap_4.6.2/BS46Badge";
import VbNav from "../components/Bootstrap_4.6.2/BS46Nav";
import VbNavItem from "../components/Bootstrap_4.6.2/BS46NavItem";
import VbDropdownItem from "../components/Bootstrap_4.6.2/BS46DropdownItem";
import VbButton from "../components/Bootstrap_4.6.2/BS46Button";
export default {
  name: "BadgeView",
  components: { VbButton, VbDropdownItem, VbNavItem, VbNav, VbBadge, VbAlert },
  data() {
    return {
      defaultNav: {
        itemsList: [
          {
            id: "nav-link-home",
            name: "Home",
            type: "router-link",
            href: "/",
            active: false,
            disabled: false,
          },
          {
            id: "nav-link-alert",
            name: "NavLink",
            type: "modal-link",
            href: "/alert",
            active: false,
            disabled: false,
            badge: {
              theme: "danger",
              pill: false,
              notNullDisplay: true,
              value: 25,
              max: 99,
            },
          },
        ],
      },
      defaultBadge: {
        theme: "danger",
        pill: false,
        notNullDisplay: true,
        value: 25,
        max: 99,
      },
    };
  },
  methods: {},
};
</script>
