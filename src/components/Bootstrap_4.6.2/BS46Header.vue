<template>
  <vb-nav-bar
    :expand="offcanvas || expand"
    :expand-size="expandSize && !offcanvas ? expandSize : ''"
    :theme="theme"
    :dark="dark"
    :monochrome-brand-image="monochrome"
    :brand="brand"
    :without-toggler="offcanvas"
  >
    <vb-offcanvas
      v-if="offcanvas"
      :id="id + 'offcanvas'"
      :no-effect-point="expand && expandSize ? expandSize : ''"
      expand-size="sm"
      :theme="theme"
      scrollable
      header
    >
      <vb-nav tag="ul" class="navbar-nav">
        <template v-for="navLink of nav.itemsList">
          <vb-nav-item
            v-if="!navLink.dropdown"
            :key="navLink.id"
            :type="navLink.type"
            :href="navLink.href"
            :active="navLink.active"
            :disabled="navLink.disabled"
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
                @click="$emit('nav-link-click', dropdownItem)"
                >{{ dropdownItem.name }}</vb-dropdown-item
              >
            </template>
          </vb-nav-item>
        </template>
      </vb-nav>
    </vb-offcanvas>
    <vb-nav v-else tag="ul" class="navbar-nav">
      <template v-for="navLink of nav.itemsList">
        <vb-nav-item
          v-if="!navLink.dropdown"
          :key="navLink.id"
          :type="navLink.type"
          :href="navLink.href"
          :active="navLink.active"
          :disabled="navLink.disabled"
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
      >
        Off
      </vb-offcanvas-button>
    </template>
  </vb-nav-bar>
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
  },
  computed: {},
};
</script>
