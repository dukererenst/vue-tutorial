<template>
  <b-form>
    <!-- <b-button variant="success" @click="showAlert('Say Hi')">Say Hi</b-button> -->
    <b-button :variant="buttonStyle" @click="showAlert('Say Hi')">Say Hi</b-button>
  </b-form>
</template>

<script>
export default {
  props: {
    buttonStyle: {
      type: String,
      default: 'success'
    },
  },
  data() {
    return {}
  },

  methods: {
    showAlert(msg) {
      return alert(msg);
    }
  }
};
</script>

<style>
</style>