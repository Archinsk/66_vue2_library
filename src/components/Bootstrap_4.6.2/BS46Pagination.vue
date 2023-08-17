<template>
  <div
    v-if="itemsTotal > itemsPerPage[0]"
    class="d-flex justify-content-between align-items-center"
  >
    <vb-pagination-items-per-page
      :items-per-page="itemsPerPage"
      :page-size="pageSize"
      :island-buttons="islandButtons"
      class="d-none d-lg-block"
      @change-page-size="changePageSize($event)"
    />
    <div>
      {{ pageSize * (page - 1) + 1 }} -
      {{ page === pages ? itemsTotal : pageSize * page }} из
      {{ itemsTotal }}
    </div>
    <vb-pagination-page-selector
      v-if="itemsTotal > pageSize"
      :pages="pages"
      :active-page="page"
      :island-buttons="islandButtons"
      @change-page="$emit('change-page', $event)"
    />
  </div>
</template>

<script>
import VbPaginationItemsPerPage from "./BS46PaginationItemsPerPage";
import VbPaginationPageSelector from "./BS46PaginationPageSelector";

export default {
  name: "VbPagination",

  components: {
    VbPaginationItemsPerPage,
    VbPaginationPageSelector,
  },

  props: {
    itemsPerPage: Array,
    pageSize: Number,
    itemsTotal: Number,
    page: Number,
    islandButtons: Boolean,
  },

  computed: {
    pages: function () {
      return Math.ceil(this.itemsTotal / this.pageSize);
    },
  },

  methods: {
    changePageSize(newPageSize) {
      const currentItemOnTopOfPage = this.pageSize * (this.page - 1) + 1;
      const newPage = Math.ceil(currentItemOnTopOfPage / newPageSize);
      let pageInfo = {};
      pageInfo.page = newPage;
      pageInfo.pageSize = newPageSize;
      this.$emit("change-page-size", pageInfo);
    },
  },
};
</script>
