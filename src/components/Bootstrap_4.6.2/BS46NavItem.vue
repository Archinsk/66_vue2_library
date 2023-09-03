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
