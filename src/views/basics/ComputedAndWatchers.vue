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
            style="margin-top: 2%"
          ></b-form-input>
          <div class="mt-2">Value: {{ totalAmount }}</div>
          <div class="mt-2">{{ typing }}</div>
        </b-col>
      </b-row>
      <b-row>
        <b-col style="padding-top: 10%">
          <p>
            Ask a yes/no question:
            <input v-model="question" />
          </p>
          <p><b-img :src="answerImage" fluid></b-img></p>
          <p>{{ answer }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      baseFare: null,
      vatPercentage: null,
      typing: "no change no cry",
      question: "",
      answer: "I cannot give you an answer until you ask a question!",
      answerImage: ''
    };
  },
  computed: {
    totalAmount() {
      return (this.baseFare / 100) * this.vatPercentage;
    },

    fullName: {
      // getter
      get: function () {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      },
    },
  },

  watch: {
    baseFare(newVal, oldVal) {
      this.typing = `you changed ${oldVal} to ${newVal}`;
    },

    question(){
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },

  methods: {
    getAnswer() {
      var vm = this;

      if (vm.question.indexOf('?') === -1) {
        vm.answer = 'Questions usually contain a question mark. ;-)'
        return;
      }

      vm.answer = 'Thinking...'
      vm.axios.get('https://yesno.wtf/api')
        .then(function (response) {
          console.log('response: ', response);
          vm.answer = _.capitalize(response.data.answer)
          vm.answerImage = response.data.image;
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  },

  created() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
};
</script>

<style>
</style>