<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    :aria-labelledby="id + 'Label'"
    aria-hidden="true"
    :data-backdrop="staticBackdrop ? 'static' : ''"
    :data-keyboard="staticBackdrop ? false : true"
  >
    <div :class="modalDialogClass">
      <div class="modal-content">
        <div v-if="header" class="modal-header">
          <slot v-if="noTitle" name="modal-header"></slot>
          <h5 v-else class="modal-title" :id="id + 'Label'">
            <slot name="modal-header"></slot>
          </h5>
          <button
            v-if="!noCloseButton"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div v-if="footer" class="modal-footer">
          <slot name="modal-footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import $ from "jquery";
export default {
  name: "VbModal",
  props: {
    id: String,
    header: Boolean,
    noBody: Boolean,
    footer: Boolean,
    scrollable: Boolean,
    verticalCenter: Boolean,
    size: String,
    noTitle: Boolean,
    noCloseButton: Boolean,
    noBackdrop: Boolean,
    staticBackdrop: Boolean,
  },
  computed: {
    modalDialogClass: function () {
      let modalDialogClass = "modal-dialog";
      if (this.scrollable) {
        modalDialogClass += " modal-dialog-scrollable";
      }
      if (this.verticalCenter) {
        modalDialogClass += " modal-dialog-centered";
      }
      if (this.size && ["sm", "lg", "xl"].includes(this.size)) {
        modalDialogClass += " modal-" + this.size;
      }
      return modalDialogClass;
    },
  },
  mounted() {
    $("#" + this.id).modal({
      backdrop: true,
      show: false,
    });
  },
};
</script>
