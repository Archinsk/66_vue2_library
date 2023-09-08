<template>
  <transition-group :name="name"><slot></slot></transition-group>
</template>

<script>
export default {
  name: "V2TransitionGroup",
  props: {
    name: String,
  },
};
</script>

<style lang="scss">
.zoom-out-group-leave-to {
  transform: scale(0, 0);
  opacity: 0;
}
.zoom-out-group-leave-active {
  position: absolute;
}
</style>
