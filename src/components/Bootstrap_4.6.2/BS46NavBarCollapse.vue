<template>
  <vb-collapse class="navbar-collapse" id="navbarCollapseContent">
    <slot></slot>
  </vb-collapse>
</template>

<script>
import VbCollapse from "./BS46Collapse";
export default {
  name: "VbNavBarCollapse",
  components: { VbCollapse },
};
</script>
