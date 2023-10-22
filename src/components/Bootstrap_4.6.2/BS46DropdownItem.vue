<template>
  <a v-if="type === 'a'" :href="href" :class="navLinkClass">
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
    @click.native.prevent="clickLink"
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
export default {
  name: "VbDropdownItem",
  components: { VbIcon },
  props: {
    type: String,
    href: String,
    active: Boolean,
    disabled: Boolean,
    icon: [Object, String],
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
  methods: {
    clickLink() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-item {
  .icon + * {
    margin-left: 0.375em;
  }
}

.offcanvas.show {
  @mixin static-dropdown-menu-item {
    .offcanvas-body {
      .dropdown-menu {
        .dropdown-item {
          padding: 0.5rem 0.5rem 0.5rem 1.5rem;
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
