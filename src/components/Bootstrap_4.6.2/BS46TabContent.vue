<template>
  <div class="tab-content" :id="id">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VbTabContent",
  props: {
    id: String,
  },
};
</script>
