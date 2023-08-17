<template>
  <FormGroup
    :additional-classes="
      additionalClasses && additionalClasses.group
        ? additionalClasses.group
        : ''
    "
    :horizontal="horizontal"
  >
    <label v-if="label" :for="id" :class="labelClass"
      >{{ label }} <span v-if="required" class="text-danger">*</span></label
    >
    <div v-if="horizontal" :class="fieldClass">
      <textarea
        class="form-control"
        :id="idFull"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
        v-model="inputValue"
        @input="$emit('input', inputValue)"
      />
    </div>
    <textarea
      v-else
      class="form-control"
      :id="idFull"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      v-model="inputValue"
      @input="$emit('input', inputValue)"
    />
  </FormGroup>
</template>

<script>
import FormGroup from "./BS46FormGroup";
export default {
  name: "VbTextarea",
  components: { FormGroup },
  props: {
    id: String,
    label: String,
    value: String,
    required: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    additionalClasses: Object,
    horizontal: Boolean,
  },
  data() {
    return {
      inputValue: "",
    };
  },
  computed: {
    labelClass: function () {
      let labelClass = "";
      if (!this.horizontal) {
        labelClass += "form-label";
      } else {
        if (this.additionalClasses.label) {
          labelClass += ` $this.additionalClasses`;
        } else {
          labelClass += " col";
        }
      }
      return labelClass;
    },
    fieldClass: function () {
      let fieldClass = "";
      if (this.additionalClasses.field) {
        fieldClass += ` ${this.additionalClasses}`;
      } else {
        fieldClass += "col";
      }
      return fieldClass;
    },
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
