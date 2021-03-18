<template>
  <div style="padding: 4%">
    <b-container class="bv-example-row" style="padding-top: 2%">
      <b-row>
          <p><b-img :src="lifecycleImage" fluid></b-img></p>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import lifecycleImage from "../../assets/lifecycle.png"

export default {
  data() {
    return {
      lifecycleImage,
      message: ''
    }
  },

  beforeCreate() {
    console.log('before create triggered')
  },
  created() {
    console.log('created triggered')

  },

  beforeMount() {
    console.log('before mount triggered')
  },

  mounted() {
    console.log('mounted triggered')
  },

  beforeDestroy() {
    console.log('before destroy triggered')
  },

  destroyed() {
    console.log('destroyed triggered')
  },

}
</script>

<style>

</style>