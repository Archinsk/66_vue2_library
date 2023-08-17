<template>
  <div :class="filterClass">
    <div class="row">
      <vb-input
        :id="dateRangeData.id"
        id-postfix="start"
        :label="dateRangeData.label + dateRangeData.itemsList[0].label"
        :type="dateRangeData.subtype"
        :value="dateRangeData.itemsList[0].value"
        :required="
          dateRangeData.required || dateRangeData.itemsList[0].required
        "
        :disabled="
          dateRangeData.disabled || dateRangeData.itemsList[0].disabled
        "
        :readonly="
          dateRangeData.readonly || dateRangeData.itemsList[0].readonly
        "
        :additional-classes="dateRangeData.additionalClasses"
        :horizontal="dateRangeData.horizontal"
        @input="$emit('input', { index: 0, value: $event })"
      />
      <vb-input
        :id="dateRangeData.id"
        id-postfix="finish"
        :label="dateRangeData.label + dateRangeData.itemsList[1].label"
        :type="dateRangeData.subtype"
        :value="dateRangeData.itemsList[1].value"
        :required="
          dateRangeData.required || dateRangeData.itemsList[1].required
        "
        :disabled="
          dateRangeData.disabled || dateRangeData.itemsList[1].disabled
        "
        :readonly="
          dateRangeData.readonly || dateRangeData.itemsList[1].readonly
        "
        :additional-classes="dateRangeData.additionalClasses"
        :horizontal="dateRangeData.horizontal"
        @input="$emit('input', { index: 1, value: $event })"
      />
    </div>
  </div>
</template>

<script>
import VbInput from "./BS46Input";
export default {
  name: "VbDateRange",
  components: { VbInput },
  props: {
    dateRangeData: Object,
  },
  computed: {
    filterClass: function () {
      let filterClass =
        "form-group d-flex flex-column justify-content-end mb-0 col";
      if (this.dateRangeData.width) {
        filterClass += "-" + this.dateRangeData.width;
      }
      if (this.dateRangeData.responsive) {
        filterClass += " " + this.dateRangeData.responsive;
      }
      return filterClass;
    },
  },
};
</script>
