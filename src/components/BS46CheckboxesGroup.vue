<template>
  <div>
    <vb-checkbox label="Первый" id="group-01" grouped />
    <vb-checkbox label="Второй" id="group-02" grouped />
    <vb-checkbox label="Третий" id="group-03" grouped />
    <vb-checkbox label="Четвертый" id="group-04" grouped />
  </div>
</template>

<script>
import VbCheckbox from "./BS46Checkbox";
export default {
  name: "VbCheckboxesGroup",
  components: { VbCheckbox },
};
</script>
