<template>
  <a
    v-if="type === 'a'"
    :href="href"
    :class="navLinkClass"
    @click="$emit('click')"
  >
    <vb-icon
      v-if="icon"
      :name="typeof icon === 'string' ? icon : icon.name"
      :format="icon.format"
      :type="icon.type" /><slot></slot
  ></a>
  <vb-modal-button
    v-else-if="type === 'modal-link'"
    :target-id="href"
    :icon="icon"
    tag="a"
  >
    <span>
      <slot></slot>
    </span>
  </vb-modal-button>
  <router-link
    v-else
    :to="href"
    :class="navLinkClass"
    @click.native.prevent="clickLink"
    ><vb-icon
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
import VbModalButton from "./BS46ModalButton";
import VbIcon from "./BS46Icon";
export default {
  name: "VbNavLink",
  components: { VbIcon, VbModalButton },
  props: {
    type: String,
    href: String,
    active: Boolean,
    disabled: Boolean,
    icon: [Object, String],
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

<style lang="scss" scoped>
.nav-link {
  .icon + * {
    margin-left: 0.375em;
  }
}
</style>
