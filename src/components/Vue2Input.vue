<template>
  <div>
    <template v-if="!framework">
      <label :for="id">{{ label }} <span v-if="required">*</span></label>
      <input
        :type="type"
        :id="id"
        :value="value"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
        v-model="inputValue"
        @input="$emit('input', inputValue)"
      />
    </template>
    <vb-input
      v-if="framework === 'bootstrap'"
      :label="label"
      :id="id"
      :value="value"
      :width-group="widthGroup"
      :responsive="responsive"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      :horizontal="horizontal"
      :horizontal-width="horizontalWidth"
      @input="$emit('input', $event)"
    />
  </div>
</template>

<script>
import VbInput from "./BS46Input";
export default {
  name: "vInput",
  components: { VbInput },
  props: {
    framework: String,
    label: String,
    type: String,
    id: String,
    idPostfix: String,
    value: String,
    widthGroup: Number,
    responsive: String,
    required: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    horizontal: Boolean,
    horizontalWidth: Object,
    focusable: Boolean,
  },
  data() {
    return {
      inputValue: "",
    };
  },
  created() {
    this.inputValue = this.value;
  },
  watch: {
    value: function () {
      this.inputValue = this.value;
    },
  },
};
</script>
