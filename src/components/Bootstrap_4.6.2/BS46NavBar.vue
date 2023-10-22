<template>
  <nav :class="navbarClass">
    <vb-nav-bar-brand
      :href="brand.href"
      :name="brand.name"
      :image-src="brand.imageSrc"
      :monochrome="monochromeBrandImage"
      :light="dark"
    />
    <vb-nav-bar-toggler
      v-if="!withoutToggler"
      :class="'d-' + expandSize + '-none'"
    />
    <vb-nav-bar-collapse>
      <slot></slot>
    </vb-nav-bar-collapse>
    <slot name="navbar-end"></slot>
  </nav>
</template>

<script>
import VbNavBarBrand from "./BS46NavBarBrand";
import VbNavBarToggler from "./BS46NavBarToggler";
import VbNavBarCollapse from "./BS46NavBarCollapse";
export default {
  name: "VbNavBar",
  components: {
    VbNavBarCollapse,
    VbNavBarToggler,
    VbNavBarBrand,
  },
  props: {
    dark: Boolean,
    theme: String,
    scroll: Boolean,
    monochromeBrandImage: Boolean,
    expand: Boolean,
    expandSize: String,
    brand: Object,
    withoutToggler: Boolean,
  },
  computed: {
    navbarClass() {
      let navbarClass = "navbar";
      if (this.dark) {
        navbarClass += " navbar-dark";
      } else {
        navbarClass += " navbar-light";
      }
      if (this.theme) {
        navbarClass += ` bg-${this.theme}`;
      }
      if (this.expand) {
        if (this.expandSize) {
          if (["sm", "md", "lg", "xl"].includes(this.expandSize)) {
            navbarClass += ` navbar-expand-${this.expandSize}`;
          } else {
            navbarClass += " navbar-expand-sm";
          }
        } else {
          navbarClass += " navbar-expand";
        }
      }
      return navbarClass;
    },
  },
};
</script>
