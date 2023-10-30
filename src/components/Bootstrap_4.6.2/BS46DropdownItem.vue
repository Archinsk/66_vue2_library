<!-- Версия 1.01 от 30.10.2023 -->

<template>
  <vb-nav-item
    v-if="dropdown"
    :type="type"
    :href="href"
    :active="active"
    :disabled="disabled"
    :dropdown="dropdown"
    :icon="icon"
    :badge="badge"
    :additional-classes="additionalClasses"
    :window-data="windowData"
    :dropdown-items-list="dropdownItemsList"
    :name="name"
    class="dropdown-toggle"
    role="button"
    data-toggle="dropdown"
    aria-expanded="false"
    @click="$emit('nav-link-click', dropdown)"
    ><slot></slot
  ></vb-nav-item>
  <a
    v-else-if="type === 'a'"
    :href="href"
    :class="navLinkClass"
    @click.prevent="$emit('click')"
  >
    <vb-icon
      v-if="icon"
      :name="typeof icon === 'string' ? icon : icon.name"
      :format="icon.format"
      :type="icon.type"
    />
    <span>
      <slot></slot>
    </span>
  </a>
  <router-link
    v-else
    :to="href"
    :class="navLinkClass"
    @click.native.prevent="$emit('click')"
  >
    <vb-icon
      v-if="icon"
      :name="typeof icon === 'string' ? icon : icon.name"
      :format="icon.format"
      :type="icon.type"
    />
    <span>
      <slot></slot>
    </span>
  </router-link>
</template>

<script>
import VbIcon from "./BS46Icon";
import VbNavItem from "./BS46NavItem";
export default {
  name: "VbDropdownItem",
  components: { VbNavItem, VbIcon },
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
    navLinkClass() {
      let navLinkClass = "dropdown-item";
      if (this.disabled) {
        navLinkClass += " disabled";
      } else if (this.active) {
        navLinkClass += " active";
      }
      return navLinkClass;
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-item {
  .icon + * {
    margin-left: 0.5em;
  }
}

.offcanvas.show {
  @mixin static-dropdown-menu-item {
    .offcanvas-body {
      .dropdown-menu {
        .dropdown-item {
          padding: 0.4375rem 0.5rem 0.4375rem 1.5rem;
        }
      }
    }
  }

  @media (max-width: 575.98px) {
    &.offcanvas-sm {
      @include static-dropdown-menu-item;
    }
  }

  @media (max-width: 767.98px) {
    &.offcanvas-md {
      @include static-dropdown-menu-item;
    }
  }

  @media (max-width: 991.98px) {
    &.offcanvas-lg {
      @include static-dropdown-menu-item;
    }
  }

  @media (max-width: 1199.98px) {
    &.offcanvas-xl {
      @include static-dropdown-menu-item;
    }
  }
}
</style>
