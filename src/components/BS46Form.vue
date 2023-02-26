<template>
  <form class="">
    <fieldset :disabled="formData.disabled ? true : false">
      <div class="row">
        <template v-for="formItem of formData.fields">
          <vb-input
            v-if="formItem.type === 'input' && formItem.subtype !== 'file'"
            :key="formItem.id"
            :id="formItem.id"
            :label="formItem.label"
            :type="formItem.subtype"
            :value="formItem.value"
            :required="formItem.required"
            :readonly="formItem.readonly"
            :disabled="formItem.disabled"
            :width-group="formItem.width"
            :responsive="formItem.responsive"
            :horizontal="formItem.horizontal"
            :horizontal-width="formItem.horizontalWidth"
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
            :readonly="formItem.readonly"
            :disabled="formItem.disabled"
            :without-label="formItem.withoutLabel"
            :width-group="formItem.width"
            :responsive="formItem.responsive"
            :horizontal="formItem.horizontal"
            :horizontal-width="formItem.horizontalWidth"
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
            :multiple="formItem.multiple"
            :badges="formItem.badges"
            :width-group="formItem.width"
            :responsive="formItem.responsive"
            :horizontal="formItem.horizontal"
            :horizontal-width="formItem.horizontalWidth"
            @change="$emit('change-form', { id: formItem.id, values: $event })"
          />
          <vb-checkbox
            v-if="formItem.type === 'checkbox'"
            :key="formItem.id"
            :id="formItem.id"
            :label="formItem.label"
            :value="formItem.value"
            :required="formItem.required"
            :disabled="formItem.disabled"
            :width-group="formItem.width"
            :responsive="formItem.responsive"
            :horizontal="formItem.horizontal"
            :horizontal-width="formItem.horizontalWidth"
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
        </template>
      </div>
    </fieldset>
  </form>
</template>

<script>
import VbInput from "./BS46Input";
import VbSelect from "./BS46Select";
import VbCheckbox from "./BS46Checkbox";
import VbDateRange from "./BS46DateRange";
import VbTextarea from "./BS46Textarea";
export default {
  name: "VbForm",
  components: {
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
