<template>
  <div style="padding: 4%">
    <b-container class="bv-example-row" style="padding-top: 2%">
      <b-row>
        <b-col>
          HTML attribute names are case-insensitive, so browsers will interpret
          any uppercase characters as lowercase. That means when you’re using
          in-DOM templates, camelCased prop names need to use their kebab-cased
          (hyphen-delimited) equivalents!
        </b-col>
      </b-row>
      <b-row style="padding-top: 2%;">
        <b-col>
          <greeting-component> </greeting-component>
          <!-- <say-hi-component> </say-hi-component> -->
          <!-- <GreetingComponent> </GreetingComponent> -->
          <!-- <greeting-component button-style="primary"> </greeting-component> -->
        </b-col>
      </b-row>
      <b-row style="padding-top: 2%;">
        <b-col>
          <GreetingGlobalComponent> </GreetingGlobalComponent>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GreetingComponent from "../../components/Greeting";

export default {
  components: {
    GreetingComponent,
    // 'say-hi-component': GreetingComponent
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>