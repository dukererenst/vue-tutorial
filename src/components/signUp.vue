<template>
  <b-form @submit.prevent="onSubmit" @reset="onReset"  style="min-height: 400px;">  
      <!-- <b-form @submit="onSubmit" @reset="onReset">    NOTE: Event Modifiers --> 
    <b-form-group
      id="input-group-1"
      label="Email address:"
      label-for="input-1"
      description="We'll never share your email with anyone else."
    >
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        placeholder="Enter email"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.name"
        placeholder="Enter name"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group  v-if="!hideGender" id="input-group-3" label="Gender:" label-for="input-3">
      <b-form-select
        id="input-3"
        v-model="form.gender"
        :options="genders"
        required
      ></b-form-select>
    </b-form-group>

    <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
      <b-form-checkbox-group
        v-model="form.checked"
        id="checkboxes-4"
        :aria-describedby="ariaDescribedby"
      >
        <b-form-checkbox >Check me out</b-form-checkbox>
        <b-form-checkbox >Check that out</b-form-checkbox>
      </b-form-checkbox-group>
    </b-form-group>

    <b-button type="submit" variant="primary">Submit</b-button>
    <b-button type="reset" variant="danger" style="margin-left: 10px;">Reset</b-button>
  </b-form>
</template>

<script>
export default {
  props: {
      hideGender: {
          type: Boolean,
          default: false
      }
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        gender: null,
        checked: [],
      },
      genders: [
        { text: "Select One", value: null },
        "Man",
        "Woman",
        "Other"
      ],
      show: true,
    };
  },
    methods: {
      onSubmit() {
          const vm = this;

          return vm.$emit('submit', JSON.stringify(this.form));
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
};
</script>

<style>
</style>