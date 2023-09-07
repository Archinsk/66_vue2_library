<template>
  <vb-nav-link
    type="a"
    :id="id"
    :href="`#${href}`"
    :active="active"
    :disabled="disabled"
    :aria-controls="href"
    :aria-selected="active"
    data-toggle="tab"
    role="tab"
    @click="$emit('click')"
    ><slot></slot
  ></vb-nav-link>
</template>

<script>
import $ from "jquery";
import VbNavLink from "./BS46NavLink";
export default {
  name: "VbNavTabLink",
  components: { VbNavLink },
  props: {
    id: String,
    href: String,
    active: Boolean,
    disabled: Boolean,
  },
  mounted() {
    $("#" + this.id)
      .on("show.bs.tab", () => {
        this.$emit("show-tab", this.id);
      })
      .on("shown.bs.tab", () => {
        this.$emit("shown-tab", this.id);
      })
      .on("hide.bs.tab", () => {
        this.$emit("hide-tab", this.id);
      })
      .on("hidden.bs.tab", () => {
        this.$emit("hidden-tab", this.id);
      });
  },
};
</script>
