<template>
  <div style="padding: 4%">
    <b-container class="bv-example-row" style="padding-top: 2%">
      <b-row>
        <b-col>
          beforeCreate
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          created
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          beforeMount
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          mounted
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          beforeDestroy
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          destroyed
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
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