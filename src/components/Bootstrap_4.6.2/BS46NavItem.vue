<template>
  <li :class="navItemClass">
    <template v-if="!dropdown">
      <vb-modal-button
        v-if="type === 'modal-link' && linkIsSquareButton"
        :icon="icon"
        :badge="badge"
        :additional-classes="additionalClasses.navLink"
        square
        :data-target="'#' + href"
        class="mx-2"
        @click="$emit('click')"
      ></vb-modal-button>
      <vb-nav-link
        v-else
        :type="type"
        :href="href"
        :active="active"
        :disabled="disabled"
        :icon="icon"
        :badge="badge"
        @click="$emit('click')"
        ><slot></slot
      ></vb-nav-link>
    </template>
    <template v-else>
      <vb-nav-link
        :type="type"
        :href="href"
        :active="active"
        :disabled="disabled"
        :icon="icon"
        :badge="badge"
        class="dropdown-toggle"
        role="button"
        data-toggle="dropdown"
        aria-expanded="false"
        @click="$emit('click')"
        ><slot></slot
      ></vb-nav-link>
      <div class="dropdown-menu">
        <vb-dropdown-item
          v-for="dropdownItem of dropdownItemsList"
          :key="dropdownItem.id"
          :type="dropdownItem.type"
          :href="dropdownItem.href"
          :active="dropdownItem.active"
          :disabled="dropdownItem.disabled"
          :dropdown="dropdownItem.dropdown"
          :icon="dropdownItem.icon"
          :badge="dropdownItem.badge"
          :additional-classes="additionalClasses"
          :window-data="windowData"
          :dropdown-items-list="dropdownItem.dropdownItemsList"
          @click="$emit('nav-link-click', dropdownItem)"
          >{{ dropdownItem.name }}</vb-dropdown-item
        >
      </div>
    </template>
  </li>
</template>

<script>
import VbNavLink from "./BS46NavLink";
import VbModalButton from "./BS46ModalButton";
import VbDropdownItem from "./BS46DropdownItem";
export default {
  name: "VbNavItem",
  components: { VbDropdownItem, VbModalButton, VbNavLink },
  props: {
    type: String,
    href: String,
    active: Boolean,
    disabled: Boolean,
    dropdown: Boolean,
    icon: [Object, String],
    badge: Object,
    additionalClasses: Object,
    windowData: Object,
    dropdownItemsList: Array,
  },
  computed: {
    navItemClass() {
      let navItemClass = "nav-item";
      if (this.dropdown) {
        navItemClass += " dropdown";
      }
      return navItemClass;
    },
    linkIsSquareButton() {
      let additionalClassesArray;
      if (this.additionalClasses && this.additionalClasses.navLink) {
        additionalClassesArray = this.additionalClasses.navLink.split(" ");
      } else {
        return false;
      }
      return (
        additionalClassesArray.includes("btn-square") ||
        (additionalClassesArray.includes("btn-square-sm") &&
          this.windowData.width >= 576) ||
        (additionalClassesArray.includes("btn-square-md") &&
          this.windowData.width >= 768) ||
        (additionalClassesArray.includes("btn-square-lg") &&
          this.windowData.width >= 992) ||
        (additionalClassesArray.includes("btn-square-xl") &&
          this.windowData.width >= 1200)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-item {
  padding-top: 0.0625rem;
  padding-bottom: 0.0625rem;
}

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
