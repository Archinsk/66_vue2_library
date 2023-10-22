<template>
  <span class="icon material-icon">{{ name }}</span>
</template>

<script>
export default {
  name: "VbIcon",
  props: {
    format: String,
    type: String,
    name: String,
  },
};
</script>

<style lang="scss" scoped>
.material-icon {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  vertical-align: calc(-0.125em + (1em - 1rem) / 20);
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
</style>
