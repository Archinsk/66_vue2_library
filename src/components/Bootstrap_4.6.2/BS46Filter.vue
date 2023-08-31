<template>
  <div>
    <CollapseButton
      v-if="collapse"
      :id="id + '-collapse-button'"
      :target-id="id + '-collapse'"
      class="btn-primary my-3"
    >
      Фильтр
    </CollapseButton>
    <Collapse
      :id="id + '-collapse'"
      :class="!collapse || (collapse && collapseShow) ? 'show' : ''"
    >
      <slot></slot>
      <div v-if="!hiddenActionButtons" class="row form-group">
        <div class="col">
          <div
            class="btn btn-primary mr-2"
            @click="$emit('apply-filter', { pagination, refreshMethod })"
          >
            Применить
          </div>
          <div
            class="btn btn-outline-secondary"
            @click="
              $emit('reset-filter', {
                formItemsList,
                pagination,
                refreshMethod,
              })
            "
          >
            Очистить
          </div>
        </div>
      </div>
    </Collapse>
  </div>
</template>

<script>
import CollapseButton from "./BS46CollapseButton";
import Collapse from "./BS46Collapse";
export default {
  name: "VbFilter",
  components: {
    Collapse,
    CollapseButton,
  },
  props: {
    id: String,
    collapse: Boolean,
    collapseShow: Boolean,
    hiddenActionButtons: Boolean,
    formItemsList: Array,
    pagination: Object,
    refreshMethod: String,
  },
};
</script>
