<template>
  <nav aria-label="Page navigation">
    <ul class="pagination mb-0">
      <vb-pagination-button
        v-if="activePage > 1"
        :class="['page-item', { islandButton: islandButtons }]"
        @click="$emit('change-page', activePage - 1)"
        ><span aria-hidden="true">&laquo;</span></vb-pagination-button
      >

      <vb-pagination-button
        v-if="activePage > 2"
        :class="['page-item', { islandButton: islandButtons }]"
        @click="$emit('change-page', 1)"
        >1</vb-pagination-button
      >

      <template v-if="activePage > 3">
        <vb-pagination-button
          v-if="activePage > 4"
          :class="['page-item disabled', { islandButton: islandButtons }]"
          ><span aria-hidden="true">&#8230;</span></vb-pagination-button
        >
        <vb-pagination-button
          v-else
          :class="['page-item', { islandButton: islandButtons }]"
          @click="$emit('change-page', 2)"
          >2</vb-pagination-button
        >
      </template>

      <template v-for="page of pages">
        <vb-pagination-button
          v-if="page >= activePage - 1 && page <= activePage + 1"
          :key="page"
          :class="[
            'page-item',
            { islandButton: islandButtons },
            { active: page === activePage },
          ]"
          @click="$emit('change-page', page)"
          >{{ page }}</vb-pagination-button
        >
      </template>

      <template v-if="activePage < pages - 2">
        <vb-pagination-button
          v-if="activePage < pages - 3"
          :class="['page-item disabled', , { islandButton: islandButtons }]"
          ><span aria-hidden="true">&#8230;</span></vb-pagination-button
        >
        <vb-pagination-button
          v-else
          :class="['page-item', { islandButton: islandButtons }]"
          @click="$emit('change-page', pages - 1)"
          >{{ pages - 1 }}</vb-pagination-button
        >
      </template>

      <vb-pagination-button
        v-if="activePage < pages - 1"
        :class="['page-item', { islandButton: islandButtons }]"
        @click="$emit('change-page', pages)"
        >{{ pages }}</vb-pagination-button
      >

      <vb-pagination-button
        v-if="activePage < pages"
        :class="['page-item', { islandButton: islandButtons }]"
        @click="$emit('change-page', activePage + 1)"
        ><span aria-hidden="true">&raquo;</span></vb-pagination-button
      >
    </ul>
  </nav>
</template>

<script>
import VbPaginationButton from "./BS46PaginationButton";
export default {
  name: "VbPaginationPageSelector",
  components: { VbPaginationButton },
  props: {
    pages: Number,
    activePage: Number,
    islandButtons: Boolean,
  },
};
</script>
