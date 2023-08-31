<template>
  <button
    class="btn btn-modal"
    type="button"
    data-toggle="modal"
    :data-target="'#' + targetId"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VbModalButton",
  props: {
    targetId: String,
  },
};
</script>
