<template>
  <ul v-if="tag === 'ul'" :class="navClass">
    <slot></slot>
  </ul>
  <nav v-else-if="type === 'tabs' && type === 'pills'">
    <div :class="navClass" :id="id" role="tablist">
      <slot></slot>
    </div>
  </nav>
  <nav v-else :class="navClass"><slot></slot></nav>
</template>

<script>
export default {
  name: "VbNav",
  props: {
    tag: String,
    type: String,
    position: String,
    vertical: Boolean,
    fill: Boolean,
    justified: Boolean,
  },
  computed: {
    navClass() {
      let navClass = "nav";
      if (this.type === "tabs") {
        navClass += " nav-tabs";
      } else if (this.type === "pills") {
        navClass += " nav-pills";
      }
      if (this.position === "center") {
        navClass += " justify-content-center";
      } else if (this.position === "end") {
        navClass += " justify-content-end";
      }
      if (this.vertical) {
        navClass += " flex-column";
      }
      if (this.fill) {
        navClass += " nav-fill";
      }
      if (this.justified) {
        navClass += " nav-justified";
      }
      return navClass;
    },
  },
};
</script>
