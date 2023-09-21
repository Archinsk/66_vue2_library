<template>
  <vb-collapse-button
    target-id="navbarCollapseContent"
    class="navbar-toggler"
    aria-label="Toggle navigation"
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
