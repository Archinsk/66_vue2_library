<template>
  <vb-form-group
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
    <template v-if="focusable">
      <div v-if="horizontal" :class="fieldClass">
        <input
          :type="type"
          class="form-control"
          :id="idFull"
          :value="value"
          :required="required"
          :readonly="readonly"
          :disabled="disabled"
          v-model="inputValue"
          @input="$emit('input', inputValue)"
          @focus="$emit('focus')"
        />
      </div>
      <input
        v-else
        :type="type"
        class="form-control"
        :id="idFull"
        :value="value"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
        v-model="inputValue"
        @input="$emit('input', inputValue)"
        @focus="$emit('focus')"
      />
    </template>
    <template v-else>
      <div v-if="horizontal" :class="fieldClass">
        <input
          :type="type"
          class="form-control"
          :id="idFull"
          :value="value"
          :required="required"
          :readonly="readonly"
          :disabled="disabled"
          v-model="inputValue"
          @input="$emit('input', inputValue)"
        />
      </div>
      <input
        v-else
        :type="type"
        class="form-control"
        :id="idFull"
        :value="value"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
        v-model="inputValue"
        @input="$emit('input', inputValue)"
      />
    </template>
  </vb-form-group>
</template>

<script>
import VbFormGroup from "./BS46FormGroup";
export default {
  name: "VbInput",
  components: { VbFormGroup },
  props: {
    id: String,
    label: String,
    type: String,
    value: String,
    required: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    additionalClasses: Object,
    horizontal: Boolean,
    focusable: Boolean,
    idPostfix: String,
  },
  data() {
    return {
      inputValue: "",
    };
  },
  computed: {
    idFull: function () {
      let idFull = this.id;
      if (this.idPostfix) {
        idFull += "-" + this.idPostfix;
      }
      return idFull;
    },
    labelClass: function () {
      let labelClass = "";
      if (!this.horizontal) {
        labelClass += "form-label";
      } else {
        // labelClass += "col-form-label";
        if (this.additionalClasses.label) {
          labelClass += this.additionalClasses.label;
        } else {
          labelClass += " col";
        }
      }
      return labelClass;
    },
    fieldClass: function () {
      let fieldClass = "";
      if (this.additionalClasses.field) {
        fieldClass += this.additionalClasses.field;
      } else {
        fieldClass += "col";
      }
      return fieldClass;
    },
  },
  methods: {
    testFocus() {
      console.log("Фокус на поле сообщения");
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
