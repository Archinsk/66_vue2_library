<template>
  <nav aria-label="Items per page navigation">
    <ul class="pagination mb-0">
      <vb-pagination-button
        v-for="valuePerPage of itemsPerPage"
        :key="valuePerPage"
        :class="[
          'page-item',
          { islandButton: islandButtons },
          { active: valuePerPage === pageSize },
        ]"
        @click="$emit('change-page-size', valuePerPage)"
        >{{ valuePerPage }}</vb-pagination-button
      >
    </ul>
  </nav>
</template>

<script>
import VbPaginationButton from "./BS46PaginationButton";
export default {
  name: "VbPaginationItemsPerPage",
  components: { VbPaginationButton },
  props: { itemsPerPage: Array, pageSize: Number, islandButtons: Boolean },
};
</script>
