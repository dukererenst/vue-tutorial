<template>
  <div style="padding: 4%">
    <b-container class="bv-example-row" style="padding-top: 2%">
      <b-row>
        <b-col>
          <b-form-input
            v-model="baseFare"
            type="number"
            placeholder="base fare"
          ></b-form-input>
          <b-form-input
            v-model="vatPercentage"
            type="number"
            placeholder="vat percentage"
            style="margin-top: 2%;"
          ></b-form-input>
          <div class="mt-2">Value: {{ totalAmount }}</div>
          <div class="mt-2"> {{ typing }} </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      baseFare: null,
      vatPercentage: null,
      typing: 'no change no cry'
    };
  },
  computed: {
    totalAmount() {
      return ( this.baseFare / 100 ) * this.vatPercentage;
    },

    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  },

  watch: {
    baseFare( newVal, oldVal) {
      this.typing = `you changed ${oldVal} to ${newVal}`
    }
  },
};
</script>

<style>
</style>