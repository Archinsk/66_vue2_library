<template>
  <li>
    <a href="#" class="page-link" @click.prevent="$emit('click')"
      ><slot></slot
    ></a>
  </li>
</template>

<script>
export default {
  name: "VbPaginationButton",
};
</script>

<style lang="scss" scoped>
.islandButton {
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
  .page-link {
    border-radius: 0.25rem;
  }
}
</style>
