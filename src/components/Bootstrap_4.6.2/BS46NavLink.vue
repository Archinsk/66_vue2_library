<template>
  <a class="nav-link active" href="#">Активная</a>
</template>

<script>
export default {
  name: "BS46NavLink",
  props: {
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
    },
  },
};
</script>

<style scoped></style>
