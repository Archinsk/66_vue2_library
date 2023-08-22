<template>
  <div :class="rangeClass">
    <div class="row">
      <vb-input
        :id="id + '-start'"
        :label="labelFrom"
        :type="type"
        :value="range.from.value"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        :additional-classes="additionalClasses"
        :horizontal="horizontal"
        @input="$emit('input', { key: 'from', value: $event })"
      />
      <vb-input
        :id="id + 'finish'"
        :label="labelTo"
        :type="type"
        :value="range.to.value"
        :required="required"
        :disabled="disabled"
        :readonly="readonly"
        :additional-classes="additionalClasses"
        :horizontal="horizontal"
        @input="$emit('input', { key: 'to', value: $event })"
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
    id: String,
    label: String,
    type: String,
    required: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    additionalClasses: Object,
    horizontal: Boolean,
    range: Object,
  },
  computed: {
    // Работает неправильно, переделать!
    rangeClass: function () {
      let rangeClass =
        "form-group d-flex flex-column justify-content-end mb-0 col";
      if (this.additionalClasses?.group) {
        rangeClass += "-" + this.additionalClasses.group * 2;
      }
      return rangeClass;
    },
    labelFrom: function () {
      let labelFrom = "";
      if (this.label) {
        labelFrom += this.label;
      }
      if (this.range.from.label) {
        labelFrom += this.range.from.label;
      }
      return labelFrom;
    },
    labelTo: function () {
      let labelTo = "";
      if (this.label) {
        labelTo += this.label;
      }
      if (this.range.to.label) {
        labelTo += this.range.to.label;
      }
      return labelTo;
    },
  },
};
</script>
