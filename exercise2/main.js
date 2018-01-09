new Vue({
  el: '#root',
  data: {
    modalShown: false
  },
  methods: {
    showModal() {
      this.modalShown = true;
    },
    hideModal() {
      this.modalShown = false;
    }
  }
});
