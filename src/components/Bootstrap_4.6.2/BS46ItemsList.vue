<template>
  <div :id="id" class="items-list">
    <slot v-if="title" name="list-title"></slot>
    <slot name="static-items"></slot>
    <template v-if="hiddenItems">
      <vb-collapse :id="id + '-collapse'">
        <slot name="hidden-items"></slot>
        <vb-pagination
          v-if="pagination"
          :items-per-page="pagination.itemsPerPage"
          :page-size="pagination.pageSize"
          :items-total="pagination.itemsTotal"
          :page="pagination.page"
          island-buttons
          @change-page-size="$emit('change-page-size', $event)"
          @change-page="$emit('change-page', $event)"
        />
      </vb-collapse>
      <vb-collapse-button
        class="btn btn-outline-secondary"
        :target-id="id + '-collapse'"
        @click="hidden = !hidden"
        >{{ hidden ? "Показать больше" : "Скрыть" }}</vb-collapse-button
      >
    </template>
    <vb-pagination
      v-else-if="
        pagination && pagination.itemsTotal > pagination.itemsPerPage[0]
      "
      :items-per-page="pagination.itemsPerPage"
      :page-size="pagination.pageSize"
      :items-total="pagination.itemsTotal"
      :page="pagination.page"
      island-buttons
      @change-page-size="$emit('change-page-size', $event)"
      @change-page="$emit('change-page', $event)"
    />
  </div>
</template>

<script>
import VbPagination from "./BS46Pagination";
import VbCollapse from "./BS46Collapse";
import VbCollapseButton from "./BS46CollapseButton";
export default {
  name: "VbItemsList",
  components: { VbCollapseButton, VbCollapse, VbPagination },
  props: {
    id: String,
    title: Boolean,
    hiddenItems: Boolean,
    pagination: Object,
  },
  data() {
    return {
      hidden: true,
    };
  },
};
</script>

<style scoped></style>
