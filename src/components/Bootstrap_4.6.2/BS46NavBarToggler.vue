<template>
  <vb-collapse-button
    target-id="navbarCollapseContent"
    aria-label="Toggle navigation"
    theme="outline-light"
    icon="menu"
    square
    @click="$emit('click')"
  >
    <span class="navbar-toggler-icon"></span>
  </vb-collapse-button>
</template>

<script>
import VbCollapseButton from "./BS46CollapseButton";
export default {
  name: "VbNavBarToggler",
  components: { VbCollapseButton },
};
</script>
