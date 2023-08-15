<template>
  <vb-form-group
    v-if="!grouped"
    :width-group="widthGroup"
    :horizontal="horizontal"
  >
    <div class="form-check">
      <input
        type="checkbox"
        class="form-check-input"
        :id="id"
        :checked="value"
        :required="required"
        :disabled="disabled"
        v-model="inputValue"
        @change="$emit('change', inputValue)"
      />
      <label class="form-check-label" :for="id"
        >{{ label }} <span v-if="required" class="text-danger">*</span></label
      >
    </div>
  </vb-form-group>
  <div v-else class="form-check">
    <input
      type="checkbox"
      class="form-check-input"
      :id="id"
      :checked="value"
      :required="required"
      :disabled="disabled"
      v-model="inputValue"
      @change="$emit('change', inputValue)"
    />
    <label class="form-check-label" :for="id"
      >{{ label }} <span v-if="required" class="text-danger">*</span></label
    >
  </div>
</template>

<script>
import VbFormGroup from "./BS46FormGroup";
export default {
  name: "VbCheckbox",
  components: { VbFormGroup },
  props: {
    id: String,
    label: String,
    value: Boolean,
    widthGroup: Number,
    required: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    grouped: Boolean,
  },
  data() {
    return {
      inputValue: false,
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
