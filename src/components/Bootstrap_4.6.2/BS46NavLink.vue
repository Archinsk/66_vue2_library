<template>
  <a
    v-if="type === 'a'"
    :href="href"
    :class="navLinkClass"
    @click="$emit('click')"
    ><slot></slot
  ></a>
  <vb-modal-button v-else-if="type === 'modal-link'" :target-id="href" tag="a">
    <slot></slot>
  </vb-modal-button>
  <router-link
    v-else
    :to="href"
    :class="navLinkClass"
    @click.native.prevent="clickLink"
    ><slot></slot
  ></router-link>
</template>

<script>
import VbModalButton from "./BS46ModalButton";
export default {
  name: "VbNavLink",
  components: { VbModalButton },
  props: {
    type: String,
    href: String,
    active: Boolean,
    disabled: Boolean,
  },
  computed: {
    navLinkClass() {
      let navLinkClass = "nav-link";
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
