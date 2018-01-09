Vue.component('modal', {
  template: `<div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="box">
            <slot></slot>
          </div>
        </div>
        <button @click="closeModal()" class="modal-close is-large" aria-label="close"></button>
      </div>`,
  data() {
    return {
    }
  },
  methods: {
    closeModal() {
      this.$emit('modalclosed');
    }
  }
})
