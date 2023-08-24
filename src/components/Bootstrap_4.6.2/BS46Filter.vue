<template>
  <div>
    <CollapseButton
      :id="filterData.form.id + '-collapse-button'"
      target-id="appsFilterCollapse"
      class="btn-primary my-3"
    >
      Фильтр
    </CollapseButton>
    <Collapse id="appsFilterCollapse">
      <Form
        :form-data="filterData.form"
        @change-form="$emit('change-filter', $event)"
      />
      <div>
        <div class="row form-group">
          <div class="col">
            <div class="btn btn-primary mr-2" @click="$emit('apply-filter')">
              Применить
            </div>
            <div
              class="btn btn-outline-secondary"
              @click="$emit('clear-filter')"
            >
              Очистить
            </div>
          </div>
        </div>
      </div>
    </Collapse>
  </div>
</template>

<script>
import Form from "./BS46Form";
import CollapseButton from "./BS46CollapseButton";
import Collapse from "./BS46Collapse";
export default {
  name: "FilterBS46",
  components: {
    Collapse,
    CollapseButton,
    Form,
  },
  props: ["filterData"],
};
</script>
