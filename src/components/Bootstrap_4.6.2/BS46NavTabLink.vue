<template>
  <vb-nav-link
    type="a"
    :href="`#${href}`"
    :active="active"
    :disabled="disabled"
    :aria-controls="href"
    :aria-selected="active"
    data-toggle="tab"
    role="tab"
    ><slot></slot
  ></vb-nav-link>
</template>

<script>
import VbNavLink from "./BS46NavLink";
export default {
  name: "VbNavTabLink",
  components: { VbNavLink },
  props: {
    href: String,
    active: Boolean,
    disabled: Boolean,
  },
};
</script>
