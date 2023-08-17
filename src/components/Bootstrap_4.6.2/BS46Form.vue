<template>
  <form class="">
    <fieldset :disabled="formData.disabled ? true : false">
      <div class="row">
        <template v-for="formItem of formData.fields">
          <vb-input
            v-if="
              formItem.type === 'input' &&
              formItem.subtype !== 'file' &&
              formItem.subtype !== 'checkbox'
            "
            :key="formItem.id"
            :id="formItem.id"
            :label="formItem.label"
            :type="formItem.subtype"
            :value="formItem.value"
            :required="formItem.required"
            :disabled="formItem.disabled"
            :readonly="formItem.readonly"
            :additional-classes="formItem.additionalClasses"
            :horizontal="formItem.horizontal"
            :focusable="formItem.focusable"
            @input="$emit('change-form', { id: formItem.id, value: $event })"
            @focus="$emit('focus', formItem.id)"
          />
          <vb-textarea
            v-if="formItem.type === 'textarea'"
            :key="formItem.id"
            :id="formItem.id"
            :label="formItem.label"
            :value="formItem.value"
            :required="formItem.required"
            :disabled="formItem.disabled"
            :readonly="formItem.readonly"
            :additional-classes="formItem.additionalClasses"
            :horizontal="formItem.horizontal"
            @input="$emit('change-form', { id: formItem.id, value: $event })"
          />
          <vb-select
            v-if="formItem.type === 'select'"
            :key="formItem.id"
            :id="formItem.id"
            :label="formItem.label"
            :items-list="formItem.itemsList"
            :default-value-label="formItem.defaultValueLabel"
            :values="formItem.values"
            :required="formItem.required"
            :disabled="formItem.disabled"
            :additional-classes="formItem.additionalClasses"
            :multiple="formItem.multiple"
            :badges="formItem.badges"
            :horizontal="formItem.horizontal"
            @change="$emit('change-form', { id: formItem.id, values: $event })"
          />
          <vb-checkbox
            v-if="formItem.type === 'input' && formItem.subtype === 'checkbox'"
            :key="formItem.id"
            :id="formItem.id"
            :label="formItem.label"
            :value="formItem.value"
            :required="formItem.required"
            :disabled="formItem.disabled"
            :additional-classes="formItem.additionalClasses"
            :switch-mode="formItem.switchMode"
            @change="$emit('change-form', { id: formItem.id, value: $event })"
          />
          <vb-date-range
            v-if="formItem.type === 'range'"
            :key="formItem.id"
            :date-range-data="formItem"
            @input="
              $emit('change-form', {
                id: formItem.id,
                index: $event.index,
                value: $event.value,
              })
            "
          />
          <vb-checkboxes-group
            v-if="formItem.type === 'checkboxes-group'"
            :key="formItem.id"
            :id="formItem.id"
            :title="formItem.title"
            :items-list="formItem.itemsList"
            :values="formItem.values"
            :required="formItem.required"
            :disabled="formItem.disabled"
            :additional-classes="formItem.additionalClasses"
            :switch-mode="formItem.switchMode"
            @change="$emit('change-form', { id: formItem.id, values: $event })"
          />
          <vb-radio-group
            v-if="formItem.type === 'radio-group'"
            :key="formItem.id"
            :id="formItem.id"
            :title="formItem.title"
            :items-list="formItem.itemsList"
            :value="formItem.value"
            :required="formItem.required"
            :disabled="formItem.disabled"
            :additional-classes="formItem.additionalClasses"
            @change="$emit('change-form', { id: formItem.id, value: $event })"
          />
        </template>
      </div>
    </fieldset>
  </form>
</template>

<script>
import VbInput from "./Form_components/BS46Input";
import VbSelect from "./Form_components/BS46Select";
import VbCheckbox from "./Form_components/BS46Checkbox";
import VbDateRange from "./Form_components/BS46DateRange";
import VbTextarea from "./Form_components/BS46Textarea";
import VbCheckboxesGroup from "./Form_components/BS46CheckboxesGroup";
import VbRadioGroup from "./Form_components/BS46RadioGroup";
export default {
  name: "VbForm",
  components: {
    VbRadioGroup,
    VbCheckboxesGroup,
    VbDateRange,
    VbTextarea,
    VbInput,
    VbSelect,
    VbCheckbox,
  },
  props: {
    formData: Object,
  },
};
</script>
