<template>
  <div style="padding: 4%">
    <b-form>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="name"
          placeholder="Enter name"
          required
        ></b-form-input>
        Your name is {{ name }}
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          :value="name2"
          @input="updatedName"
          placeholder="Enter name"
          required
        ></b-form-input>
        Your name is {{ name2 }}
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      name2: ''
    };
  },
  methods: {
      updatedName(value) {
          console.log('value => ', value);
          this.name2 = value;

        //   @input="val => name2 = val"
      }
  }
};
</script>

<style>
</style>