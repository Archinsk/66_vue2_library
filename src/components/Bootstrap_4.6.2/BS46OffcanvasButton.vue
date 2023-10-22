<template>
  <a
    v-if="tag === 'a'"
    href="#"
    role="button"
    class="btn btn-offcanvas"
    data-toggle="modal"
    :data-target="'#' + targetId"
    @click="$emit('click')"
  >
    <slot></slot>
  </a>
  <vb-button
    v-else
    class="btn btn-modal"
    type="button"
    :theme="theme"
    :size="size"
    :block="block"
    :square="square"
    :icon="icon"
    data-toggle="modal"
    :data-target="'#' + targetId"
    @click="$emit('click')"
  >
    <slot></slot>
  </vb-button>
</template>

<script>
import VbButton from "./BS46Button";
export default {
  name: "VbOffcanvasButton",
  components: { VbButton },
  props: {
    targetId: String,
    tag: String,
    theme: String,
    size: String,
    block: Boolean,
    square: Boolean,
    icon: [Object, String],
  },
};
</script>
