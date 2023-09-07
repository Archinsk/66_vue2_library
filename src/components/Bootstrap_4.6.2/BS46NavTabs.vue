<template>
  <vb-nav
    :id="id"
    :type="pills ? 'pills' : 'tabs'"
    :position="position"
    :vertical="vertical"
    :fill="fill"
    :justified="justified"
  >
    <slot></slot>
  </vb-nav>
</template>

<script>
import VbNav from "./BS46Nav";
export default {
  name: "VbNavTabs",
  components: { VbNav },
  props: {
    id: String,
    pills: Boolean,
    position: String,
    vertical: Boolean,
    fill: Boolean,
    justified: Boolean,
  },
};
</script>
