<template>
  <li v-if="!dropdown" class="nav-item">
    <vb-nav-link
      :type="type"
      :href="href"
      :active="active"
      :disabled="disabled"
      @click="$emit('click')"
      ><slot></slot
    ></vb-nav-link>
  </li>
  <li v-else class="nav-item dropdown">
    <vb-nav-link
      :type="type"
      href="#"
      :active="active"
      :disabled="disabled"
      class="dropdown-toggle"
      data-toggle="dropdown"
      role="button"
      aria-expanded="false"
      ><slot></slot
    ></vb-nav-link>
    <div class="dropdown-menu">
      <slot name="dropdown-menu"></slot>
    </div>
  </li>
</template>

<script>
import VbNavLink from "./BS46NavLink";
export default {
  name: "VbNavItem",
  components: { VbNavLink },
  props: {
    type: String,
    href: String,
    active: Boolean,
    disabled: Boolean,
    dropdown: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.offcanvas.show {
  @mixin static-dropdown-menu {
    .offcanvas-body {
      .dropdown-menu {
        position: unset !important;
        transform: translate3d(0px, 0px, 0px) !important;
        border: none;
        border-radius: unset;
        padding: 0;
        margin-top: 0;
      }
    }
  }

  @media (max-width: 575.98px) {
    &.offcanvas-sm {
      @include static-dropdown-menu;
    }
  }

  @media (max-width: 767.98px) {
    &.offcanvas-md {
      @include static-dropdown-menu;
    }
  }

  @media (max-width: 991.98px) {
    &.offcanvas-lg {
      @include static-dropdown-menu;
    }
  }

  @media (max-width: 1199.98px) {
    &.offcanvas-xl {
      @include static-dropdown-menu;
    }
  }
}
</style>
