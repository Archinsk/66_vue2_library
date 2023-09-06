<template>
  <div class="accordion" :id="id">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VbAccordion",
  props: {
    id: String,
  },
};
</script>
