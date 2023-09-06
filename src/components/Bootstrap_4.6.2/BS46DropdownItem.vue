<template>
  <a v-if="type === 'a'" :href="href" :class="navLinkClass"><slot></slot></a>
  <router-link
    v-else
    :to="href"
    :class="navLinkClass"
    @click.native.prevent="clickLink"
    ><slot></slot
  ></router-link>
</template>

<script>
export default {
  name: "VbDropdownItem",
  props: {
    type: String,
    href: String,
    active: Boolean,
    disabled: Boolean,
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
