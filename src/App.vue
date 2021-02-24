<template>
  <div>
    <navbar :show-searchbar="false"/>
    <div class="row">
      <div class="col-md-12">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from './components/base/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data() {
    return {
    }
  }
}
</script>

<style>
</style>