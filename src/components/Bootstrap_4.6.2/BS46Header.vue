<template>
  <header :class="container && theme ? 'bg-' + theme : ''">
    <div :class="container ? 'container' : ''">
      <vb-nav-bar
        :expand="offcanvas || expand"
        :expand-size="expandSize && !offcanvas ? expandSize : ''"
        :theme="theme"
        :dark="dark"
        :monochrome-brand-image="monochrome"
        :brand="brand"
        :without-toggler="offcanvas"
        :justify-content="justifyContent"
        :class="container ? 'px-0' : ''"
      >
        <!-- Вариант с выезжающей панелью-->
        <vb-offcanvas
          v-if="offcanvas"
          :id="id + 'offcanvas'"
          :no-effect-point="expand && expandSize ? expandSize : ''"
          :theme="theme"
          scrollable
        >
          <vb-nav tag="ul" class="navbar-nav">
            <template v-for="navLink of nav.itemsList">
              <vb-nav-item
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
                :dropdown-items-list="navLink.dropdownItemsList"
                @click="$emit('nav-link-click', navLink)"
                >{{ navLink.name }}</vb-nav-item
              >
            </template>
          </vb-nav>
        </vb-offcanvas>
        <!-- Вариант без выезжающей панели (стандартный Bootstrap)-->
        <vb-nav v-else tag="ul" class="navbar-nav">
          <template v-for="navLink of nav.itemsList">
            <vb-nav-item
              v-if="!navLink.dropdown"
              :key="navLink.id"
              :type="navLink.type"
              :href="navLink.href"
              :active="navLink.active"
              :disabled="navLink.disabled"
              :icon="navLink.icon"
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
                  @click="$emit('nav-link-click', dropdownItem)"
                  >{{ dropdownItem.name }}</vb-dropdown-item
                >
              </template>
            </vb-nav-item>
          </template>
        </vb-nav>
        <template v-slot:navbar-end>
          <vb-offcanvas-button
            v-if="offcanvas"
            :target-id="id + 'offcanvas'"
            :class="'d-' + expandSize + '-none'"
            theme="outline-light"
            icon="menu"
            square
          />
        </template>
      </vb-nav-bar>
    </div>
  </header>
</template>

<script>
import VbNavBar from "./BS46NavBar";
import VbOffcanvas from "./BS46Offcanvas";
import VbNav from "./BS46Nav";
import VbNavItem from "./BS46NavItem";
import VbDropdownItem from "./BS46DropdownItem";
import VbOffcanvasButton from "./BS46OffcanvasButton";
export default {
  name: "VbHeader",
  components: {
    VbOffcanvasButton,
    VbDropdownItem,
    VbNavItem,
    VbNav,
    VbOffcanvas,
    VbNavBar,
  },
  props: {
    id: String,
    offcanvas: Boolean,
    expand: Boolean,
    expandSize: String,
    theme: String,
    dark: Boolean,
    monochrome: Boolean,
    brand: Object,
    nav: Object,
    container: Boolean,
    justifyContent: String,
    windowData: Object,
  },
  computed: {},
};
</script>
