<template>
  <transition :name="name">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "V2Transition",
  props: {
    name: String,
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.5s;
}
.zoom-enter,
.zoom-leave-to {
  transform: scale(0, 0);
  opacity: 0;
}
</style>
