<template>
  <button
    :type="type ? type : 'button'"
    :class="btnClass"
    @click="$emit('click')"
  >
    <vb-icon
      v-if="icon"
      :name="typeof icon === 'string' ? icon : icon.name"
      :format="icon.format"
      :type="icon.type"
    />
    <span v-if="!(icon && square)">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import VbIcon from "./BS46Icon";
export default {
  name: "VbButton",
  components: { VbIcon },
  props: {
    type: String,
    theme: String,
    size: String,
    block: Boolean,
    square: Boolean,
    icon: [Object, String],
  },
  computed: {
    btnClass() {
      let btnClass = "btn";
      if (this.theme) {
        btnClass += ` btn-${this.theme}`;
      }
      if (this.size && ["sm", "lg"].includes(this.size)) {
        btnClass += ` btn-${this.size}`;
      }
      if (this.block) {
        btnClass += " btn-block";
      }
      if (this.square) {
        btnClass += " btn-square";
      }
      if (this.icon) {
        btnClass += " btn-icon";
      }
      return btnClass;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  &.btn-square {
    &:not(.btn-sm, .btn-lg) {
      width: 2.375rem;
    }
    &.btn-sm {
      width: 1.9375rem;
    }
    &.btn-lg {
      width: 3rem;
    }
  }

  &.btn-icon,
  &.btn-square {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    .icon + * {
      margin-left: 0.375em;
    }
  }
}
</style>
