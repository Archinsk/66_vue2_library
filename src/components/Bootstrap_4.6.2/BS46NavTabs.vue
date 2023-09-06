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
export default {
  name: "VbNavTabs",
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
