<template>
  <div style="padding: 4%">
    <b-container class="bv-example-row" style="padding-top: 2%">
      <b-row style="padding-bottom: 6%;">
        <b-col>
          <b-form-checkbox v-model="hideFoodSection" name="check-button" switch>
            Hide Food Section          </b-form-checkbox>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <sign-up :hide-food="hideFoodSection" @submit="onSubmit" />
        </b-col>
      </b-row>
      <b-row style="padding-top: 2%">
        <b-col> </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import SignUp from "../../components/signUp.vue";

export default {
  components: {
    SignUp,
  },
  data() {
    return {
      hideFoodSection: false,
    };
  },

  methods: {
    onSubmit(form) {
      console.log("form: ", form);
    },
  },
};
</script>

<style>
</style>